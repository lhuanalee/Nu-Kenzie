import Card from "../Card";
import "../List/list.css";
import NoCard from "../NoCard";

const List = ({ listTransactions, setListTransactions }) => {
  const removerCard = (index) => {
    const removeCard = listTransactions.filter((list, i) => i !== index);
    setListTransactions(removeCard);
  };

  return (
    <ul>
      {listTransactions.length > 0 ? (
        listTransactions.map((list, index) => (
          <Card
            key={index}
            description={list.description}
            value={list.value}
            select={list.select}
            removerCard={removerCard}
            index={index}
          />
        ))
      ) : (
        <NoCard />
      )}
    </ul>
  );
};

export default List;
