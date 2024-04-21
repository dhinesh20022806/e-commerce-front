import { Schema, models, model } from "mongoose";

const OrderSchema = new Schema({
    line_items: Object,
    name: String,
    email: String,
    city: String,
    postalCode: String,
    country: String,
    paid: Boolean,
});

export const Order = models?.Order || model("Order", OrderSchema);