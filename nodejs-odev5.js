import http from 'http'


const server = http.createServer((req, res)=> {

    const url = req.url

    if (url === '') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>INDEX SAYFASI</h2>");    
    } else if (url === '/hakkimda') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>HAKKIMDA SAYFASI</h2>");
    } else if (url === '/iletisim') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>ILETISIM SAYFASI</h2>");
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h2>BAMBASKA BIR SAYFA. YANLIS YERDESINIZ.</h2>");
    }

    console.log('Bir istek gönderildi.');  // burada isteğimizin gönderildiğini simüle ediyoruz.

    res.end()
});

const port = 5000
server.listen(port, () => {
    console.log(`Sunucu port ${port} uzerinde başlatıldı.`);
})

