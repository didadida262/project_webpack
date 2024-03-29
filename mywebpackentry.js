
import config from './mywebpack.config.js'

const parseFile = (file) =>  {
    // 读取文件内容数据
    const fileContent = fs.readFileSync(file, "utf-8");
    // 使用babel parser解析AST
    const ast = parser.parse(fileContent, { sourceType: "module" });
    let importFilePath = "";
    let importVarName = "";
    let importCovertVarName = "";
    let hasExport = false;

    // 使用babel traverse来遍历ast上的节点
    traverse(ast, {
      ImportDeclaration(p) {
        // 获取被import的文件---->  ./helloWorld.js
        const importFile = p.node.source.value;
        // 获取文件路径 helloWorld
        importVarName = p.node.specifiers[0].local.name;
        // ./helloWorld.js
        importFilePath = path.join(path.dirname(file), importFile);
        importFilePath = `./${importFilePath}`;
        // 替换后的变量名字
        // ____WEBPACK_IMPORTED_MODULE_0__
        importCovertVarName = `__${path.basename(
            importFile.split('.')[0]
        )}__WEBPACK_IMPORTED_MODULE_0__`;


        // 构建一个变量定义的AST节点
        const variableDeclaration = t.variableDeclaration("var", [
            t.variableDeclarator(
            t.identifier(
                importCovertVarName
            ),
            t.callExpression(t.identifier("__webpack_require__"), [
                t.stringLiteral(importFilePath),
            ])
            ),
        ]);

        // 将当前节点替换为变量定义节点
        p.replaceWith(variableDeclaration);
      },
      CallExpression(p) {
        // 如果调用的是import进来的函数
        if (p.node.callee.name === importVarName) {
          // 就将它替换为转换后的函数名字
          p.node.callee.name = `${importCovertVarName}.default`;
        }
      },
      Identifier(p) {
        // 如果调用的是import进来的变量
        if (p.node.name === importVarName) {
          // 就将它替换为转换后的变量名字
          p.node.name = `${importCovertVarName}.default`;
        }
      },
      ExportDefaultDeclaration(p) {
        hasExport = true; // 先标记是否有export
        // 跟前面import类似的，创建一个变量定义节点
        const variableDeclaration = t.variableDeclaration("const", [
          t.variableDeclarator(
            t.identifier("__WEBPACK_DEFAULT_EXPORT__"),
            t.identifier(p.node.declaration.name)
          ),
        ]);
  
        // 将当前节点替换为变量定义节点
        p.replaceWith(variableDeclaration);
      },
    });
    let newCode = generate(ast).code;
    if (hasExport) {
        newCode = `${EXPORT_DEFAULT_FUN} ${newCode}`;
      }
      newCode = `${ESMODULE_TAG_FUN} ${newCode}`;

    // 返回一个包含必要信息的新对象
    return {
      file,
      dependencies: [importFilePath],
      code: newCode,
    };
}
// 递归解析多个文件
const parseFiles = (entryFile) => {
    const entryRes = parseFile(entryFile); // 解析入口文件
    const results = [entryRes]; // 将解析结果放入一个数组
  
    // 循环结果数组，将它的依赖全部拿出来解析
    for (const res of results) {
      const dependencies = res.dependencies;
      dependencies.map((dependency) => {
        if (dependency) {
          const ast = parseFile(dependency);
          results.push(ast);
        }
      });
    }
    return results;
  }
  // 从入口扫描，输出所有模块的转换之后的特定结构的数据
  const ast = parseFiles(config.entry)
  console.log('ast>>>', ast)