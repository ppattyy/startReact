import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import sharkPic from '/sharkpicNoBG.png'
import './App.css'

function SharkButton() {
  return <button>Shark</button>
}

function Header() {
  return <h1>Here is my 10.5 lab! Just adding shark related components</h1>
}

function Footer() {
  return <h1>Thank You! Have a good day.</h1>
}

function App() {
  const [count, setCount] = useState(0)

  function SharkList() {
    const sharks = [
      { id: 1, name: "Great White Shark", ocean: "All of them" },
      { id: 2, name: "Bull Shark", ocean: "Atlantic, Pacific, Indian" },
      { id: 3, name: "Tiger Shark", ocean: "Atlantic, Pacific, Indian" },
      { id: 4, name: "Whale Shark", ocean: "Pacific, Indian" },
    ];

    return (
      <div>
        <h2>Shark Species</h2>
        <ul>
          {sharks.map((shark) => (
            <li key={shark.id}>
              {shark.name} - Lives in the {shark.ocean}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://funnysharks.neocities.org/" target="_blank">
          <img src={sharkPic} className="logo shark" alt="shark logo" />
        </a>
      </div>
      <h1>Vite + React + Patty</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 39)}>
          count is {count}
        </button>
        <p>
         Testing editing the page
        </p>
      </div>
      <SharkButton />
      <SharkList />
      <Footer />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
