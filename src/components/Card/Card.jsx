import NoCard from "../../assets/NoCard.svg";
import { CardStyle } from "./CardStyle";

const Card = () => {
  return (
    <CardStyle>
      <h1>Você ainda não possui nenhum lançamento</h1>
      <img src={NoCard} alt="No Card" />
      <img src={NoCard} alt="No Card" />
      <img src={NoCard} alt="No Card" />
    </CardStyle>
  );
};

export default Card;
