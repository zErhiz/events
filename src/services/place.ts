import Place from '../models/place';

async function upsertPlace(placeData: any) {
  try {
    const { name, ...rest } = placeData;

    let place = await Place.findOne({ name });

    if (place) {
      place.set({ ...rest });
    } else {
      place = new Place({ name, ...rest });
    }

    await place.save();

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


export default {
  upsertPlace,
  getAll
};