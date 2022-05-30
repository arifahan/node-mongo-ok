const express = require('express');

const app = express();


app.get('/', (req, res) =>{
    res.send("Thank You So Much 4000")
} )

app.listen(3200, () => console.log('Listening to port 4000'))