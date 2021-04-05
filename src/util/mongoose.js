module.exports = {
    mutipleMongooseToObject: function (mongooseArr) {
        return mongooseArr.map((mongooseArr) => mongooseArr.toObject());
    },
    MongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
