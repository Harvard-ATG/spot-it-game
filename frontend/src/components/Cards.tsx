import React, { ReactElement } from "react";
import { shuffle } from "../utils"

interface Props {
  ids: number[];
}

function Cards({ ids }: Props): ReactElement {
  return (
    <div className="card">
      {shuffle(ids).map((ele) => (
        <img
          alt={`pokemon${ele}`}
          key={`pokemon${ele}`}
          style={{ padding: "10px"}}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ele}.png`}
        />
      ))}
    </div>
  );
}

export default Cards;
