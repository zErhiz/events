import Event from "../models/event";
import User from "../models/user";
import { Types } from "mongoose";

async function Upsert(eventData: any) {
  try {
    const { _id, ...restEventData } = eventData;

    if (_id) {
      const updatedEvent = await Event.findByIdAndUpdate(_id, restEventData, {
        new: true,
      });
      if (!updatedEvent) {
        throw new Error("the event doesnt exist");
      }
      return updatedEvent;
    } else {
      const event = new Event(restEventData);
      await event.save();
      return event;
    }
  } catch (error) {
    throw new Error("Error upserting event: " + error);
  }
}

async function getAll() {
  try {
    const events = await Event.find();
    return events;
  } catch (error) {
    throw new Error("Error retrieving events: " + error);
  }
}

async function registerToEvent(userId: string, eventId: string) {
  try {
    const event = await Event.findById(eventId);
    const user = await User.findById(userId);

    if (!event || !user) {
      throw new Error("Could not find the corresponding event or user");
    }

    if (event.attendees.length >= event.occupancy) {
      throw new Error("the event is full");
    }

    if (user.get("age") < event.minimumAge) {
      throw new Error(
        "You do not have the minimum age requirement for this event"
      );
    }

    event.attendees.push(new Types.ObjectId(userId));
    await event.save();

    return event;
  } catch (error) {
    throw new Error("error while registering to the event: " + error);
  }
}

export default {
  Upsert,
  getAll,
  registerToEvent
};
