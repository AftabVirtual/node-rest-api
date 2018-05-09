import * as express from "express";
const app = express();


app.get("/", (req, res, next) => {
    res.send("TourBooking API");
});

app.get("/tours", (req, res, next) => {
    res.send("Get a list of tours");
});

app.post("/tours", (req, res, next) => {
    res.send("Post a new tour");
});

app.listen(process.env.PORT || 8091, () => console.log("Server Started..."));