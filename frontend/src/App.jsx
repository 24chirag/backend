import { useEffect, useState } from "react";
import Post from "./components/Post";
import axios from "axios";

function App() {
  let [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => {
        setJokes(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1>chirag and fullstack</h1>
      <p> No ok jokes : {jokes.length}</p>
      {jokes.map((joke) => {
        return <Post key={joke.id} id={joke.id} title={joke.title} />;
      })}
    </div>
  );
}

export default App;
