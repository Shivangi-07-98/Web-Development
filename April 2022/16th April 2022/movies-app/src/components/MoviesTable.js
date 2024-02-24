import React from 'react'
import { useEffect, useState } from 'react';

function MoviesTable(props) {
  let { content, isLoaded, setContent, filteredContent} = props
 
  const deleteMovie = (tobeDeletedMovieId) => {
    let restOfTheMovies = content.movies.filter((movie) => movie.title !== tobeDeletedMovieId);
    let newObject = { movies: restOfTheMovies};
    setContent(newObject)
  }


  return (
    <div style={{display:'flex', justifyContent:'center'}}>
      {isLoaded == true ? <div className='font-bold'>Loading...</div> :

        <table className='table-auto'>
          <thead>
            <tr>
              <th className='px-2'>#</th>
              <th className='px-2'>Title</th>
              <th className='px-2'>Genre</th>
              <th className='px-2'>Stock</th>
              <th className='px-2'>Ratings</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            
              
            {
              filteredContent.map(function (movie, idx) {
                return (
                  <tr key={idx}>
                    <td className='px-2 text-center'>{idx + 1}</td>
                    <td className='px-2 text-center'>{movie.title}</td>
                    <td className='px-4 text-center'>{movie.genre}</td>
                    <td className='px-2 text-center'>{movie.stock}</td>
                    <td className='px-2 text-center'>{movie.Ratings}</td>
                    <td><button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={() => {deleteMovie(movie.title)}}>Delete</button></td>
                  </tr>
                )
              })

            }

            
          </tbody>
        </table>
        }
    </div>
  )
}

export default MoviesTable;