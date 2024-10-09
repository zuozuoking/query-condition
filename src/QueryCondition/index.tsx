import { DownOutlined, UpOutlined } from '@ant-design/icons';
import type { DatePickerProps, FormInstance } from 'antd';
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  MenuProps,
  Row,
  Select,
} from 'antd';
import React, { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';

const { RangePicker } = DatePicker;

const QueryRow = styled(Row)`
  width: 100%;
  .ant-form-item .ant-form-item-label > label {
    width: 100px;
    justify-content: end;
  }
`;

const QueryCol = styled(Col)`
  margin-bottom: 12px;
`;

const BtnCol = styled(QueryCol)`
  text-align: right;
  padding-right: 8px;
  button {
    margin: 0 8px;
  }
`;

const MyDatePriker = styled(DatePicker)`
  &.ant-picker {
    width: 100%;
  }
`;

const MyRangePicker = styled(RangePicker)`
  &.ant-picker-range {
    width: 100%;
  }
`;

const QueryConditionBg = styled.div<{ height: number }>(
  (props) => `
height: 32px;
overflow: hidden;
transition: all 0.5s ease-out;

&.show{
  height: ${props.height}px;
}
`,
);

export const dateFormat = 'YYYY-MM-DD';

/**
 * 组件类型
 */
export enum QueryType {
  /**
   * 完全自由的子元素，不带任何布局
   */
  FREE,
  /**
   * 自定义类型(自带布局)
   */
  CUSTOM,
  /**
   * 输入框
   */
  INPUT,
  /**
   * 下拉框
   */
  SELECT,
  /**
   * 选择时间范围
   */
  RANGEPICKER,
  /**
   * 时间选择器(日期)
   */
  DATEPICKER,
}
export interface QueryItem {
  /**
   * 组件类型
   */
  type: QueryType;
  /**
   * 组件名（用于取值）
   */
  name: string;
  /**
   * 组件显示文字
   */
  label: string;
  /**
   * 日期选择类型
   */
  picker?: any;
  /**
   * 日期类型
   */
  format?: string;
  /**
   * 下拉选项
   */
  options?: Array<{
    /**
     * 选项值
     */
    value: number | undefined | string;
    /**
     * 选项显示文本
     */
    label: string | undefined;
  }>;

  /**禁用类型 */
  disabledDate?: DatePickerProps['disabledDate'];

  optionFilterProp?: string;
  /**
   * 渲染函数
   * @returns 组件
   */
  render?: () => ReactNode;
}

export interface BtnMore {
  /**
   * 按钮列表
   */
  menuList: MenuProps['items'];
  /**
   * 按钮点击事件
   */
  click: MenuProps['onClick'];
}

interface Props {
  /**
   * 查询参数列表
   */
  queryList: Array<QueryItem>;
  /**
   * 查询条件初始化
   */
  initialValues?: Record<string, any>;
  /**
   * 查询事件
   * @param values 查询参数
   * @returns
   */
  submit?: (values: any) => void;
  /**
   * 重置事件
   * @returns
   */
  reset?: () => void;
  /**
   * 注册表单form
   * @returns
   */
  form?: FormInstance<any>;
}

function useFormHeight() {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const formEl = document.querySelector('.query-form');
    if (formEl) {
      setHeight(formEl.clientHeight);
    }
  }, []);

  return {
    height,
  };
}

function useGetQueryList(queryList: Array<QueryItem>) {
  const [more, setMore] = useState(false);

  const rangeDateIndex = queryList.findIndex(
    (queryItem) => queryItem.type === QueryType.RANGEPICKER,
  );
  const showMore = () => {
    if (queryList.length >= 4) return true;
    if (queryList.length > 1 && rangeDateIndex > 1) {
      return true;
    }
  };

  let tempList: Array<QueryItem> = [...queryList];
  let btnItem = {
    label: '',
    name: 'btn',
    type: QueryType.FREE,
    render: () => (
      <BtnCol span={6} key="btn">
        <Button type="primary" htmlType="submit">
          查询
        </Button>
        <Button htmlType="reset">重置</Button>
        {showMore() && (
          <Button
            onClick={() => {
              setMore(!more);
            }}
          >
            更多
            {more ? <UpOutlined /> : <DownOutlined />}
          </Button>
        )}
      </BtnCol>
    ),
  };

  const empty = (i: number | string) => {
    return {
      label: '',
      name: i.toString(),
      type: QueryType.CUSTOM,
      render: () => <span></span>,
    };
  };
  if (rangeDateIndex === 2) {
    tempList.splice(2, 0, empty(2));
    tempList.splice(3, 0, btnItem);
  } else if (rangeDateIndex === 1) {
    tempList.push(btnItem);
  } else if (rangeDateIndex === 0) {
    tempList.push(empty(1));
    tempList.push(btnItem);
  } else {
    if (tempList.length < 4) {
      let num = 3 - tempList.length;
      for (let i = 0; i < num; i++) {
        tempList.push(empty(i));
      }
      tempList.push(btnItem);
    } else {
      tempList.splice(3, 0, btnItem);
    }
  }

  return { list: tempList, more };
}

/**
 * 查询参数组件
 * @param props
 * @returns
 */
export default function QueryCondition(props: Readonly<Props>) {
  const { list, more } = useGetQueryList(props.queryList);
  const { height } = useFormHeight();
  return (
    <QueryConditionBg height={height} className={`${more && 'show'}`}>
      <Form
        className="query-form"
        layout="inline"
        initialValues={props.initialValues}
        onFinish={props.submit}
        onReset={props.reset}
        form={props.form}
        // autoComplete={"off"}   // 关闭输入历史
      >
        <QueryRow>
          {list.map((item) => {
            if (item.type === QueryType.FREE) {
              return item.render ? item.render() : <></>;
            }
            if (item.type === QueryType.CUSTOM && item.render) {
              return (
                <QueryCol span={6} key={item.name}>
                  <Form.Item label={item.label} name={item.name}>
                    {item.render()}
                  </Form.Item>
                </QueryCol>
              );
            }
            if (item.type === QueryType.RANGEPICKER) {
              return (
                <QueryCol span={12} key={item.name}>
                  <Form.Item label={item.label} name={item.name}>
                    <MyRangePicker
                      format={item.format ? item.format : dateFormat}
                      disabledDate={item.disabledDate}
                      picker={item.picker}
                    />
                  </Form.Item>
                </QueryCol>
              );
            }
            return (
              <QueryCol span={6} key={item.name}>
                <Form.Item label={item.label} name={item.name}>
                  {(() => {
                    if (item.type === QueryType.INPUT) {
                      return <Input allowClear></Input>;
                    }
                    if (item.type === QueryType.SELECT) {
                      return (
                        <Select
                          allowClear
                          options={item.options}
                          showSearch
                          optionFilterProp={item.optionFilterProp}
                          filterOption={(
                            input: string,
                            option?: {
                              label: string | undefined;
                              value: string | number | undefined;
                            },
                          ) => (option?.label ?? '').includes(input)}
                        />
                      );
                    }
                    if (item.type === QueryType.DATEPICKER) {
                      return (
                        <MyDatePriker
                          allowClear
                          format={item.format ? item.format : dateFormat}
                          picker={item.picker}
                        ></MyDatePriker>
                      );
                    }
                    return <></>;
                  })()}
                </Form.Item>
              </QueryCol>
            );
          })}
        </QueryRow>
      </Form>
    </QueryConditionBg>
  );
}
