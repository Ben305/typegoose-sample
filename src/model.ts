import {getModelForClass, prop} from "@hasezoey/typegoose";

export class User {
    @prop()
    name?: string;
}

export const UserModel = getModelForClass(User);