import express from "express";
import cors from "cors";

const app=express();

const sampleEmployee = {
    name: {
      first: "Charlie",
      last: "Thompson",
    },
    email: "charlie.thompson@example.com",
    picture: {
      medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
    },
  };


const sayHello=(req,res) => {
    res.json({results :[sampleEmployee]});
};

app.use(cors({ origin: ["http://localhost:5173"] }));
app.get("/api/employees", sayHello);

const port=3310;

app.listen(port, () => {
    console.log("je suis sur le port "+port)
})