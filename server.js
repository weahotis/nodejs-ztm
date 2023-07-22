const express = require('express')

const app = express();
const PORT = 3000;

app.get('/', (req, res)=>{
    res.send('<ul><li>Hello Otis </li></ul>')
})
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})