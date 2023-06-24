const app = require("./app");
const connectDatabase = require("./config/database");

connectDatabase();

app.get("/", (req, res, next) => {
  res.send("<h1>hello from backend</h1>;");
});

const server = app.listen(process.env.PORT, () => {
  console.log(`server is working  on http://localhost:${4000}`);
});
