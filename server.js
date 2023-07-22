const express = require("express");

const app = express();
const PORT = 3000;

const friends = [
  {
    id: 0,
    name: "Jenkins Mulbah"
  },
  {
    id: 1,
    name: "Otis Weah"
  }
];
app.get("/friends", (req, res) => {
  res.json(friends);
});

app.get("/friends/:friendId", (req, res) => {
  const friendId = Number(req.params.friendId)
  if(!friendId){
    res.send(`<ul><li>firend with the id ${friendId} does not exist</li></ul>`)
  }else {
    res.send(friends.filter(f=>f.id === friendId))
  }
});

app.get("/", (req, res) => {
  res.send("<ul><li>Hello Otis </li></ul>");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
