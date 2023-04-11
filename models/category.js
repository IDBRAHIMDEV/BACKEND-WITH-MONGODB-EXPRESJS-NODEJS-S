const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    icon: String,
    color: String
})

exports.Category = model("Category", categorySchema)