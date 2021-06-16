const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa()
const mysql = require('mysql');
const cors = require('koa2-cors');
app.use(cors());

router.get('/', (ctx, next) => {
  ctx.body = `Hello koa`;
})

router.get('/login', (ctx, next) => {
  let username:string = ctx.query.username
  let password:string = ctx.query.password
  console.log(ctx.query.username);
  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Zbw574601!!!',
    database: '414'
  });

  connection.connect();

  connection.query('SELECT * from admin', (error, results, fields) => {
    // console.log('The solution is: ', results);
  });
});

app.use(router.routes()); //作用：启动路由
app.use(router.allowedMethods('*')); // 作用： 这是官方文档的推荐用法,我们可以看到router.allowedMethods()用在了路由匹配router.routes()之后,所以在当所有路由中间件最后调用.此时根据ctx.status设置response响应头
app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')