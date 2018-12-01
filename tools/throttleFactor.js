/**
 * 节流执行某个函数
 * 比如处理按键自动搜索的时候，避免过多的请求后台，可以设置300ms延迟执行
 */
export default function throttleFactor(delay = 300) {
  let throttleTimer;

  return function (func, args, context = this) {
    if (throttleTimer) {
      console.debug('last timer cancel');
      clearTimeout(throttleTimer);
    }

    throttleTimer = setTimeout(() => {
      func.apply(context, args);
      throttleTimer = undefined;
    }, delay);
  }
}