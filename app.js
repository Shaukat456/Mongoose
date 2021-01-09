const mongoose = require('mongoose')

//Connection Creating And New DB
mongoose.connect('mongodb://localhost:27017/datebase1', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('connected')).catch((error) => console.log(error))

const PlaylistSce = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique:true,
        trim:true,
        minlength:[2,'Minimum 2 letters'],
        maxlength:30,
        validate(value){
            if(value<0){
                throw new Error('This field should be filled')
            }
    },
    email: {
        type:String,
        required: true,
        // unique:false
        maxlength:20,
        minlength:1,
        required:true
    },
    Discuss: {
        type:String
       
        }
        // required: true,
        // unique:false
        // maxlength:20,
        // minlength:1
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
            name: 'Crr',
            email:'s@gmail.com',
        Discuss:''

        })

        const PracticeOfMongoose2 = new DefiningModel({
            name: 'Rrr',
            email:'s@gmail.com',
        Discuss:'bye.'

        })
        const PracticeOfMongoose3 = new DefiningModel({
            name: 'Urr',
            email:'s@gmail.com',
            Discuss:'hey '
        })



const result = await DefiningModel.insertMany([PracticeOfMongoose,PracticeOfMongoose2,PracticeOfMongoose3])
console.log(result)
 } catch (err) {
        console.log(err)
    }
}

// Creating Document()
const getDoc= async ()=>{
    try{
        const result=await DefiningModel.find({email:'s@gmail.com'})
        // .limit(2)
        // .select({name:1})
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




//Dont give GAP BEFORE  ID 

CreateDoc()
// UpdateDoc(' 5ff9463c97499422aceca439');
// DeleteDoc('5ff9350389978019643ad707')
// getDoc(' 5ff9463c97499422aceca439')




