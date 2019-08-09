class HelloWorldController {
    constructor() {
        this.getHelloWorld = this.getHelloWorld.bind(this);
    }

    getHelloWorld(req, res, next) {
        try {
            const response = {
                Message: "Hello World"
            };
            res.header("Content-Type", "application/json");
            res.status(200);
            return res.json(response);
        } catch (e) {
            console.log("Caught error in HelloWorldController.getHelloWorld:", e.message);
            next(e);
        }
    }
}

module.exports = HelloWorldController;
