require('dotenv').config();
const path = require('path')
const express = require('express');

const expressLayouts = require('express-ejs-layouts')

const pathToPublicFiles = path.join(__dirname,'./publicFiles')
const PORT = process.env.PORT;
const app = express();
app.use(expressLayouts)
app.set('view engine', 'ejs')
app.use(express.static(pathToPublicFiles))
app.use(express.static(pathToPublicFiles+'./images'))

app.use('/', require('./Routes/Index/index'));


app.listen(PORT, ()=> {
    console.log('Server is up: ' + PORT);
})