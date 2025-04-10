const express = require("express");    //server
const path    = require("path");       //directory path
const hbs     = require("hbs");
const bodyParser = require('body-parser');

const app     = express();



const location = path.join(__dirname,"./public");
app.use(express.static(location));

app.set("view engine" , "hbs");

app.use(express.urlencoded({ extended:false})); 

app.use(bodyParser.urlencoded({ extended: true }));

const partialsPath =  path.join(__dirname , "./views/partials");
hbs.registerPartials(partialsPath);

//Routing pages

app.use("/", require("./routes/pages"));

app.use("/auth", require("./routes/auth"));


// app.listen(5000, () => 
//     {
//         console.log("Server Started");

// });   

const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => 
    {
        console.log(`Server running on port ${PORT}`);
}); 