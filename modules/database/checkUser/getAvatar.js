require('dotenv').config()
var mongodb = require('mongodb').MongoClient,
url = process.env.URL_DB;
var getAvatar = (senderId) => {
    return new Promise((resolve, reject) => {
        mongodb.connect(url, (err, db) => {
            if (err) throw err;
            db.db('cspheartsync').collection('users').find({ _id: senderId.toString() }).toArray((err, res) => {
                resolve(res[0].profile_pic);
            })
        })
    })
}
module.exports = { getAvatar: getAvatar };   