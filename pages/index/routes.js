import Dashboard from '../../modules/Dashboard';
import StockManageList from '../../modules/StockManageList';
import StockBlackList from '../../modules/StockBlackList';
import CategoryManage from '../../modules/CategoryManage';
import Page404 from '../../modules/404';

const routes = [
  {
    key: '0',
    label: '工作台',
    Component: Dashboard,
  },
  {
    key: '1',
    label: '股票管理',
    subMenu: [
      {
        key: '1.0',
        label: '沪深两市',
        Component: StockManageList,
      },
      {
        key: '1.1',
        label: '黑名单',
        Component: StockBlackList,
      }
    ]
  },
  {
    key: '2',
    label: '维度管理',
    subMenu: [
      {
        key: '2.0',
        label: '维度列表',
        Component: CategoryManage,
      },
      {
        key: '2.1',
        label: '维度数据',
      }
    ]
  }
];

function generateRouteMap(routes) {
  let routeMap = {};
  routes.forEach(route => {
    if (route.subMenu) {
      Object.assign(routeMap, generateRouteMap(route.subMenu));
    } else {
      routeMap[route.key] = route;
    }
  });

  return routeMap;
}

const routeMap = generateRouteMap(routes);
routes.getContent = (active) => {
  let route = routeMap[active];
  return route && route.Component ? route.Component : Page404;
};

export default routes;
