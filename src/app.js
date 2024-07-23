import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

export default app;
