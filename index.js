const express = require("express");
const app = express();
const port = 5000;
const users = [
  {
    id: "7",
    createdAt: "2021-06-21T01:59:18.719Z",
    name: "Dr. Clark Volkman",
    avatar: "https://cdn.fakercloud.com/avatars/danillos_128.jpg",
    userid: 21,
  },
  {
    id: "10",
    createdAt: "2021-06-20T17:58:04.894Z",
    name: "Dr. Jonathan Conroy",
    avatar: "https://cdn.fakercloud.com/avatars/daniloc_128.jpg",
    userid: 61,
  },
  {
    id: "11",
    createdAt: "2021-06-20T09:51:51.189Z",
    name: "Raul Gottlieb",
    avatar: "https://cdn.fakercloud.com/avatars/jedbridges_128.jpg",
    userid: 6,
  },
  {
    id: "12",
    createdAt: "2021-06-21T04:49:04.004Z",
    name: "Verna Kuphal",
    avatar: "https://cdn.fakercloud.com/avatars/horaciobella_128.jpg",
    userid: 93,
  },
  {
    id: "13",
    createdAt: "2021-06-20T19:00:25.313Z",
    name: "Winifred Kassulke",
    avatar: "https://cdn.fakercloud.com/avatars/jcubic_128.jpg",
    userid: 64,
  },
  {
    id: "14",
    createdAt: "2021-06-20T23:00:45.786Z",
    name: "Philip Littel",
    avatar: "https://cdn.fakercloud.com/avatars/demersdesigns_128.jpg",
    userid: 62,
  },
  {
    id: "15",
    createdAt: "2021-06-21T04:20:34.707Z",
    name: "Andrew Wisoky",
    avatar: "https://cdn.fakercloud.com/avatars/bennyjien_128.jpg",
    userid: 9,
  },
  {
    id: "16",
    createdAt: "2021-06-20T11:14:08.142Z",
    name: "Omar Braun",
    avatar: "https://cdn.fakercloud.com/avatars/gofrasdesign_128.jpg",
    userid: 90,
  },
  {
    id: "17",
    createdAt: "2021-06-20T13:30:47.493Z",
    name: "Lula Deckow",
    avatar: "https://cdn.fakercloud.com/avatars/boxmodel_128.jpg",
    userid: 6,
  },
  {
    id: "19",
    createdAt: "2021-06-21T10:31:28.602Z",
    name: "hbdacjhbcd",
    avatar: "",
    userid: 46,
  },
  {
    id: "20",
    createdAt: "2021-06-21T11:59:41.026Z",
    name: "a",
    avatar: "sss",
    userid: 81,
  },
  {
    id: "21",
    createdAt: "2021-06-22T16:22:07.395Z",
    name: "",
    avatar: "",
    userid: 22,
  },
  {
    id: "22",
    createdAt: "2021-06-22T19:19:40.774Z",
    name: "",
    avatar: "",
    userid: 0,
  },
];

app.get("/", (req, res) => {
  res.send("Hi Welcome");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((data) => data.id === id);
  res.send(user);
});

app.post("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => console.log("The Server is Started"));
