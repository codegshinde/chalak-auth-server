import { FastifyInstance } from "fastify";
import fp from "fastify-plugin";
import { registerRouteOptions } from "../controller/handlers/registerHandler";
import { loginRouteOptions } from "../controller/handlers/loginHandler";

async function postRoute(fastify: FastifyInstance) {
  fastify.post("/register", registerRouteOptions);
  fastify.post("/login", loginRouteOptions);
}

export default fp(postRoute);
