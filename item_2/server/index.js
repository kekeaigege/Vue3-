//搭建服务
const express = require('express');

const app = express();

const router = require('./router');

app.use('/api',router)

app.listen(8989,()=>{
    console.log(8989)
})