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

function getFriendById(req, res) {
  const friendId = Number(req.params.friendId);
  if (!friendId) {
    res.send(`<ul><li>firend with the id ${friendId} does not exist</li></ul>`);
  } else {
    res.send(friends.filter((f) => f.id === friendId));
  }
}

function getFriends(req, res) {
  res.json(friends);
}

function addFriends(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing friend name"
    });
  }
  const newFriend = {
    name: req.body.name,
    id: friends.length
  };
  friends.push(newFriend);
  res.json(newFriend);
}

module.exports = { addFriends, getFriends, getFriendById };
