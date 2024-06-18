import express from "express";
import jwt from "jsonwebtoken";

const app = express();

app.get('/', (req, res) => {
    res.json({
        mensaje: "funciona"
    });
});

app.post('/login', (req, res) => {
    const user = {
        id: 1,
        name:"Messi",
        email:"Lionel24@gmail.com"
    }

    jwt.sign({user}, 'secretkey', {expiresIn: '30m'}, (err, token) => {
        res.json({
            token
        })
    })


})

app.get('/verify', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (error, authData) => {
        if(error){
            res.sendStatus(403)
        }else {
            res.json(
                {
                    mensaje:"verify fue creado",
                    authData:authData
                }
            )
        }
    })
});

// Authorization: Bearer <token>
function verifyToken(req, res, next){
  const bearerHeader = req.headers['authorization']

  if(typeof bearerHeader !== 'undefined'){
     const bearerToken = bearerHeader.split(" ")[1];
     req.token = bearerToken
     next();
  } else
    res.sendStatus(403)
}

app.listen(3000, () => {
    console.log("App funciona.");
});