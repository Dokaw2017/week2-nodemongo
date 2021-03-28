db.createUser({
  user: "cat",
  pwd: "cat12345",
  roles: [
    { role: "readWrite", db: "cat" },
    { role: "read", db: "reporting" },
  ],
});
