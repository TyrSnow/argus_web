import React from 'react';
import {
  Table,
} from 'antd';

class List extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.columns = [
      {
        title: '维度',
        dataIndex: 'name'
      },
      {
        title: '编码',
        dataIndex: 'code',
      },
      {
        title: '类型',
        dataIndex: 'kind',
      },
      {
        title: '更新时间',
        dataIndex: 'updatedAt',
      },
      {
        title: '操作',
        render: (text, record) => {
          return (
            <>
              <a>编辑</a>
            </>
          );
        },
      },
    ];
  }
  render() {
    return (
      <Table
        rowKey="_id"
        columns={this.columns}
        dataSource={this.props.data}
        pagination={this.props.pagination}
        onChange={this.props.onChange}
      />
    )
  }
}

export default List;
