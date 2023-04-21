import BeanControl from "./BeanControl";

function App() {
  const styles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  return (
    <div className="App" style={styles}>
      <h1>The Coffee Bean</h1>
      <BeanControl />
    </div>
  );
}

export default App;
