import cnf from "dotenv";
cnf.config();

const config = {
apiPort: process.env.API_PORT || 3001,
apiKey: process.env.API_KEY || "1234",
MongoKeys:{
  mongoApi: process.env.MONGO_API || "mongodb://localhost:27017",   
},
appName: process.env.APP_NAME || "api",
};

export default config;