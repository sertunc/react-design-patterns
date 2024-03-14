import { ControlledForm } from "./ControlledForm";
import { UncontrolledForm } from "./UncontrolledForm";
import { UncontrolledOnboardingFlow } from "./UncontrolledOnboardingFlow";

const StepOne = ({ goToNext }) => (
  <>
    <h1>Step 1</h1>
    <button onClick={() => goToNext({ name: "John Doe" })}>Next</button>
  </>
);
const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step 2</h1>
    <button onClick={() => goToNext({ age: 42 })}>Next</button>
  </>
);
const StepThree = ({ goToNext }) => (
  <>
    <h1>Step 3</h1>
    <button onClick={() => goToNext({ hairColor: "brown" })}>Next</button>
  </>
);

function App() {
  return (
    <>
      <UncontrolledForm />
      <hr />
      <ControlledForm />
      <hr />
      <UncontrolledOnboardingFlow
        onFinish={(data) => {
          console.log(data);
          alert("Thanks for submitting!");
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledOnboardingFlow>
    </>
  );
}

export default App;
