---
nav: 组件库
---

# 搜索组件

```jsx
/**
 * compact: false
 * title: 我是标题
 * description: 我是简介，我可以用 `Markdown` 来编写
 * inline: true
 */

import { QueryCondition, QueryType } from 'query-condition';

export default () => (
  <QueryCondition
    queryList={[
      {
        type: QueryType.INPUT,
        label: '项目编号',
        name: 'projectNumber',
      },
      {
        type: QueryType.INPUT,
        label: '项目名称',
        name: 'projectName',
      },
      {
        type: QueryType.INPUT,
        label: '流程编号',
        name: 'modelKey',
      },
      {
        type: QueryType.INPUT,
        label: '流程名称',
        name: 'modelName',
      },
      {
        type: QueryType.INPUT,
        label: '责任人',
        name: 'personLiable',
      },
    ]}
    initialValues={{}}
  ></QueryCondition>
);
```
