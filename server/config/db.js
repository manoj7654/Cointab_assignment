// importing sequelize for making connection my sql database
const Sequelize=require("sequelize")


// creating connection
const connection=new Sequelize("cointab","root","Manoj@7654",{
    host:"localhost",
    dialect:"mysql"
})
connection.authenticate()
.then(()=>console.log("connected to MySql database successfull"))
.catch((error)=>console.log(error.message))
// exporting connection
module.exports={connection}