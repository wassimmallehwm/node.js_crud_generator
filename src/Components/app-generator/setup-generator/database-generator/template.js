const dbTemplate = () => {

  return `const mongoose = require('mongoose');
    
const dbConnect = () => {
  mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
  });
  const connection = mongoose.connection;
  connection.once('open', async () => {
      console.log('Connected to DataBase');
  })
}

module.exports = dbConnect;`
}

export default dbTemplate;