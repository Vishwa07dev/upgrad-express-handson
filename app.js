const express = require('express');

const app = express();

const PORT = 7000;

app.use(express.json());

require("./routes/idea.routes")(app);

app.listen(PORT, ()=>{
    console.log(`Application started on the port no ${PORT}`)
})