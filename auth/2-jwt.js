const jwt = require("jsonwebtoken");

const secret = "cWX2lUlZs&bmLkO0n1j7uUZFo%Y945yl";
const token = jwt.sign(
  {
    id: "userId",
    isAdmin: true,
  },
  secret,
  {
    expiresIn: 2,
  }
);

console.log(token);

jwt.verify(token, secret, (error, decoded) => {
  console.log(error, decoded);
});
