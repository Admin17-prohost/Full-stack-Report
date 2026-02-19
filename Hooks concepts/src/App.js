import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useMemo,
  useCallback,
  createContext
} from "react";
 
/* ------------------ Context ------------------ */
const ThemeContext = createContext();
 
/* ------------------ Reducer ------------------ */
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
 
/* ------------------ Child Component ------------------ */
function ChildComponent({ onClick }) {
  const theme = useContext(ThemeContext);

  return (
<div style={{ marginTop: "20px", color: theme === "dark" ? "white" : "black" }}>
<button onClick={onClick}>Callback Button</button>
</div>
  );
}
 
/* ------------------ Main App ------------------ */
function App() {
 
  /* useState */
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");
 
  /* useReducer */
  const [state, dispatch] = useReducer(reducer, { count: 0 });
 
  /* useEffect */
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);
 
  /* useMemo */
  const squared = useMemo(() => {
    console.log("Calculating square...");
    return count * count;
  }, [count]);
 
  /* useCallback */
  const handleClick = useCallback(() => {
    console.log("Callback clicked!");
  }, []);
 
  return (
    <ThemeContext.Provider value={theme}>
      <div
        style={{
          textAlign: "center",
          padding: "30px",
          background: theme === "dark" ? "#333" : "#eee",
          minHeight: "100vh"
        }}
      >
        <h1>All React Hooks in One Program</h1>

        {/* useState */}
        <h2>Simple Counter: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        
        {/* useMemo */}
        <p>Squared Value (useMemo): {squared}</p>
  
        {/* useReducer */}
        <h2>Reducer Counter: {state.count}</h2>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
  
          {/* useContext */}
          <br /><br />
          <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            Toggle Theme
          </button>
  
          {/* useCallback */}
          <ChildComponent onClick={handleClick} />
          </div>
          </ThemeContext.Provider>
  );
}
 
export default App;
