import Express from "express";
import ExpressAdapter from "../../adapter/ExpressAdapter";
import UserController from "./controller/UserController";

const app = Express();

app.get("/user/:id", ExpressAdapter.create(UserController.getUserById));

app.listen(3000);