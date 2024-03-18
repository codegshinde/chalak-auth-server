"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Admin", {
    enumerable: true,
    get: function() {
        return Admin;
    }
});
const _mongoose = require("mongoose");
const addressSchema = new _mongoose.Schema({
    district: {
        type: String,
        required: true
    },
    subDistrict: {
        type: String,
        required: true
    },
    village: {
        type: String,
        required: false
    },
    postalCode: {
        type: String,
        required: true
    }
});
// Define the Admin schema using the Admin interface
const adminSchema = new _mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    access: {
        type: [
            String
        ],
        required: false
    },
    adminRole: {
        type: String,
        required: true
    },
    adminPosition: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    adminId: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: [
        addressSchema
    ],
    avatar: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});
const Admin = (0, _mongoose.model)("admins", adminSchema);
