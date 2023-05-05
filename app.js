const http=require('http')

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    res.setHeader('content-type','text/html');
    res.write('html');
    res.write('<header><title>this is header file</title></header>');
    res.write('<body><h1>this is body element</h1></body>');
    res.write('</html>');
    res.end();
    //process.exit();
})

server.listen(4000);