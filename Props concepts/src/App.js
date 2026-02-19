import Usercard from "./usercard";
import './App.css';

export default function app(){
return(
  <div style={{ padding: 30}}>
    <Usercard id="1" name="Sujith" age={21} city="Madurai" Skills="HTML, CSS, JS"/>
    <Usercard id="2" name="Nithish" age={22} city="Madurai" Skills="Python" />
    <Usercard id="3" name="Suba Karan" age={20} city="Madurai" Skills="Java" />
  </div>
);
}

