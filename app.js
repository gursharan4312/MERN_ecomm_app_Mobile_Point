const express = require("express");
const app = express();

app.use(express.static("./client/build"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
