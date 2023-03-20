const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
  "mongodb+srv://tetz:qwer1234@cluster0.sdiakr0.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

// client.connect((err) => {
//   const test = client.db("kdt5").collection("test");
//   test.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     test.insertOne(
//       {
//         name: "pororo",
//         age: 5,
//       },
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         console.log(insertResult);
//       }
//     );
//   });
// });

async function main() {
  await client.connect();
  const test = client.db("kdt5").collection("test");

  const deleteAllResult = await test.deleteMany({});
  if (!deleteAllResult.acknowledged) return "삭제 에러 발생";

  const insertResult = await test.insertMany([
    { name: "pororo", age: 5 },
    { name: "loopy", age: 6 },
    { name: "crong", age: 4 },
  ]);
  if (!insertResult.acknowledged) return "삽입 에러 발생";

  const updateOneResult = await test.updateOne(
    { name: "loopy" },
    { $set: { name: "루피" } }
  );

  if (!updateOneResult.acknowledged) return "수정 에러 발생";
  console.log(updateOneResult);

  client.close();
}

main();
