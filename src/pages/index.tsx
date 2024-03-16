import { Card } from "../icons/geldcard";
import  BarChart  from "./component/barchart";
import Chart from "./component/chart";
import { Income } from "./component/income";
import { List } from "./component/list";
import { Navbar } from "./component/navbar";

const Dashboard = () => {
  return (
    <>
     <Navbar />
    <div className="body">
      <div className="all">
      <div className="bet">
      <Card />
      <Income />
      <Income />
      </div>
      <div className="graphic">
        <BarChart />
        <Chart />
      </div>
      <div className="list">
      <List />
      </div>
      </div>
    </div>
    </>
  );
};
export default Dashboard;
