# QueryCondition

This is an example component.

```jsx
import { QueryCondition, QueryType } from 'table';

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
