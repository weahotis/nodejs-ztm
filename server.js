const express = require("express");
const friendsController = require('./controllers/friends.controller')
const app = express();
const PORT = 3000;



app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ms ${delta}`);
});

app.use(express.json());

app.post("/friends", friendsController.addFriends);

app.get("/friends", friendsController.getFriends);

app.get("/friends/:friendId", friendsController.getFriendById);

app.get("/", (req, res) => {
  res.send("<ul><li>Hello Otis </li></ul>");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
