import HorizontalLinearStepper from "../component/stepper";
import { Icon } from "@/icons/geldicon";
import { Job } from "@/icons/geldjob";

const GoodJob = () => {
//   function handleSelect (event: { target: { value: string }; }) {
//     setValue(event.target.value);
//   }
  return (
    <div>
      <div className="icon">
        <Icon />
        <HorizontalLinearStepper />
      </div>
      <div className="container">
        <div className="money">
          <Job />
        </div>
        <h1>Good Job!</h1>
        <div className="Base">
          <p>Your very first account has been created. Now continue to dashboard and start tracking</p>
          <button className="btn2">Go to Dashboard</button>
        </div>
      </div>
    </div>
  );
};

export default GoodJob;
