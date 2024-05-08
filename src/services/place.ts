import Place from '../models/place';

async function upsertPlace(placeData: any) {
  try {
    const { _id , ...rest } = placeData;

    let place;

    if (_id) {
      const updatedPlace = await Place.findByIdAndUpdate(_id, rest, { new: true });
      if (!updatedPlace) {
        throw new Error("The place doesn't exist");
      }
      return updatedPlace;
    } else {
      place = new Place(rest);
      await place.save();
    }

    return place;
  } catch (error) {
    throw new Error('Error upserting place: ' + error);
  }
}




async function getAll() {
    try {
      const places = await Place.find();
      return places;
    } catch (error) {
      throw new Error('Error retrieving places: ' + error);
    }
  }

  async function getById(id: string) {
    try {
      const place = await Place.findById(id);
      return place;
    }
    catch (error) {
      throw new Error('Error retrieving place: ' + error);
    }
  }

export default {
  upsertPlace,
  getAll,
  getById
};