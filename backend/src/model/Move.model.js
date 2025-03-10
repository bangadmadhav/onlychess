import mongoose, {Schema} from "mongoose";

const MoveSchema = new Schema({
    movePlayed:{
        type: String,
        required: true,
    },
    evaluation:{
        type: String,
        required: true,
    },
    bestMove:{
        type: String,
        required: true,
    },
    keyMove:{
        type: String,
        enum: ["BLUNDER", "MISTAKE", "MISS", "BEST", "GREAT", "BRILLIANT", "GOOD", "CHECKMATE", "DRAW", "NONE"],
        required: true,
    },
    comments:{
        type: String,
        required: true,
    }
})

export const Move = mongoose.model("Move", MoveSchema);