import {ReturnModelType} from "@hasezoey/typegoose";

export class Helper {

    public static async mongoFind<T>(model: ReturnModelType<T>): Promise<{ elements: T[], totalCount: number }> {

        // Find
        let request = model.find({});
        const counter = model.find({}).count();

        const requestResult = await request.exec();
        const countResult = await counter.exec();

        return {
            elements: requestResult,
            totalCount: countResult
        };
    }
}