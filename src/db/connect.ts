import mongoose from "mongoose";
import config from "config";
import log from "../logger";


function DBconnect(){
    const dbUri = config.get("dbUri") as string;
    mongoose.set('strictQuery', false);
    return mongoose.connect(
        dbUri
        ).then(
        () => {
            log.info("Dat laBase connected");
        }).catch(
        (error) => {
            log.error(`dp error ${error}`);
            process.exit(1);
        }
    );

}


export default DBconnect;