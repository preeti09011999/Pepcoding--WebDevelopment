const fs = require("fs-extra");
fs.copy('../src', 'newSrc', function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log("success!");
  }
});