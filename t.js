(function( gragh ) {
                        function require( module ) {
                                // 相对路径转换成绝对路径的方法
                                function localRequire(relativePath) {
                                        return require(gragh[module].dependencies[relativePath])
                                }
                                const exports = {};
                                (function( require, exports, code ) {
                                        eval(code)
                                })( localRequire, exports, gragh[module].code )

                                return exports;
                        }
                        require('./app.js')
                })({"./app.js":{"dependencies":{"./test1.js":"./test1.js"},"code":"\"use strict\";\n\nvar _test = _interopRequireDefault(require(\"./test1.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nconsole.log(_test[\"default\"]);"},"./test1.js":{"dependencies":{"./test2.js":"./test2.js"},"code":"\"use strict\";\n\nvar _test = _interopRequireDefault(require(\"./test2.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nconsole.log('this is test1.js ', _test[\"default\"]);"},"./test2.js":{"dependencies":{},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nfunction test2() {\n  console.log('this is test2 ');\n}\n\nvar _default = test2;\nexports[\"default\"] = _default;"}})