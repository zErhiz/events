import cnf from "dotenv";
cnf.config();

const config = {
apiPort: process.env.API_PORT || 3001,
secret: process.env.SECRET || "secret",
apiKey: process.env.API_KEY || "1234",
Database:{
  MongoDb: process.env.MONGODB || "mongodb://localhost:27017",   
},
appName: process.env.APP_NAME || "api",
};

export default config;