import Trash from "../../assets/Trash.svg";
import "./style.css";

const Card = ({ description, value, select, removerCard, index }) => {
    return (
        <li
            className={
                select === "Entrada"
                    ? "li__render--default entry"
                    : "li__render--default exit"
            }
        >
            <div className="div__description">
                <p className="p__descricao">{description}</p>
                <div className="p__imagem">
                    <p className="p__valor__lista">
                        {value.toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                        })}
                    </p>
                    <button onClick={() => removerCard(index)}>
                        <img src={Trash} alt="Lixo" />
                    </button>
                </div>
            </div>

            <span>{select}</span>
        </li>
    );
};

export default Card;
