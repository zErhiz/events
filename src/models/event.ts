import { Schema, model } from "mongoose";

let schema = new Schema({
  place: {
    type: Schema.Types.ObjectId,
    ref: "Place",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  photo: String,
  description: {
    type: String,
    required: true,
  },
  attendees: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  minimumAge: {
    type: Number,
    required: true,
  },
  organizer: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  occupancy: {
    type: Number,
    required: true,
  },
});

let Event = model("Event", schema);

export default Event;