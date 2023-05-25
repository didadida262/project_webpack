export class MyPlugin {
    apply(compile) {
        console.log('my plugins 启动！！！')
        compile.hooks.emit.tap('My plugin', (context) => {
            for (let name in context) {
                console.log(name)
            }
        })
    }
}