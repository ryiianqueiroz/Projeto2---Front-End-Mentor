import './App.css';
import Memory from './images/icon-memory.svg'
import Reaction from './images/icon-reaction.svg'
import Verbal from './images/icon-verbal.svg'
import Visual from './images/icon-visual.svg'

function App() {
  return (
    <div className="App">
      <div className="result">
        <h3>Your Result</h3>
        <div className="seventysix">
          <h1>76</h1>
          <p>of 100</p>
        </div>
        <h2>Great</h2>
        <h6>You scored higher than 65% of the people who have taken these tests.</h6>
      </div>
      <div className="summary">
        <h3>Summary</h3>
        <div className="summaryResults">
          <div className="group1">
            <img src={Reaction} alt="#" />
            <h5 id="Reaction">Reaction</h5>
            <h4 id="results">80 /</h4>
            <h4>100</h4>
          </div>
          <div className="group2">
            <img src={Memory} alt="#" />
            <h5 id="Memory">Memory</h5>
            <h4 id="results">91 /</h4>
            <h4>100</h4>
          </div>
          <div className="group3">
            <img src={Verbal} alt="#" />
            <h5 id="Verbal">Verbal</h5>
            <h4 id="results2">61 /</h4>
            <h4>100</h4>
          </div>
          <div className="group4">
            <img src={Visual} alt="#" />
            <h5 id="Visual">Visual</h5>
            <h4 id="results2">72 /</h4>
            <h4>100</h4>
          </div>
        </div>
        <button>Continue</button>
      </div>
    </div>
  );
}

export default App;
