import mongoose from 'mongoose'
import config from './config'
mongoose.connect(config.Database.MongoDb)
    .then(() => console.log('database connected'))
    .catch(err => console.log(err, config.Database.MongoDb))