import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Header from './components/Header'
import List from './components/List'
import Details from './components/Details'

function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    getData()
  },[])
  const getData=async()=>{
    const result = await axios.get('https://fakestoreapi.com/users')
    setData(result.data);
  }
  console.log(data);
  
  return (
    <>
        <Header/>
        <Details/>
        <List data={data}/>
    </>
  )
}

export default App
