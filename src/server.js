import cors from "cors";
import express from "express";
import morgan from "morgan";

const app = express();

const customersloyalty = [
    { name: "Bukola", stamps: 2 },
    { name: "Caspar", stamps: 2 },
    { name: "Dana", stamps: 2 },
    { name: "Olu", stamps: 2 },
    { name: "Paul", stamps: 2 },
];

app.get("/customers", function (_req, res) {
    res.json(customersloyalty);
});

//allow morgan logger to get access to each request before and after our handlers
app.use(morgan("dev"));
//auto-include CORS headers to allow consumption of our content by in-browser js loaded from elsewhere
app.use(cors());
//parse body text of requests having content-type application/json, attaching result to `req.body`
app.use(express.json());

//use the environment variable PORT, or 4000 as a fallback
const PORT = process.env.PORT ?? 4000;

app.listen(PORT, () => {
    console.log(
        `Your express app started listening on ${PORT}, at ${new Date()}`
    );
});
