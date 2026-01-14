import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/clan/:name", async (req, res) => {
  const r = await fetch(`https://ps99.biggamesapi.io/api/clan/${req.params.name}`);
  res.json(await r.json());
});

app.get("/api/clans", async (req, res) => {
  const r = await fetch(
    "https://ps99.biggamesapi.io/api/clans?page=1&pageSize=200&sort=Points&sortOrder=desc"
  );
  res.json(await r.json());
});

app.listen(PORT, () => {
  console.log("OPEN 👉 http://localhost:3000");
});
