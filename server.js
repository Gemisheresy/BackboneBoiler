const express = require('express');
const app = express();
app.use('/public',express.static(`${__dirname}/public`));
app.use('/vendor',express.static(`${__dirname}/public/Vendor`));
app.use('/app',express.static(`${__dirname}/public/javascript`))
app.get("/",(req,res)=>{
    res.sendFile(`${__dirname}/public/index.html`);
})
app.listen(8080);