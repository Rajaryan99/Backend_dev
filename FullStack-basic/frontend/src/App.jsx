import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import axios from "axios";

function App() {
  const [hello, setHello] = useState([]);

  // useEffect(() => {
  //   axios.get('/hello')
  //     .then((res) => {
  //       setHello(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     });
  // });

  return (
    <>
      <h1>Software Developer</h1>
      <p>Greet: {hello.length}</p>

      {
        hello.map((hello, index) => {
          <div key={hello.id}>
            <h3>{hello.name}</h3>
            <h4>{hello.greet}</h4>
          </div>
        })
      }
    </>
  )
}

export default App
