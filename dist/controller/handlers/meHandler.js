"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "meRouteOptions", {
    enumerable: true,
    get: function() {
        return meRouteOptions;
    }
});
const _meSchema = require("../schemas/meSchema");
/**
 * Handles the request to retrieve admin data by ID.
 *
 * @param {FastifyRequest} request - The Fastify request object.
 * @param {FastifyReply} response - The Fastify response object.
 * @returns {Promise<void>} A promise that resolves once the handler is complete.
 */ async function meHandler(request, response) {
    try {
        // Extract parameters from the request
        const data = request.params;
        const user = request.user;
        // Find the admin by ID, lean() for a plain JavaScript object
        const adminData = await request.getDocument({
            _id: user.id
        });
        // Check if the admin data exists
        if (!adminData) {
            throw new Error("Admin not found.");
        }
        // Remove sensitive information from the response
        delete adminData.password;
        // Send the response with admin data
        response.send({
            admin: adminData,
            message: "Admin data fetched successfully."
        });
    } catch (error) {
        // Throw any caught errors
        throw error;
    }
}
const meRouteOptions = {
    schema: _meSchema.meRouteSchema,
    handler: meHandler
};
