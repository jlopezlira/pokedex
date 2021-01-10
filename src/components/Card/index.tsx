import { TJSXElement, TPokemon } from "../../types";

const Card = ({ name, url }: TPokemon): TJSXElement => {
    return (
        <div>
            <h2>{name}</h2>
            <h2>{url}</h2>
        </div>
    );
}

export default Card;
