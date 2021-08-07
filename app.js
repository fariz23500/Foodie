const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const app= express();
const Port=process.env.PORT ||3001;
const Cors=require("cors");
app.use(Cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect("mongodb+srv://admin-fariz:test123@cluster0.wynsl.mongodb.net/foodieDB",{useNewUrlParser:true,useUnifiedTopology: true});
const personSchema=new mongoose.Schema({
review:String,
rating:Number,
name:String
});
const dataSchema=new mongoose.Schema({
    dishImage:String,
    restaurentName:String,
    dishName:String,
    person:[personSchema]
});
const Person=mongoose.model("person",personSchema);
const Data=mongoose.model("data",dataSchema);


let d=[];
Data.find((err,datas)=>{
    if(err)
    {console.log(err);}
    else
    {
        datas.forEach((data)=>{d.push(data)});
            
        
    }
});


app.get("/api",(req,res)=>{
    
    res.json(d);
    
});



app.post("/api",(req,res)=>{

const dishName=req.body.dishName;

 const da=[];
 da.length=0;

    Data.find((err,datas)=>{
        if(err)
        {console.log(err);}
        else
        {
            
            datas.forEach((data)=>{
                if(dishName===data.dishName)
               { da.push(data);
                
            }
            
            
            });
                
            
            res.json(da);
        }
    });
    



});


const path = require('path');
app.use(express.static(path.join(__dirname, './my-app/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './my-app/build/index.html'));
  });

app.listen(Port,()=>{
    console.log("Server running on 3001")
});