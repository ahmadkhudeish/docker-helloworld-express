const express = require("express");
const config = require("./config/config");
const app = express();
let apiRoutes = require("./routes");

class Server {
    constructor() {
        this.config = config;
        this.apiRoutes = apiRoutes;
    }

    start() {
        app.use("/", this.apiRoutes);
        let listener = app.listen(this.config.SERVER_PORT, function() {
            console.log("Listening on port " + listener.address().port); //Listening
        });
    }
}

module.exports = Server;
