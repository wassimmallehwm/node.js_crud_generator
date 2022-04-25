const dbTemplate = () => {
    return `const { MongoClient } = require('mongodb');
    
    const dbConnect = async (app) => {
        try{
            const client = new MongoClient(process.env.DATABASE_URL);
            await client.connect();
            console.log('Connected successfully to Database');
            const db = client.db(process.env.APP_NAME);
            app.locals.db = db;
        } catch(error) {
            console.error('Failed to connect to the database.', error);
        }
    }
    
    module.exports = dbConnect;`
}

export { dbTemplate };