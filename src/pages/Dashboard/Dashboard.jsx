import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import { DashboardStyle } from "./DashboarsStyle";

const Dashboard = ({ setIsLoggedIn }) => {
  return (
    <>
      <Header setIsLoggedIn={setIsLoggedIn} />
      <DashboardStyle>
        <Form />
        <List />
      </DashboardStyle>
    </>
  );
};

export default Dashboard;
