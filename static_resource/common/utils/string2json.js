/**
 * 解析如 name=A&age=0 这样的字符串为
 * {
 *   name: 'A',
 *   age: 0
 * }
 */

export default (str) => {
  let vars = str.split('&')
  let result = {}
  
  for (let i = 0,len = vars.length;i < len;i++) {
    let pair = vars[i].split('=');
    if (pair[0] === name) {
      return pair[1]
    }
    result[pair[0]] = pair[1]
  }

  return result
}