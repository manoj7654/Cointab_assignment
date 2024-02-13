//  importing fetch for fetching data from api
const fetch=require("node-fetch")

// importing usermodel for store data and retrieve data
const UserModel = require("../modals/userModal")


// fetching data and storing in database
const fetchData = async(req,res)=>{
  let isFetchingData = false;
    try {

      // if fetching data in progress then it will throw an error
      if(isFetchingData){
        return res.status(200).json({ message: 'Data fetch operation is already in progress.' });
      }
          // Set the flag to true to indicate data fetch  operation has started
          isFetchingData = true;

        const result=await fetch("https://jsonplaceholder.typicode.com/users")
        const data=await result.json()
      
        // Reset the flag to indicate the operation is complete
        isFetchingData = false;
   
    res.status(200).json(data);
    } catch (error) {
      console.error('Getting Error while fetching  users:', error);
      res.status(500).json({ "message": 'Getting Error while fetching  users.' });
    }
}

const addData = async(req,res)=>{
    let isFetchingData = false;
    const id = req.query.id;
      try {
  
        // if fetching data in progress then it will throw an error
        if(isFetchingData){
          return res.status(200).json({ message: 'Data fetch operation is already in progress.' });
        }
            // Set the flag to true to indicate data fetch  operation has started
            isFetchingData = true;
  
          const result=await fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`)
          const data=await result.json()
        
        //  console.log(data)

              let final={
                  id:data[0].id,
                  name: data[0].name,
                  phone: data[0].phone,
                  website: data[0].website,
                  city: data[0].address.city,
                  company: data[0].company.name, 
                  email: data[0].email,
              }
              await UserModel.create(final)
      res.status(200).json({ message: 'Users data stored in Database successfully.' });
      } catch (error) {
        console.error('Getting Error while fetching  users:', error);
        res.status(500).json({ "message": 'Getting Error while fetching  users.' });
      }
  }
  


module.exports={fetchData,addData}