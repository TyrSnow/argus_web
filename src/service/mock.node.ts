const nodeList: List<ListNode> = {
  list: [
    {
      id: 0,
      name: '节点0',
      last_push_time: new Date().valueOf(),
      total_calc_number: 100,
      approval_number: 23,
      accuracy: 0.73,
    }, {
      id: 0,
      name: '节点1',
      last_push_time: new Date().valueOf(),
      total_calc_number: 100,
      approval_number: 23,
      accuracy: 0.73,
    }, {
      id: 0,
      name: '节点1',
      last_push_time: new Date().valueOf(),
      total_calc_number: 100,
      approval_number: 23,
      accuracy: 0.73,
    }
  ],
  page: {
    current: 1,
    size: 10,
    total: 3
  }
};

const nodeDetail: NodeDetail = {
  id: 0,
  name: '节点0',
  last_push_time: new Date().valueOf(),
  total_calc_number: 100,
  approval_number: 23,
  accuracy: 0.73,
};

const nodeStockList = {
  list: []
};

export {
  nodeList,
  nodeDetail,
  nodeStockList
};
