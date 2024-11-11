import React, { useEffect, useState } from 'react'
import { useRouteError } from 'react-router-dom'
import { StyledError } from './error.styled.js'

export default function Error() {
  const [error, setError] = useState(null)
  const routeError = useRouteError()

  useEffect(() => {
    setError(() => routeError)
  }, [])

  return (
    <>
      <StyledError>
        <div>Somethin' dun gone wrong, Cleetus!</div>
        <div>{error.message}</div>
      </StyledError>
    </>
  )
}