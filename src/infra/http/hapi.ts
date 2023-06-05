import Hapi from "@hapi/hapi"
import HapiAdapter from "../../adapter/HapiAdapter"
import UserController from "./controller/UserController"

const server = Hapi.server({
	port: 3000,
	host: "localhost"
})

server.route({
	method: "GET",
	path: "/user/{id}",
	handler: HapiAdapter.create(UserController.getUserById)
})

server.start()