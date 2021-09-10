import express from "express";

import * as db from "./db.mjs";

const eventRoutes = express.Router();

eventRoutes.get("/", async (request, response) =>
  response.json(await db.getEvents()),
);

eventRoutes.delete("/:eventId", async (request, response) => {
  await db.deleteEvent(request.params.eventId);
  response.status(204).end();
});

eventRoutes.use(express.json());
eventRoutes.post("/", async (request, response) => {
  const event = await db.addEvent(request.body);
  response.status(201).json(event);
});

export default eventRoutes;
