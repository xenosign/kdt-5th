const express = require("express");

const app = express();

const userRouter = express.Router();
const PORT = 4000;

const USER = [
  {
    id: "tetz",
    name: "이효석",
    email: "tetz@spreatics.com",
  },
];

app.set("view engine", "ejs");
console.log(__dirname);
// 또는
app.use("/css", express.static(__dirname + "/views/css"));

app.use("/", userRouter);

userRouter.get("/ejs", (req, res) => {
  const userLen = USER.length;
  console.log(userLen);
  res.render("index", { USER, userCounts: userLen });
});

userRouter.get("/", (req, res) => {
  res.end("회원 목록");
});
userRouter.get("/:id", (req, res) => {
  res.end("특정 회원 정보");
});
userRouter.post("/", (req, res) => {
  res.end("회원 등록");
});
app.use("/", (req, res) => {
  res.end("Hello, express world!");
});

app.listen(PORT, () => {
  console.log(`The express server is running at port: ${PORT}`);
});
