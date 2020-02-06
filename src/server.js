import "dotenv/config";
import express from "express";
import cors from "cors";
import BullBoard from "bull-board";
import Queue from "./app/lib/Queue";

import UserController from "./app/controllers/UserController";

const app = express();
BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

app.use(cors());
app.use(express.json());

app.use("/admin/queues", BullBoard.UI);

app.post("/user", UserController.store);
app.get("/user", UserController.show);

app.listen(3333);
