import Koa from 'koa';
const app = new Koa();

// response
app.use((req, res) => {
    if (req.path === '/') {req.body = '<h1>Hello Koa</h1>'}
    else if (req.path === '/hakkimda') {req.body = '<h1>Hakkimda sayfasina hosgeldiniz</h1>'}
    else if (req.path === '/iletisim') {req.body = '<h1>Iletisim sayfasina hosgeldiniz</h1>'}
    else {
        req.status = 404
        req.body = '<h1 style="color:red;">404 sayfa bulunamadi</h1>'
    }
});



const port = 3000
app.listen(port, () => {
    console.log(`Port ${port} ile sunucuya baglanildi`)
});
