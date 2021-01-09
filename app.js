const mongoose = require('mongoose')

//Connection Creating And New DB
mongoose.connect('mongodb://localhost:27017/datebase1', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('connected')).catch((error) => console.log(error))

const PlaylistSce = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique:true
    },
    age: {
        type: Number,
        required: true,
        unique:false
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

// Creating Document()
const getDoc= async ()=>{
    try{
        const result=await DefiningModel.find({name:'SHOUKAT1'})
        .limit(2)
        .select({name:1})
        console.log(result)
    }    
        catch(err){
                console.log('error')
        }
}

const UpdateDoc= async (_id)=>{
      
    try{
     const result=  await DefiningModel.findByIdAndUpdate({_id},{
          $set :{ name:'HELOSS'}
      },
      {
          new:true,
        useFindAndModify:false
      }
      );
      console.log(result)
     
    }
    catch(err){
        console.log(err)
    }    

}


// Delete Doc

const DeleteDoc= async(_id)=>{
    try {
        const result=await DefiningModel.findByIdAndDelete({_id})
        console.log(result)
        
    } catch (err) {
        console.log(err)
    }

}


// CreateDoc()
// UpdateDoc('5ff9350389978019643ad707');
// getDoc('5ff1a557e68faa2c90ad02a4')

//Dont give GAP
DeleteDoc('5ff93559d193bc14080b9dcc')
