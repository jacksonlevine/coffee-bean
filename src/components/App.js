import BeanControl from "./BeanControl";

function App() {
  const styles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "lightgreen",
    margin: "0 30%",
    paddingBottom: "30px",
    borderRadius: "60px",
    fontFamily: "Tahoma",
    padding: "30px"
  };

  return (
    <div className="App" style={styles}>
      <h1>The Coffee Bean</h1>
      <BeanControl />
    </div>
  );
}

export default App;