import dotenv from 'dotenv';
dotenv.config();

export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/rplstockdb"
export const PORT = process.env.PORT || 5000
export const HOST = process.env.HOST