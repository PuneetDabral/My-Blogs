import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title:{
        type:String,
        require:true,
        unique:true
    },
    description:{
        type:String,
        require:true,
        
    },
    picture:{
        type:String,
        require:false,
       
    },
    username:{
        type:String,
        require:true
       
    },
    categories:{
        type:String,
        require:false
       
    },
    createDate:{
        type:Date
        
    }

    
})

//create a collection in database 
const Post = mongoose.model('post',postSchema);

export default Post;