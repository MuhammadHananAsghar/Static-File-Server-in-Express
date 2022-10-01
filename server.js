const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static("models"));

app.use('/facemask', function(request, response) {
    response.sendFile(path.join(__dirname+'/models/Facemask/'))
});

app.use('/handshake', function(request, response){
    response.sendFile(path.join(__dirname+"/models/Handshake"))
});
app.listen(port, () => {
    console.log("Server is running on "+port);
});