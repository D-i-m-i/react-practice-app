import { useState, useEffect } from "react";

const Card = ({ title }) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  }, [hasLiked]);

  useEffect(() => {
    console.log("CARD RENDERED");
  }, []);

  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <h2>
        {title} <br /> {count || null}
      </h2>

      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "♥︎" : "♡"}
      </button>
    </div>
  );
};

// function App() {} // alternative way
const App = () => {
  return (
    <div className="card-container">
      <Card title="Cars 2" test="test" />
      <Card title="Titanic" />
      <Card title="Jurassic World" />
    </div>
  );
};

export default App;
