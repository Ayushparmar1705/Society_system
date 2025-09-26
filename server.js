const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const societyroutes = require("./routes/MainAdmin/Addsocietyroutes");
const blockroutes = require("./routes/MainAdmin/Addblockroutes");
app.use(express.json());
app.use("/mainadmin",societyroutes);
app.use("/mainadmin",blockroutes);
app.listen(5000 , ()=>{
    console.log("server is running on port 5000");
})