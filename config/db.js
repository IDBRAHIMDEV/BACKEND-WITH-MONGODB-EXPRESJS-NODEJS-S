const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbname: process.env.DB_NAME
})
        .then(() => {
            console.log("Database connection is Ready...")
        })
        .catch((err) => {
            console.log(err)
        })

module.exports = mongoose;