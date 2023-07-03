const mongoose = require('mongoose');


const connectDB = (url) => {
    try {
        mongoose.connect(url, {
            useNewUrlParser : true,
            useUnifiedTopology: true,
        } 
        ).then(()=> { console.log( 'Successfully connect to database ' )}
        ).catch( (err)=>{console.log(err)});
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;