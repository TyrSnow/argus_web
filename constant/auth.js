export const AUTH_TYPE = {
  GUEST: -1,
  USER: 0,
  ADMIN: 1,
  ROOT: 2,
};

export const AUTH_LABEL = {
  [AUTH_TYPE.GUEST]: '游客',
  [AUTH_TYPE.USER]: '用户',
  [AUTH_TYPE.ADMIN]: '管理员',
  [AUTH_TYPE.ROOT]: '超级管理员',
};
