var figlet = require("figlet");
figlet("INTOCODE", function (err, data) {
  if (err) {
    console.log("Что то пошло не так ...");
    console.dir(err);
    return;
  }
  console.log(data);
});
