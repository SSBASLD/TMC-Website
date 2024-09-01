import { MongoClient, ServerApiVersion } from "mongodb";
const uri = "mongodb+srv://williamzhong123:szJBy1w41kcuROXF@tmc-competition-data.zawdt.mongodb.net/?retryWrites=true&w=majority&appName=TMC-Competition-Data";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export {client};
