//TODO: mess around with different config files, with various db connections types,
// like playground and production connections

const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/playground")
.then(result => {
    console.log("connected...")
})
.catch(error => {
    console.log("connection failed..",error)
})

//mongoose course schema
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    dateCreated: {type: Date, default: Date.now()},
    isPublished: Boolean
})

//mongoDB model
//Mongodb is noSQL, so we do not need relations, like in a relational DB,
// where we need a third table to complete the relation between 2 tables, in multiple to multiple relationships.
//
//Mapping the mongoDB table to the schema
//"Course" class has all the DB methods
const Course = mongoose.model("Course", courseSchema)

//create a course
/*const createCourse = async (data) => {
    const newCourse = new Course({...data})
    return await newCourse.save()
}

const result = createCourse({
    name: "React.js course",
    author: "André",
    tags: ["react", "frontend"],
    isPublished: true
})

result.then((r) => {
    console.log("course saved!", r)
}).catch(e => {
    console.log("error!", e)
})*/

/*
const getCoursesList = async () => {
    return Course.find()
}

getCoursesList().then((result) => {
    console.log("Course list:", result)
}).catch(error => {
    console.log("get error!",error)
})*/


//query then update
/*const updateCourseByID = async (id) => {
    const course = await Course.findById(id)
    if (!course){
        return
    }

    //course.name = "new name"
    course.author = "Shiven"

    return await course.save()
}

updateCourseByID("67488a426cc58dc3ceb5671c").then((result) => {
    console.log("UPDATED", result)
}).catch(e => {
    console.log("ERROR UPDATING", e.reason)
})*/


//update on database directly, without query
//works like PATCH
/*const updateCourseDirectly = async (id) => {
    return Course.findByIdAndUpdate(id, {
        $set: {
            author: "Zé"
        }
    })
}

updateCourseDirectly("67488a426cc58dc3ceb5671c").then(result => {
    console.log("UPDATED", result)
}).catch(e => {
    console.log("ERROR DIRECTLY UPDATING", e.reason)
})*/

const deleteCourseDirectly = async (id) => {
    return Course.findByIdAndDelete(id)
}

deleteCourseDirectly("67488a426cc58dc3ceb5671c").then(result => {
    console.log("DELETED", result)
}).catch(e => {
    console.log("ERROR DIRECTLY DELETING", e.reason)
})

