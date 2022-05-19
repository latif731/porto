import React,{useEffect} from 'react';
import Main from './component/cover/Main';
import './App.css'
import Layout from './component/Layout/Layout';
import ParticleBackground from './component/particle/ParticleBackground'
import "aos/dist/aos.css";
import Aos from "aos"

function App() {
  useEffect(() => {
    Aos.init({})
  }, [])
  return (
    <div>
      <Main/>
      <Layout/>
    </div>
  );
}

export default App;
