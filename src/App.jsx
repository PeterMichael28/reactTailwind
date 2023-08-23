import { useState } from 'react'
import './App.css'
import useUser from './hooks/userUser';

function App() {
 
  const { isLoading, error, isError, data } = useUser()
  
  if ( isLoading ) {
    return <p>Loading...</p>
  }

  if ( isError ) {
    return <p>{error}</p>;
  }

  return (
    <div className="text-red-800">
      { data.map( dat => {
        return (
          <div key={dat.id}>
            <h1>{ `Name: ${ dat.name }` }</h1>
            <h1>{ `Username: ${dat.username}` }</h1>
          </div>

          ) ;
          
      } ) }
    </div>
  )
}

export default App
