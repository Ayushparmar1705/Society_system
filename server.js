const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const societyroutes = require("./routes/MainAdmin/Addsocietyroutes");
const blockroutes = require("./routes/MainAdmin/Addblockroutes");
const flatsroutes = require("./routes/MainAdmin/Addflatsroutes");
const usersignuproutes = require("./routes/User/Signuproutes");
const userloginroutes = require("./routes/User/Loginroutes")
const memberManagement = require("./routes/RolebasedAuth/MemberRoutes")
app.use(express.json());
app.use("/mainadmin",societyroutes);
app.use("/mainadmin",blockroutes);
app.use("/mainadmin",flatsroutes);
app.use("/users",usersignuproutes);
app.use("/users",userloginroutes);
app.use("/auth",memberManagement);
app.listen(5000 , ()=>{
    console.log("server is running on port 5000");
})