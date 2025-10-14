//app.js
const express = require("express");
const app = express();
const path = require("node:path");
const indexRouter = require("./routes/indexRouter")


//Setting Port
const PORT = 8080;

// Configure Express to use EJS as the templating engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);



// Start the Express server and listen on the defined port
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`App listening on" ${PORT}!`)
});
