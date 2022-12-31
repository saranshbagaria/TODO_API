import { Document } from "mongoose";

export default interface TodoI  extends Document{
    title : String ;
    description? : String;
    done : Boolean
}