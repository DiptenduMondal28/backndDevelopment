const http=require('http')

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    if(req.url=='/home'){

        res.setHeader('content-type','text/html');
        res.write('html');
        res.write('<header><title>Home page</title></header>');
        res.write('<body><h1>Welcome home</h1></body>');
        res.write('</html>');
        res.end();
    }else if(req.url==='/about'){
        res.setHeader('content-type','text/html');
        res.write('html');
        res.write('<header><title>About page</title></header>');
        res.write('<body><h1>Welcome to About Us page</h1></body>');
        res.write('</html>');
        res.end();
    }else if(req.url=='/node'){
        res.setHeader('content-type','text/html');
        res.write('html');
        res.write('<header><title>Node page</title></header>');
        res.write('<body><h1>Welcome to my Node Js project</h1></body>');
        res.write('</html>');
        res.end();
    }else{
        res.setHeader('content-type','text/html');
        res.write('html');
        res.write('<header><title>wrong url</title></header>');
        res.write('<body><h1>your url is wrong</h1></body>');
        res.write('</html>');
        res.end();
    }
})

server.listen(4000);