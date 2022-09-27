const app = require("./index")
const connect = require("./configs/db")


const PORT =  process.env.PORT || 3456

app.listen(PORT, async () =>{
    try{
     await connect();
     console.log("Listening to the PORT 3456")
    }catch(err){
        console.log(err.message)
    }
});
