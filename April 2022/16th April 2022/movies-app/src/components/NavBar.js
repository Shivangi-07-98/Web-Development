import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <nav className='p-4 bg-black mb-3'>

      <Link to='/' className='font-medium leading-tight text-3xl text-white inline-block mr-4'>IMDB</Link>
      <Link to='/login' className='font-medium text-blue-500 text-xl hover:text-blue-400'>Login</Link>
    </nav>
  )
}

export default NavBar


// import React from 'react';

// function NavBar() {
//   return (
//     <nav className='p-4 bg-black mb-3'>

//       <h2 className='font-medium leading-tight text-3x1 text-white inline-block mr-4'>IMBD</h2>
//       <span className='font-medium text-blue-500 text-x1 hover:text-blue-400'>Login</span>
//     </nav>
//   )
// }

// export default NavBar