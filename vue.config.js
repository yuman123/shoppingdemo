const goods = require("./data/goods.json");
module.exports = {
    outputDir: 'dist',//�������Ŀ¼
    assetsDir: 'assets',//��̬��ԴĿ¼
    lintOnSave: false,//�Ƿ���eslint������
    devServer: {
        open: true, 
        proxy: {
            //���ÿ���
            'api': {
                target: 'http://localhost:8080/api/',//��Ҫ����õ�ַ��http://localhost:5000/api/
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
            });//�����������http://localhost:8080/api/goods���ʵ�����
        }
    },

}