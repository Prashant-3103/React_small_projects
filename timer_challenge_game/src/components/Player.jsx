import { useRef, useState } from "react";

export default function Player() {
const playerName = useRef()
  const [name, setName] = useState('')

  function handleClick()
  {
setName(playerName.current.value)
playerName.current.value= ""
  }

  return (
    <section id="player">
      <h2>Welcome {name ? name : "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" required/>
        <button  onClick={handleClick}>SET NAME</button>
      </p>
    </section>
  );
}
