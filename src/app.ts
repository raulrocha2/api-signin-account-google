import express from "express";
import cookieParser from "cookie-parser";
import { router } from "./routes";


const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(router)
// Middleware 
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});


app.listen(8000, () => console.log(`App Running on PORT 8000`));
