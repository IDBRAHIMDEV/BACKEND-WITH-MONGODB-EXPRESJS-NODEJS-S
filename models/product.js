const { Schema, model } = require("mongoose");

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: String,
    content: String,
    image: String,
    images: [String],
    brand: String,
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
    },
    countStock: {
        type: Number,
        default: 0
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    category: {
        type: Schema.Types.ObjectId, ref: "Category",
        required: true
    }
})

exports.Product = model("Product", productSchema);