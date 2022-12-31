import express from "express";
import config from "config"
import log from "./logger"
import connect from "./db/connect"
import todo_router from './routes/todo.routes';

const PORT = config.get("port") as number;

const HOST = config.get("host") as string;

const app = express();




app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.use("/api" ,todo_router);

app.listen(PORT, HOST, () => {
    log.info(`server listing at http://${HOST}:${PORT}`);
    connect();
})
