let express = require('express');
let app = express(); 
let path = require ('path'); 
app.use(express.static('public'))
app.use(express.static('views'))
let port = 3009;
app.get ('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'/index.html'))  })

app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}\n http://localhost:${port}`))

 