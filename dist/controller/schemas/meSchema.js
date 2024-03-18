"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "meRouteSchema", {
    enumerable: true,
    get: function() {
        return meRouteSchema;
    }
});
const _typebox = require("@sinclair/typebox");
const options = _typebox.Type.Object({
    id: _typebox.Type.String()
});
const meRouteSchema = {
    params: options
};
