const express =  require('express');
const login = require('./assets/user.json');
const products = require('./assets/furniture.json');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
    res.send({message: "oi"});
});
app.get('/user', (req,res)=>{
    res.send(login);
});

app.get('/products', (req,res)=>{
    res.send(products);
});

app.get('/product/:id', (req,res)=>{
    const {id} = req.params;

    const index = products.findIndex(p => p.id == id);

    if(index !== -1){
        res.send(products[index]);
    }else{
        res.sendStatus(404);
    }
});

app.listen(8080, ()=>{
    console.log('api on');
});