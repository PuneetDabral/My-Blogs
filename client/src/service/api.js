import axios from 'axios';

const URL ='http://localhost:8000';

export const createPost=async(post)=>{
    try{
    return await axios.post(`${URL}/create`, post) //axios help 
    }catch(error){console.log('error while calling create post api',error)}
}

export const getAllposts =async()=>{
    try{
     let response =  await  axios.get(`${URL}/posts`);
      return response.data;    
        }catch(error){console.log('error while calling getAllpost api',error)}

}

export const getPost = async(id)=>{
    try{
        let response =  await  axios.get(`${URL}/post/${id}`);
        return response.data;    

    }catch(error){console.log('error while calling getPost api',error)}
}