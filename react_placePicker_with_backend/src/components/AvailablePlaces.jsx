import { useEffect, useState } from 'react';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
const[availablePlaces, setAvailablePlaces] = useState([])
const[isFetching , setIsFetching] = useState(false)
useEffect(()=>{
setIsFetching(true)
async function fetchPlaces(){
const response = await   fetch("http://localhost:3000/places")
const resData = await response.json()
setAvailablePlaces(resData.places)
setIsFetching(false)
}

fetchPlaces()

},[])

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      loadingText="Fetching place data....."
      isLoading={isFetching}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
