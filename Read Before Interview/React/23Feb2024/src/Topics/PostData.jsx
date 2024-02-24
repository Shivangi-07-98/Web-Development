import React, {useState} from 'react'
import axios from 'axios'

function PostData() {

  const [post, setPost] = useState({
    title: '',
    post: '',
  })
  const handleInput = (event) => {
    setPost({...post, [event.target.name]: event.target.value})
  }
 
  function handleSubmit(event) {
    event.preventDefault()
    axios.post('https://jsonplaceholder.typicode.com/posts', {post})
    .then(response => console.log(response))
    .catch(err => console.log(err))
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      
      Title:
      <input type='text' onChange={handleInput} name='title'></input>

      <br/>

      Post:
      <input type='text' onChange={handleInput} name='post'></input>
      
      <button>Submit</button>
    </form>
    </>
  )
}

export default PostData