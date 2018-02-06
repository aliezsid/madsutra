const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("client"));
app.use(bodyParser.json());
app.use(cors());

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "client/index.html"));
});

app.listen(PORT, function() {
	console.log("Started on port:" + PORT);
});
