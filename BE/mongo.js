const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
  "mongodb+srv://tetz:qwer1234@cluster0.sdiakr0.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

// async function main() {
//   await client.connect();

//   const users = client.db("kdt5").collection("users");

//   const deleteResult = await users.deleteMany({});
//   if (!deleteResult.acknowledged) return "삭제 에러 발생";

//   const insertResult = await users.insertOne({
//     name: "tetz",
//     nickName: "chickenHead",
//   });
//   if (!insertResult.acknowledged) return "삽입 에러 발생";

//   const userCursor = users.find({
//     name: "loopy",
//   });
//   const data = await userCursor.toArray();
//   console.log(data);

//   client.close();
// }

// main();

client.connect((err) => {
  const test = client.db("kdt5").collection("test");
  test.deleteMany({}, (err) => {
    test.insertOne(
      {
        name: "tetz",
        nickName: "chickenHead",
      },
      (err, result) => {
        if (result.acknowledged) {
          const findData = test.find({});
          findData.toArray((err, data) => {
            console.log(data);
          });
        }
      }
    );
  });
});
