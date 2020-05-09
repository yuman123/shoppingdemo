const goods = require("./data/goods.json");
const ratings = require("./data/ratings.json")
module.exports = {
    // outputDir: 'dist',//构建输出目录
    // assetsDir: 'assets',//静态资源目录
    lintOnSave: false,//是否开启eslint保存检测
    devServer: {
        open: true, //在浏览器自动打开
<<<<<<< HEAD
        hot:true,
        // disableHostCheck: true, // 禁用webpack热重载检查 解决热更新失效问题
=======
>>>>>>> d1cc9285e884d54c1684ac036fe550836d822de8
        // proxy: {
        //     //配置跨域
        //     'api': {
        //         target: 'http://localhost:8080/api/',//需要跨域得地址如http://localhost:5000/api/
        //         ws: true,
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //     }
        // },
        before(app) {
            app.get("/api/goods", (req, res) => {
                res.json(goods);
            });//在浏览器可用http://localhost:8080/api/goods访问到数据
            app.get("/api/ratings", (req, res) => {
                res.json(ratings);
            });//在浏览器可用http://localhost:8080/api/ratings访问到数据
        }
    },

}