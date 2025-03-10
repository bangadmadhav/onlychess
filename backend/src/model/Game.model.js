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

const GameSchema = new Schema({
    white:{
        type: String,
        required: true,
    },
    black:{
        type: String,
        required: true,
    },
    result:{
        type: String,
        enum: ["1-0", "0-1", "1/2-1/2", "*"],
        required: true,
    },
    event:{
        type: String,
        enum: ["CasualGame", "GrandmasterGame", "FamousGame"],
        default: "CasualGame",
        required: true,
    },
    gameTitle:{
        type: String,
        required: true
    },
    gameDetails:{
        type: String,
        required: true
    },
    Moves:[{
        type: [MoveSchema],
        required: true
    }]
}, { collection: "gdatas" })

export const Game = mongoose.model("Game", GameSchema);