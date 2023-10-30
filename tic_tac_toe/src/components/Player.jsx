import { useState } from "react"

export default function Player({name, symbol, isActive, onChangeName})
{
    const [playerName, setPlayerName] =  useState(name)
const [isEditing, setIsEditing]= useState(false)
const handleEditing = (e)=>{
    setIsEditing((editing)=> !isEditing)
   if(isEditing)
   {
    onChangeName(symbol, playerName)
   }
}

const handleChange = (e) =>{
    setPlayerName(e.target.value)

}

    return (
        <li className={isActive ? 'active' : undefined}>
  <span className="player">
{!isEditing ?   <span className="player-name">{playerName}</span> : (
    <input type="text" required value={playerName} onChange={handleChange} />
)}
  <span className="player-symbol">{symbol}</span>
  </span>
  <button onClick={handleEditing} >{!isEditing ? (<h3>Edit</h3>) : (<h3>Save</h3>)}</button>
</li>
    )
}
