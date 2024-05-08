import { Schema, model } from "mongoose";

let schema = new Schema({
        userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
        eventId: { type: Schema.Types.ObjectId, ref: "Event", required: true },
        stars: { type: Number, required: true },
});

let qualification = model("Qualification", schema);

export default qualification;