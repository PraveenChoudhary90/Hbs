const students = require("../Model/ProModel");

const Homepage = async(req,res)=>{
    res.render("home");
}

const Aboutpage = async(req,res)=>{
    res.render("about");
}

const Insertpage = async(req,res)=>{
    res.render("insert");
}



const RegistractionUser = async(req,res)=>{
    const {rollno,name,email,city,fees}=req.body;
    // Create a new user
    const newUser = await students.create({
        rollno:rollno,
        name: name,
        email:email,
        city:city,
        fees:fees
    });
    console.log('User created:', newUser.toJSON());
    res.render("insert");
}


const Displaypage = async(req,res)=>{
    const data = await students.findAll();
    // const mydata = data.map(s => s.toJSON());
    // console.log('Student Records:', data.map(s => s.toJSON()));
    console.log(data);
    res.render("display", {mydata:data});
}




module.exports={
    Homepage,
    Insertpage,
    Displaypage,
    Aboutpage,
    RegistractionUser
}