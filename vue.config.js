const goods = require("./data/goods.json");
const ratings = require("./data/ratings.json")
module.exports = {
    // outputDir: 'dist',//�������Ŀ¼
    // assetsDir: 'assets',//��̬��ԴĿ¼
    lintOnSave: false,//�Ƿ���eslint������
    devServer: {
        open: true, //��������Զ���
<<<<<<< HEAD
        hot:true,
        // disableHostCheck: true, // ����webpack�����ؼ�� ����ȸ���ʧЧ����
=======
>>>>>>> d1cc9285e884d54c1684ac036fe550836d822de8
        // proxy: {
        //     //���ÿ���
        //     'api': {
        //         target: 'http://localhost:8080/api/',//��Ҫ����õ�ַ��http://localhost:5000/api/
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
            });//�����������http://localhost:8080/api/goods���ʵ�����
            app.get("/api/ratings", (req, res) => {
                res.json(ratings);
            });//�����������http://localhost:8080/api/ratings���ʵ�����
        }
    },

}