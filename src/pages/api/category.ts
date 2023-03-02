import { NextApiHandler } from "next";
import fs from "fs";
import path from "path";

const handler: NextApiHandler = (req, res) => {
  if (req.method !== "GET") return res.status(404).send("Not found!");
  const { name: category } = req.query as { name: string };
  //   const jsonRes = fs.readFileSync(
  //     path.join(process.cwd(), "src/data/categories.json"),
  //     "utf-8"
  //   );
  //   const categories = JSON.parse(jsonRes);
  //   res.json({ product_category: categories[category] });
};

export default handler;
