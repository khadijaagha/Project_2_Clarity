//must require and then connect to mongoDB database
const mongoose = require('mongoose');

//connect
async function connectDB () {
mongoose.connect(process.env.DATABASE_URL);
  console.log('database connected🤩')
}

connectDB();




