require("dotenv").config();
const mongoose = require("mongoose");

// Connect to MongoDB - database login is retrieved from environment variables - YOU SHOULD USE YOUR OWN ATLAS CLUSTER
CONNECTION_STRING =
  "mongodb+srv://<username>:<password>@cluster0.gxwjq.mongodb.net/INFO30005?authSource=admin&replicaSet=atlas-z3x4e9-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true";
MONGO_URL = CONNECTION_STRING.replace("<username>", "4399").replace(
  "<password>",
  "tBbXaMrp6MmEs5Iu"
);

mongoose.connect(MONGO_URL || "mongodb://localhost", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  dbName: "mylibraryapp",
});

const db = mongoose.connection;

db.on("error", (err) => {
  console.error(err);
  process.exit(1);
});

db.once("open", async () => {
  console.log("Mongo connection started on " + db.host + ":" + db.port);
});

require("./author");
