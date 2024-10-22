import express, { Request, Response, Application } from "express";
// import axios from "axios";
import { PORT, API } from "./config";
import listRouter from "./routes/routes";
// import { GetList } from "./controllers/controllers";

// interface ListItem {
//     title: string;
//     nominal: number;
//     type: string;
//     category: string;
//     date: Date;
//     id: string;
// }

const port = Number(PORT) || 8000;
const app: Application = express();

app.use(express.json());

app.use("/api", listRouter);

app.listen(port, () => {
    console.log(`Why are you using port ${port}?`);
});