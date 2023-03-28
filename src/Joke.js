import React from 'react'

const Joke = ({joke,rating}) => {
  return (
    <div>
        <h2>{joke}</h2>
        <span>Rating is {rating}</span>
    </div>
  )
}

export default Joke