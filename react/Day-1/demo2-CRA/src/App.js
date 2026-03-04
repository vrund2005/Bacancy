import dinosaur from './dinosaur.svg';
import './text.css';

function App() {
  return (
    <div className="text">
        <h1>Your svg is here : </h1>
        <img src={dinosaur} alt="dinosaur logo" />
    </div>
  );
}

export default App;