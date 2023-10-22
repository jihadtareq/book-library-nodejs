const app = require('./src')
const { host, port} = require('./src/config/config')
require('./cron')
app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Content-Type', 'application/json');
    next();
});
 
app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

