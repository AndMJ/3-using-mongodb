const mongoose = require("mongoose")

//connection
const connection = mongoose.connect("mongodb://localhost:27017/playground")
connection.then((result) => {
    console.log("successfully connected to db...")
}).catch(e => {
    console.log("error connecting to db..", e)
})

//course schema and model mapping
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: {type: Number, default: 10},
    tags: [String],
    dateCreated: {type: Date, default: Date.now()},
    isPublished: Boolean
})
const Courses = mongoose.model("courses", courseSchema)

//create a course
/*const createCourse = async (data) => {
    const newCourse = new Courses({...data})
    return newCourse.save();
}

const result = createCourse({
    name: "React.js course",
    author: "Fabio",
    price: 34,
    tags: ["react", "frontend"],
    isPublished: true
})

result.then((r) => {
    console.log("course saved!", r)
}).catch(e => {
    console.log("error!", e)
})*/


const getCoursesList = async () => {
    return Courses.find({isPublished: true, tags: {$in: ["backend", "frontend"] }} ).sort({price: -1}).select({name: 1, author: 1})
}

getCoursesList().then(result => {
    console.log(result)
}).catch(e => {
    console.log("error getting: ", e)
})