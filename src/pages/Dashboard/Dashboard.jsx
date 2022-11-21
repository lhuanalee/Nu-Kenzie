import { useState } from "react";
import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import { DashboardStyle } from "./DashboarsStyle";

const Dashboard = ({ setIsLoggedIn, setClick }) => {
  const [transaction, setTransaction] = useState([]);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("Entrada");
  const [filtered, setFiltered] = useState([]);

  return (
    <>
      <Header setIsLoggedIn={setIsLoggedIn} setClick={setClick} />

      <DashboardStyle>
        <Form
          transaction={transaction}
          setTransaction={setTransaction}
          description={description}
          setDescription={setDescription}
          value={value}
          setValue={setValue}
          type={type}
          setType={setType}
          setFiltered={setFiltered}
        />
        <List
          transaction={transaction}
          setTransaction={setTransaction}
          description={description}
          value={value}
          type={type}
          filtered={filtered}
          setFiltered={setFiltered}
        />
      </DashboardStyle>
    </>
  );
};

export default Dashboard;
