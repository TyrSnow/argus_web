/**
 * 业务字段合法性的本地校验
 * 校验通过返回undefined，否则返回提示信息
 */

/**
 * 字段是否满足密码规则
 * @param {string} password
 * @return string | undefined
 */
export function passwordValidator(password) {
  if (typeof password !== 'string') { // 这个错误说明代码有问题
    return '请输入您的密码';
  }

  if (password.length > 16 || password.length < 6) {
    return '密码长度需要在6位到16位之间';
  }

  if ((password.match(/^\d+$/)) || password.match(/^[a-zA-Z]$/)) {
    return '密码不能是纯数字或纯字母';
  }

  return;
}