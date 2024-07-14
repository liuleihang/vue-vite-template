/** .prettierrc.js
 * 在VSCode中安装prettier插件 打开插件配置填写`.prettierrc.js` 将本文件作为其代码格式化规范
 * 在本文件中修改格式化规则，不会同时触发改变ESLint代码检查，所以每次修改本文件需要重启VSCode，ESLint检查才能同步代码格式化
 * 需要相应的代码格式化规范请自行查阅配置，下面为默认项目配置
 */
module.exports = {
  $schema: 'https://json.schemastore.org/prettierrc',
  // 控制是否在行尾添加分号
  semi: true,
  tabWidth: 2,
  singleQuote: true,
  printWidth: 100,
  // 在 ES5 兼容的上下文中使用尾随逗号
  trailingComma: 'es5',
  //在 windows 操作系统中换行符通常是回车 (CR) 加换行分隔符 (LF)，也就是回车换行(CRLF)，
  //然而在 Linux 和 Unix 中只使用简单的换行分隔符 (LF)。
  //对应的控制字符为 "\n" (LF) 和 "\r\n"(CRLF)。auto意为保持现有的行尾
  // 换行符使用 lf 结尾是 可选值"<auto|lf|crlf|cr>"
  endOfLine: 'auto',
  // 控制是否在括号内添加空格
  bracketSpacing: true,
  // 控制是否在数组括号内换行，默认是"consistent"，保持一致
  arrayBracketNewline: 'consistent',
  // 控制 prose 类型内容（如Markdown）的换行策略，可选值有 "always"、"never" 和 "preserve"
  //
  proseWrap: 'preserve'
};