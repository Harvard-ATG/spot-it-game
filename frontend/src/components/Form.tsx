import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { generateDeckFromPrimeNum, shuffle } from "../utils";
import { Deck, Card } from "../types";
import Cards from "./Cards";

const Form = () => {
  const [primeNumber, setPrimeNumber] = React.useState(0);
  const [deck, setDeck] = React.useState<Deck>([]);
  const [msg, setMsg] = React.useState("");

    const generate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        const primeNumber = Number(e.currentTarget.value)
        const d = shuffle(generateDeckFromPrimeNum(primeNumber))
        setMsg(
            `Generating ${primeNumber ** 2 + primeNumber + 1} cards... with ${
              primeNumber + 1
            } images per card`
          );
        setDeck(d);
    }
  return (
    <>
      {/* <form>
        <label>
          Enter a prime number:
          <input
            type="number"
            name="primeNumber"
            onChange={(e) => setPrimeNumber(Number(e.currentTarget.value))}
          />
        </label>
        <input
          type="submit"
          value="Submit"
          onClick={(e) => {
            e.preventDefault();
            const d = generateDeckFromPrimeNum(primeNumber)
            setDeck(d);
            console.log(deck);
            setMsg(
              `Generating ${primeNumber ** 2 + primeNumber + 1} cards... with ${
                primeNumber + 1
              } images per card`
            );
          }}
        />
      </form> */}
      <div style={{display:"flex", justifyContent:"space-evenly"}}>
        <button style={{marginRight: '5px'}} onClick={generate} value={2}>3 images, total cards=7</button>
        <button style={{marginRight: '5px'}} onClick={generate} value={3}>4 images, total cards=13</button>
        <button style={{marginRight: '5px'}} onClick={generate} value={5}>6 images, total cards=31</button>
        <button style={{marginRight: '5px'}} onClick={generate} value={7}>8 images, total cards=57</button>
      </div>  
      {/* <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>
        <Dropdown.Menu flip={true}>
          <Dropdown.Item value={5}>6</Dropdown.Item>
          <Dropdown.Item value={7}>8</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}
      <p>{msg}</p>
      <div className="deck">
        {deck.map((ele: Card, index: number) => (
          <Cards key={index} ids={ele} />
        ))}
      </div>
    </>
  );
};

export default Form;
