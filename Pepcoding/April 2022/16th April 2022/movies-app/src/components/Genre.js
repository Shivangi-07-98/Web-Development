import React from 'react'
import { useEffect, useState } from 'react';

function Genre(props) {

  const [isLoaded, setLoaded] = useState(true);
  const [content, setContent] = useState([]);
  const [Genre, setGenre] = React.useState([]);
  const sendGenre = (e) => {
    setGenre(e.target.textContent);
    props.setGlobalGenre(Genre);
  }

  useEffect(function () {
    (async function () {
      let response = await fetch('/genres.json');
      response = await response.json();
      console.log(response);
      setLoaded(false);
      setContent(response);
    })();
  }, [])


  return (
    <div className='Genre'>
      <div className='mr-6 border-2 w-40 text-center h-10 cursor-pointer font-bold' onClick={sendGenre}>All Genre</div>

      {isLoaded == true ? <div className='font-bold'>Loading...</div> : 
      content.genres.map(function (genre, idx) {
        return (
          
            <div key={idx} className='mr-6 border-2 w-40 text-center h-10 border-t-0 cursor-pointer' onClick={sendGenre}>{genre.name}</div>
          
        )
      })
      }

    </div>
  )
}

export default Genre