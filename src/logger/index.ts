import logger from "pino";
import dayjs from  "dayjs";
import { timeStamp } from "console";
import { prettyFactory } from "pino-pretty";

const log = logger({
    
    base : {
        pid : false,
    },
    timestamp : ()=> `,"timer":"${dayjs().format()}"`,
    transport: {
        target: 'pino-pretty'
    },
});

export default log;