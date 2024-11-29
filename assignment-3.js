const mongoose = require("mongoose")
const {overwriteMiddlewareResult} = require("mongoose");

//connection
const connection = mongoose.connect("mongodb://localhost:27017/playground")

connection.then((result) => {
    console.log("successfully connected to db...")
}).catch(e => {
    console.log("error connecting to db..", e)
})

//db schema and model mapping
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    dateCreated: {type: Date, default: Date.now()},
    isPublished: Boolean
})
const Courses = mongoose.model("courses", courseSchema)

const getCoursesList = async () => {
    return Courses.find({isPublished: true}).sort({name: 1}).select({name: 1, author: 1})
}

getCoursesList().then(result => {
    console.log(result)
}).catch(e => {
    console.log("get error: ", e.reason)
})