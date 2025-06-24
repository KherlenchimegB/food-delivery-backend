import express, { response } from "express";
import foodsRouter from "./routes/food.routes.js";
import categoryRouter from "./routes/category.routes.js";
import orderRouter from "./routes/order.routes.js";
import mongoose from "mongoose";
import { request } from "http";
import userRouter from "./routes/user.routes.js";

mongoose.connect(
  "mongodb+srv://kherlenchimeg:db1234dv@cluster0.lukncma.mongodb.net/food-delivery"
);

const server = express();
server.use(express.json());

const port = 3000;

server.use("/food", foodsRouter);
server.use("/auth", userRouter);
server.use("/food-category", categoryRouter);
server.use("/food-order", orderRouter);

// server.get("/", (_request, response) => {
//   response.send("Hello Dashka");
// });

server.listen(port, () => {
  console.log("Server aslaa");
});
