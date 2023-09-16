const express  = require("express") //import express vào trang wed đẻ dùng đc

const app = express();
const port = 3000

app.set('views','./views')
app.set('views engine','pug')


app.get("/",(req,res)=>{
    res.render('index.pug',{title:"hey",message:"anh "})
})

app.get("/products",(req,res)=>{
    res.send("helowword 1 ")
})

app.use(express.static('public'))



app.listen(port,()=>{
    console.log(`lắng nghe cổng ${port}`)
})