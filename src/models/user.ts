import * as Interfaces from '../interfaces/index';
import { Schema, model } from "mongoose";


let schema = new Schema<typeof Interfaces.IUser>({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    photo: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: { type: Number, required: true },
    genre: String,
    events: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
    role: { type: String, enum: ['admin', 'user', 'organizer'], default: 'user' }
});

let User = model('User', schema);

    export default User