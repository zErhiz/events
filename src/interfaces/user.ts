import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
    name: string;
    lastname: string;
    photo?: string;
    email: string;
    password: string;
    age: number;
    genre?: string;
    events: Schema.Types.ObjectId[];
    role: 'admin' | 'user' | 'organizer';
  }