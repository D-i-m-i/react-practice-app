import { useState } from "react";

const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);

  return (
    <div className="card">
      <h2>{title}</h2>

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
