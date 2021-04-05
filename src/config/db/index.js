const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/blog_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log('connect thanh cong');
    } catch (error) {
        console.log('connect that bai');
    }
}

module.exports = { connect };
