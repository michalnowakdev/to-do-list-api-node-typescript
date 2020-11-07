import mongodb from 'mongodb';

const MongoClient = mongodb.MongoClient;

let _db: mongodb.Db;
const uri = "mongodb://127.0.0.1:27017/todoapp";

export const mongoConnect = (callback: Function) => {
    MongoClient.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
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