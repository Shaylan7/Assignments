import express from "express";

import * as db from "./db.mjs";

const userRoutes = express.Router();

userRoutes.get("/", async (request, response) =>
  response.json(await db.getUsers()),
);

userRoutes.delete("/:userId", async (request, response) => {
  await db.deleteUser(request.params.userId);
  response.status(204).end();
});

userRoutes.use(express.json());
userRoutes.post("/", async (request, response) => {
  const user = await db.addUser(request.body);
  response.status(201).json(user);
});

export default userRoutes;
