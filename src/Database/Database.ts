import mongodb from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const MongoClient = mongodb.MongoClient;

let _db: mongodb.Db;
const connectionString = process.env.DB_CONNECTION_STRING || "";

export const mongoConnect = (callback: Function) => {
    MongoClient.connect(connectionString, { useUnifiedTopology: true, useNewUrlParser: true })
        .then(client => {
            console.log("Connected");
            _db = client.db();
            callback();
        })
        .catch(err => {
            console.log(err);
            throw err;
        })
};

export const getDb = () => {
    if (_db) return _db;
    throw "No database found";
}