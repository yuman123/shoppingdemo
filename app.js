const http = require('http');

const server = http.createServer();

server.on('request', function(req,res){

const url = req.url;


if(url === '/startit'){

var scriptstr = 'startit()';
console.log(criptstr);
res.end(scriptstr)

}else{

    res.end('404')
}
})

server.listen(3030,function(){

    console.log('server listen at 3030')

})