export function deepCopy(target) {
  //数组 对象深拷贝
  if (typeof target == 'object') {
    const result = Object.prototype.toString.call(target) === '[object Array]' ? [] : {}
    for (const key in target) {
      if (Object.prototype.toString.call(target[key]) === '[object object]') {
        result[key] = deepCopy(target[key]);
      } else {
        result[key] = target[key];
      }
    }
    return result;
  }
  return target;
}