const mongoose = require('mongoose');
const {MONGO_HOST, MONGO_USER, MONGO_PASSWORD, MONGO_DATABASE ,MONGO_PORT} = process.env;

//added uri and removed user, host etc
//const connection = mongoose.connect(`mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`,{
//added uri and removed MONGOHOST etc

const uri = 'mongodb+srv://Angela:January2001@cluster0.d08wzxc.mongodb.net/massenger?retryWrites=true&w=majority'

const connection = mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

connection.then(() => {
    console.log('mongodb connected successfully!');
}).catch(err => {
    console.log('error in mongodb connection ', err.message);
});
