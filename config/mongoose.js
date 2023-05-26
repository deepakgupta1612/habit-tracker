const mongoose = require('mongoose');
// mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_URL);
// mongoose.connect('mongodb://127.0.0.1/todo_list_db');
const db = mongoose.connection;
// error
db.on('error',console.error.bind(console,'erroe connecting to db'));
// up and running then message
db.once('open',function(){
    console.log('Success fully connected to the database')
})