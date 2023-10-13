const mongoose=require("mongoose")
mongoose.set("strictQuery", false);

const mongoDB = "mongodb://127.0.0.1/toVisit";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
  console.log("Mongoose connected")
}

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const LogInCollection=new mongoose.model('LogInCollection',logInSchema)

module.exports=LogInCollection