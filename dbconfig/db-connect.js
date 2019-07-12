let MongoClinet=require('mongodb').MongoClient;
let state={
    db: null,
};
module.exports.connect=function (done) {
    if (state.db) return done();
    const url='mongodb://localhost:27017';
    const dbName='shopping';
    const client=new MongoClinet(url,{userNewUrlParser:true})
    client.connect(function (err) {
        if (err) return done(err)
        console.log("connected successfully");
        const dbs=client.db(dbName)
        state.db=dbs;
        done();

    });

};
module.exports.get =function () {
    return state.db;
};