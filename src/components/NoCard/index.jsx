import EmptyCard from "../../assets/NoCard.svg";
import "../NoCard/noCard.css";

const NoCard = () => {
    return (
        <div className="container__no__card">
            <img src={EmptyCard} alt="" />
            <img src={EmptyCard} alt="" />
            <img src={EmptyCard} alt="" />
        </div>
    );
};

export default NoCard;
