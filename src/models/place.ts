import { Schema, model } from "mongoose";
let schema = new Schema({
    name: {
        type: String,
        required: true
      },
      address: {
        type: String,
        required: true
      },
      photo: String,
      events: [{
        type: Schema.Types.ObjectId,
        ref: 'Event'
      }],
      occupancy: {
        type: Number,
        required: true
      }
    });
    let Place = model('Place', schema);

    export default Place