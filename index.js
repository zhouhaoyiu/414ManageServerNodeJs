var Koa = require('koa');
var router = require('koa-router')();
var app = new Koa();
var mysql = require('mysql');
var cors = require('koa2-cors');
app.use(cors());
router.get('/', function (ctx, next) {
    ctx.body = "Hello koa";
});
router.get('/login', function (ctx, next) {
    var username = ctx.query.username;
    var password = ctx.query.password;
    console.log(ctx.query.username);
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Zbw574601!!!',
        database: '414'
    });
    connection.connect();
    connection.query('SELECT * from admin', function (error, results, fields) {
        // console.log('The solution is: ', results);
    });
});
app.use(router.routes()); //作用：启动路由
app.use(router.allowedMethods('*')); // 作用： 这是官方文档的推荐用法,我们可以看到router.allowedMethods()用在了路由匹配router.routes()之后,所以在当所有路由中间件最后调用.此时根据ctx.status设置response响应头
app.listen(3000);
console.log('[demo] start-quick is starting at port 3000');
