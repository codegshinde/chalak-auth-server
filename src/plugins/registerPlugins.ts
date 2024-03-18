import { FastifyInstance } from "fastify";
import fp from "fastify-plugin";
import databasePlugin from "./databasePlugin";
import tokenPlugin from "./tokenPlugin";
import authenticate from "../middleware/authenticate";

/**
 * Registers multiple plugins for a Fastify instance.
 * Includes plugins for environment variables, JWT token handling, database connection,
 * and authentication middleware.
 *
 * @param fastify - The FastifyInstance to register the plugins.
 */
async function registerPlugins(fastify: FastifyInstance): Promise<void> {
  // Register the JWT token handling plugin
  await fastify.register(tokenPlugin);

  // Register the database connection plugin
  await fastify.register(databasePlugin);

  // Register the authentication middleware plugin
  await fastify.register(authenticate);
}

// Export the plugin registration function as a Fastify plugin
export default fp(registerPlugins);
