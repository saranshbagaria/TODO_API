import express from "express";
import config from "config"
import log from "./logger"
import connect from "./db/connect"
import todo_router from './routes/todo.routes';
//swagger import
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { getServers } from "dns";


const swaggerOptions = {
    definition : {
        openapi: "3.0.0",
        info : {
            title : 'TODO api',
            version : "1.0.0",
            description : 'This is REST api  Todo api build with ExpressJs and nodejs most interesting part is i used typescript for this project.',
            contact : {
                name : "Saransh Bagaria",
                url : 'https://github.com/saranshbagaria'
            },
            
        },
        servers : [
            {
                url : "http://localhost:3500",
            },
        ],
    }, 
    apis : ["./src/routes/*.ts"]
};

const swaggerDocs  = swaggerJsDoc(swaggerOptions);



const PORT = config.get("port") as number;

const HOST = config.get("host") as string;

const app = express();


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.use("/api" ,todo_router);

app.listen(PORT, HOST, () => {
    log.info(`server listing at http://${HOST}:${PORT}`);
    connect();
})
