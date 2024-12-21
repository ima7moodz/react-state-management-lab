import { useState } from "react"
import "./App.css"

const App = () => {
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)

  const [totalStrength, setTotalStrength] = useState(0)
  const [totalAgility, setTotalAgility] = useState(0)

  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/150/92c952",
    },
    {
      id: 2,
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796",
    },
    {
      id: 3,
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/150/24f355",
    },
    {
      id: 4,
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/d32776",
    },
    {
      id: 5,
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      id: 5,
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2",
    },
    {
      id: 6,
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2",
    },
    {
      id: 7,
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/150/8985dc",
    },
    {
      id: 8,
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/392537",
    },
    {
      id: 9,
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/602b9e",
    },
  ])

  const calculateTeamStats = (currentTeam) => {
    const strength = currentTeam.reduce(
      (total, fighter) => total + fighter.strength,
      0
    )
    const agility = currentTeam.reduce(
      (total, fighter) => total + fighter.agility,
      0
    )
    setTotalStrength(strength)
    setTotalAgility(agility)
  }

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      const newTeam = [...team, fighter]
      setTeam(newTeam)
      setMoney(money - fighter.price)
      calculateTeamStats(newTeam)
      setZombieFighters(
        zombieFighters.filter((fiter) => fiter.id !== fighter.id)
      )
    } else {
      console.log("Not enough money")
    }
  }

  const handleRemoveFighter = (fighter) => {
    const newTeam = team.filter((member) => member.id !== fighter.id)
    setTeam(newTeam)
    setMoney(money + fighter.price)
    setZombieFighters([...zombieFighters, fighter])
    calculateTeamStats(newTeam)
  }

  return (
    <div>
      <h1>Zombie Apocalypse Team Manager</h1>
      <div>
        <p>Available Money: ${money}</p>
        <p>Total Team Strength: {totalStrength}</p>
        <p>Total Team Agility: {totalAgility}</p>
      </div>

      <div>
        <h2>Your Team</h2>
        {team.length === 0 ? (
          <p>Pick some team members!</p>
        ) : (
          <ul>
            {team.map((fighter, index) => (
              <li key={index}>
                <img src={fighter.img} alt={fighter.name} />
                <h3>{fighter.name}</h3>
                <p>Price: ${fighter.price}</p>
                <p>Strength: {fighter.strength}</p>
                <p>Agility: {fighter.agility}</p>
                <button onClick={() => handleRemoveFighter(fighter)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <h2>Available Fighters</h2>
      <ul>
        {zombieFighters.map((fighter, index) => (
          <li key={index}>
            <img src={fighter.img} alt={fighter.name} />
            <h3>{fighter.name}</h3>
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
