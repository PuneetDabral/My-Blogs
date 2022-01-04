import mongoose from 'mongoose';


const URL = `mongodb+srv://user:7404429636@blogweb.k5z4b.mongodb.net/BLOGAPP?retryWrites=true&w=majority`
const connection = async () => {
    mongoose.connect(URL,
        err => {
            if(err) throw err;
            console.log('connected to MongoDB')
        });
}

export default connection;