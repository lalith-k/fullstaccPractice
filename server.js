import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "joke1",
      content: "This is a joke",
    },
    {
      id: 2,
      title: "joke2",
      content: "This is a joke",
    },
    {
      id: 3,
      title: "joke3",
      content: "This is a joke",
    },
    {
      id: 4,
      title: "joke4",
      content: "This is a joke",
    },
    {
      id: 5,
      title: "joke5",
      content: "This is a joke",
    },
  ];

  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
