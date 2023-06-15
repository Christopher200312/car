const osas = require("express");

require("./config/database");
const port = 2001;
const app = osas();

app.use(osas.json());

// DEFAULT GET

app.get("/", (req, res) => {
  res.status(200).json({
    message: "OSAS GET SERVER IS UP AND RUNNING",
  });
});

app.listen(port, () => {
  console.log("OSAS CAR SERVER IS READY");
});
