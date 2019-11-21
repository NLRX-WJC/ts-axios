export default function isAbsoluteURL(url: string): boolean {
  // 如果URL以“<scheme>：//”或“//”（协议相对URL）开头，则该URL被视为绝对值。
  // RFC 3986将方案名称定义为以字母开头的字符序列，
  // 后跟字母，数字，加号，句点或连字符的任意组合。
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
}
