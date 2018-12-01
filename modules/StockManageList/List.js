import React from 'react';
import {
  Table,
} from 'antd';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.columns = [
      {
        title: '代码',
        dataIndex: 'code',
      },
      {
        title: '名称',
        dataIndex: 'name'
      },
      {
        title: '行业',
        dataIndex: 'industry'
      },
      {
        title: '地区',
        dataIndex: 'area'
      },
      {
        title: '操作',
        render: (text, record) => {
          return (
            <>
              <a>财务数据</a>
            </>
          );
        }
      }
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
    );
  }
}

export default List;
