import express from "express";

const app = express();
// app.get("/", (req, res) => {
//   res.send("server is ready");
// });
app.get("/api/jokes", (req, res) => {
  const jokes = [
    { id: 1, title: "hiee this is joke1" },
    {
      id: 2,
      title: "hiee this is joke2",
    },
    {
      id: 3,
      title: "hiee this is joke3",
    },
    {
      id: 4,
      title: "hiee this is joke4",
    },
    {
      id: 5,
      title: "hiee this is joke5",
    },
  ];
  res.send(jokes);
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
