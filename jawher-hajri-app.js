const express = require('express')

const app =express();


app.listen(3000 , err=>{
    err?console.log("erreur"):console.log("seceur run")
});
app.use(express.static("public"))

const auth = (req, res, next) => {
    if (true) {
      console.log("authenticated");
      next();
    } else {
      res.send("not authenticated");
    }
  };