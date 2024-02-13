//  importing fetch for fetching data from api
const fetch=require("node-fetch")

// importing postModal for store data and retrieve data
const postModal = require("../modals/postModal")



const addPost = async(req,res)=>{
    let isFetchingData = false;
    const userId = req.query.userId;
      try {
  
        // if fetching data in progress then it will throw an error
        if(isFetchingData){
          return res.status(200).json({ message: 'Data fetch operation is already in progress.' });
        }
            // Set the flag to true to indicate data fetch  operation has started
            isFetchingData = true;
  
          const result=await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
          const data=await result.json()
        
        //  console.log(data)

              let final={
                  id:data[0].id,
                  name: data[0].name,
                  title: data[0].title,
                  body: data[0].body,
                  company: data[0].company.name
              }
              await postModal.create(final)
      res.status(200).json({ message: 'Post data stored in Database successfully.' });
      } catch (error) {
        console.error('Getting Error while fetching  Post:', error);
        res.status(500).json({ "message": 'Getting Error while fetching  Post.' });
      }
  }
  


module.exports={addPost}