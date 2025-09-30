import React from 'react'
import {Spinner} from 'react-bootstrap'

const LoaderComponent = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
        <Spinner animation="border" role="status"></Spinner>
    </div>
  )
}

export default LoaderComponent