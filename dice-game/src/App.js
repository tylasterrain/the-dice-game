import "./index.css";
import rollDice from "./rollDice";
import $ from "jquery";



function App() {
  let gameStarted = false;

  if(!gameStarted) {
    $(".winner1-flag").hide();
 $(".winner2-flag").hide();
}

    $(document).on("click", function (){
        
        if(!gameStarted){
            rollDice();
            gameStarted=true;
        } else {
rollDice();
        }});

        
    $(document).on("keydown", function (){
        if(!gameStarted){
            rollDice();
            gameStarted=true;
        } else {
rollDice();
    }});

  return (
    <div className="App">
  

  <div className="container">
      <h1>Click or Type to Roll</h1>

      <div className="dice">
        <p>Player 1</p>
        <img className="img1" src={require("./images/dice6.png")} alt="dice"/>
      </div>

      <div className="dice">
        <p>Player 2</p>
        <img className="img2" src={require("./images/dice6.png")} alt="dice"/>
      </div>

      <div className="winner1-flag">
        <i className="bi bi-flag-fill win2"></i>
      </div>


      <div className="winner2-flag">
        <i className="bi bi-flag-fill win2"></i>
      </div>
    

    </div>

    <footer>
    www 🎲 myType 🎲 com
  </footer>
    </div>
  );
}

export default App;
