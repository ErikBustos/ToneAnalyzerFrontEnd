const express = require('express');
const cors = require('cors');
//const fetch = require('node-fetch');

// definimos un puerto por el cual escucharemos peticiones
const PORT = process.env.PORT || 8080
const HOST = process.env.HOST || "0.0.0.0"

const { json, urlencoded } = express;

const app = express();

//Routers
const mainRouter = require('./src/routes/mainRoute')

app.use(json())
app.use(urlencoded({ extended: false }))
const corsOptions = { origin: '*', optionsSuccessStatus: 200 }
app.use(cors(corsOptions))

app.use(express.static(__dirname + '/src'))

app.get('/', (req , res) =>{
    res.sendFile(path.join(__dirname+'/src/index.html'));
})

app.use(mainRouter);

app.listen(PORT,HOST, () => { console.log(`Server listening on port ${PORT} and host ${HOST}`); })