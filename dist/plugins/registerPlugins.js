"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, // Export the plugin registration function as a Fastify plugin
"default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _fastifyplugin = /*#__PURE__*/ _interop_require_default(require("fastify-plugin"));
const _databasePlugin = /*#__PURE__*/ _interop_require_default(require("./databasePlugin"));
const _tokenPlugin = /*#__PURE__*/ _interop_require_default(require("./tokenPlugin"));
const _authenticate = /*#__PURE__*/ _interop_require_default(require("../middleware/authenticate"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/**
 * Registers multiple plugins for a Fastify instance.
 * Includes plugins for environment variables, JWT token handling, database connection,
 * and authentication middleware.
 *
 * @param fastify - The FastifyInstance to register the plugins.
 */ async function registerPlugins(fastify) {
    // Register the JWT token handling plugin
    await fastify.register(_tokenPlugin.default);
    // Register the database connection plugin
    await fastify.register(_databasePlugin.default);
    // Register the authentication middleware plugin
    await fastify.register(_authenticate.default);
}
const _default = (0, _fastifyplugin.default)(registerPlugins);
