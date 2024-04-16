const express = require("express")

const app = express();

//Default Endpoint
app.get("/", (req, rest) => { rest.send("hello world") })

app.listen(3000, () => {
    console.log("api inicializada")
});