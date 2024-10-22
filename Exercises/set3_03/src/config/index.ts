import { config } from "dotenv";

config({
    path: ".env",
});

export const { PORT, API } = process.env;