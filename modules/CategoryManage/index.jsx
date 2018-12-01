import React from 'react';
import List from './List';
import * as CategoryService from '../../service/category';

class CategoryManage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: {},
      list: [],
      pagination: {
        current: 1,
        pageSize: 10,
      },
    };
  }
  componentDidMount() {
    this.fetch(this.state.query, this.state.pagination);
  }

  fetch = (query = this.state.query, pagination = this.state.pagination) => {
    const { pageSize, current } = pagination;
    CategoryService.query(current, pageSize).then((resp) => {
      const pagination = {...this.state.pagination};
      pagination.current = resp.data.data.page.page;
      pagination.total = resp.data.data.page.total;
      this.setState({
        pagination,
        list: resp.data.data.list,
      });
    });
  }

  handlePaginationChange = (pagination) => {
    this.setState({
      pagination,
    }, () => {
      this.fetch();
    });
  }

  render() {
    return (
      <>
        <List
          data={this.state.list}
          pagination={this.state.pagination}
          onChange={this.handlePaginationChange}
        />
      </>
    );
  }
}

export default CategoryManage;
