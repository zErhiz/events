import { Schema, model } from "mongoose";

let schema = new Schema({
        userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
        eventId: { type: Schema.Types.ObjectId, ref: "Event", required: true },
        message: { type: String, required: true },
});

let comments = model("Comment", schema);

export default comments;