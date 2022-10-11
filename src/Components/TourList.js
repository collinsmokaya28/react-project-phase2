import React,{useEffect, useState} from "react";
import Tours from "./Tours"
import Loading from "./Loading";


//const url = 'http://localhost:3000/tours'
const url = 'https://fast-eyrie-99534.herokuapp.com/tours'

const TourList = ()=> {

    const [tours, setTours]= useState([]);
    const [loading, setLoading] = useState(true)
  
    const deleteTour = (id) => {
      const newTours = tours.filter((tour)=> tour.id !== id)
      setTours(newTours);
    }
  
    const fetchTours = async () => {
      setLoading(true)
  
      try{
        const resp = await fetch(url)
        const tours = await resp.json()
        setLoading(false)
        setTours(tours)
      }
      catch(error){
        setLoading(false)
        console.log(error)
      }
    }
    useEffect(()=> {
      fetchTours()
    },[])
  
    if(loading) {
      return (
        <main>
          <Loading />
        </main>
      )
    }
  
    if(tours.length === 0) {
      return (
        <main>
          <div className="title">
            <h2>No Tours at the Moment</h2>
            <button className="load-btn" onClick={() => fetchTours()}>
              Reload
            </button>
          </div>
        </main>
      )
    }

     return(
        <main>
          <Tours tours={tours} deleteTour={deleteTour} />
        </main>
      )    

}

export default TourList;