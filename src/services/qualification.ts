import Qualification from "../models/qualification";


async function getByUserIdAndEventId(eventId: string, userId: string) {
    try {
        const qualification = await Qualification.findOne({ eventId, userId });
        return qualification;
    } catch (error) {
        console.error('Error searching qualification:', error);
        throw error; 
    }
}


async function upsertQualification(qualificationData: any) {
    try {
        const { _id, ...restQualificationData } = qualificationData;

        if (_id) {
            const updatedQualification = await Qualification.findByIdAndUpdate(_id, restQualificationData, { new: true });
            return updatedQualification;
        } else {
            const newQualification = await Qualification.create(restQualificationData);
            return newQualification;
        }
    } catch (error) {
        console.error('Error upserting qualification:', error);
        throw error; 
    }
}

export default {
    getByUserIdAndEventId,
    upsertQualification
 }