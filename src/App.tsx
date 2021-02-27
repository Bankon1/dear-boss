import "./App.css";
import { adverbs } from "./data";
import { verbs } from "./data";
import { adjectives } from "./data";
import { nouns } from "./data";

function pickRandomValue(words: string[], min = 0) {
  const value = Math.floor(Math.random() * (words.length + 1 - min) + min); //The maximum is exclusive and the minimum is inclusive
  return words[value];
}
function App() {
  const adverb = pickRandomValue(adverbs);
  const verb = pickRandomValue(verbs);
  const adjective = pickRandomValue(adjectives);
  const noun = pickRandomValue(nouns);
  return (
    <div className="App">
      <p>{adverb}</p>
      <p>{verb}</p>
      <p>{adjective}</p>
      <p>{noun}</p>
    </div>
  );
}

export default App;
