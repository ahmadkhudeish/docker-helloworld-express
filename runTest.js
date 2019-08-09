var newman = require("newman");

// call newman.run to pass `options` object and wait for callback
newman.run(
    {
        collection: require("./test/EIT_Test.postman_collection.json"),
        reporters: "cli"
    },
    function(err) {
        if (err) {
            throw err;
        }
        console.log("collection run complete!");
    }
);
