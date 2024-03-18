"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "loginRouteOptions", {
    enumerable: true,
    get: function() {
        return loginRouteOptions;
    }
});
const _loginSchema = require("../schema/loginSchema");
/**
 * Handles the login request.
 *
 * @param {FastifyRequest} request - The Fastify request object.
 * @param {FastifyReply} response - The Fastify response object.
 * @returns {Promise<void>} A promise that resolves once the handler is complete.
 */ async function loginHandler(request, response) {
    const data = request.body;
    try {
        // Find the admin by adminId, lean() for a plain JavaScript object
        const admin = await request.getDocument({
            adminId: data.adminId
        });
        if (!admin) {
            throw new Error("Invalid adminId. User not found.");
        }
        // Compare the provided password with the stored hashed password
        const isPasswordValid = await request.comparePassword(data.password, admin.password);
        if (isPasswordValid) {
            // Sign a JWT token with user information (excluding password)
            const token = request.signJWT({
                id: admin._id,
                adminId: admin.adminId
            });
            // Omit the password from the response
            delete admin.password;
            // Send the admin details and token in the response
            response.send({
                admin: admin,
                token: token
            });
        } else {
            throw new Error("Authentication failed. Invalid password.");
        }
    } catch (error) {
        // Throw any caught errors
        throw error;
    }
}
const loginRouteOptions = {
    schema: _loginSchema.loginRouteSchema,
    handler: loginHandler
};
