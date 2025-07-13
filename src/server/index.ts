import express from "express";
import { router } from "./routes";

const port = Number(process.env.PORT) || 3000;
const basename = "/hw/store";

const app = express();

app.use(express.json());
app.use(basename, express.static("dist", { index: false }));
app.use(basename, router);

const host = process.env.HOST || "0.0.0.0";

app.listen(port, host, () => {
  console.log(`Example app listening at http://${host}:${port}${basename}`);
});
