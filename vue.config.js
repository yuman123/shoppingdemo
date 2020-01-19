const goods = require("./data/goods.json");
module.exports = {
    outputDir: 'dist',//构建输出目录
    assetsDir: 'assets',//静态资源目录
    lintOnSave: false,//是否开启eslint保存检测
    devServer: {
        open: true, 
        proxy: {
            //配置跨域
            'api': {
                target: 'http://localhost:8080/api/',//需要跨域得地址如http://localhost:5000/api/
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        before(app) {
            app.get("/api/goods", (req, res) => {
                res.json(goods);
            });//在浏览器可用http://localhost:8080/api/goods访问到数据
        }
    },

}