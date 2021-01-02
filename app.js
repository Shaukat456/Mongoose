const mongoose = require('mongoose')

//Connection Creating And New DB
mongoose.connect('mongodb://localhost:27017/shouka', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('connected')).catch((error) => console.log(error))

const PlaylistSce = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

// creating collections
const DefiningModel = new mongoose.model("DefiningModel", PlaylistSce)

const CreateDoc = async () => {
    try {

        const PracticeOfMongoose = new DefiningModel({
            name: 'SHOUKAT1',
            age: 53,

        })

        const PracticeOfMongoose2 = new DefiningModel({
            name: 'SHOUKAT2',
            age: 52,

        })
        const PracticeOfMongoose3 = new DefiningModel({
            name: 'SHOUKAT3',
            age: 51,

        })



const result = await DefiningModel.insertMany([PracticeOfMongoose,PracticeOfMongoose2,PracticeOfMongoose3])
console.log(result)
 } catch (err) {
        console.log('Error ')
    }
}

// CreateDoc()

const getDoc= async ()=>{
    try{
        const result1=await DefiningModel.find()
        .select({name:1})
        // .sort('name:1')
        // .countDocuments()
        // .limit(2)
        console.log(result1)}catch(error){
                console.log(error)
        }
}

getDoc()
