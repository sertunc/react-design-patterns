import SplitScreen from "./SplitScreen";

function App() {
  const LeftHandComponent = ({ name }) => {
    return <h1 style={{ backgroundColor: "yellow" }}>{name}</h1>;
  };

  const RightHandComponent = ({ message }) => {
    return <h1 style={{ backgroundColor: "red" }}>{message}</h1>;
  };

  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent name={"John Doe"} />
      <RightHandComponent message={"Hello World"} />
    </SplitScreen>
  );
}

export default App;
