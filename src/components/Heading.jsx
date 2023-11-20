import React from 'react'

const Heading = ({headContent,paragraphContent}) => {
  return (
    <div className="heading">
        {headContent && <h2>{headContent}</h2>}
        {paragraphContent && <p>{paragraphContent}</p>}
    </div>
  )
}

export default Heading