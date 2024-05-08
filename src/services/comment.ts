import Event from "../models/event";
import Comments from "../models/comments";

async function getByEventId(eventId: string) {
    try {
        const comments = await Comments.find({ eventId });
        return comments;
    } catch (error) {
        console.error('error searching comments', error);
        throw error; 
    }
}


async function upsertComment(commentData: any) {
    try {
        const { _id, ...restCommentData } = commentData;

        if (_id) {
            const updatedComment = await Comments.findByIdAndUpdate(_id, restCommentData, { new: true });
            return updatedComment;
        } else {
            const newComment = await Comments.create(restCommentData);
            return newComment;
        }
    } catch (error) {
        console.error('Error upserting comment:', error);
        throw error; 
    }
}

async function deleteComment(commentId: string) {
    try {
        const comment = await Comments.findByIdAndDelete(commentId);
        return comment;
    }
    catch (error) {
        console.error('Error deleting comment:', error);
        throw error;
    }
}


export default {
    getByEventId,
    upsertComment,
    deleteComment
}