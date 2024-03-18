"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "loginRouteSchema", {
    enumerable: true,
    get: function() {
        return loginRouteSchema;
    }
});
const _typebox = require("@sinclair/typebox");
const options = _typebox.Type.Object({
    adminId: _typebox.Type.String(),
    password: _typebox.Type.String()
});
const loginRouteSchema = {
    body: options
};
