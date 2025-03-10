import dotenv from "dotenv";
import {Game} from "../model/Game.model.js"; 

dotenv.config(); 

const lastFetchedIds = []; // Stores last 50 fetched IDs

async function getRandomGame() {
    //JUST MAKE SURE THAT YOU ARE CONNECTING TO DATABASE WHEN THE SERVER IS CREATED AND A REQUEST TO DB IS MADE
    try {
        const totalDocs = await Game.countDocuments();
        if (totalDocs === 0) {
            console.log("No documents in the collection.");
            return null;
        }

        const randomDoc = await Game.aggregate([
            { $match: { _id: { $nin: lastFetchedIds } } }, 
            { $sample: { size: 1 } } 
        ]);

        if (randomDoc.length === 0) {
            console.log("All documents have been fetched recently. Resetting list.");
            lastFetchedIds.length = 0; 
            return getRandomDocument(); 
        }

        const fetchedDoc = randomDoc[0];

        lastFetchedIds.push(fetchedDoc._id);

        if (lastFetchedIds.length > 50) {
            lastFetchedIds.shift(); 
        }

        return [fetchedDoc, lastFetchedIds];
    } catch (error) {
        console.error("Error fetching random document:", error);
        return null;
    }
}

export default getRandomGame;
