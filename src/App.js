import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import Header from './pages/Header'
import Body from './pages/Body'
import Footer from './pages/Footer'
import { AppContainer } from './app.styled.js'

export default function App() {
  const [user, setUser] = useState()
  const [loggedIn, setLoggedIn] = useState({})
  const userData = useLoaderData()
  console.log('userData: ', userData)

  useEffect(() => {
    if (userData.loggedIn) {
      setUser(userData.user)
      setLoggedIn(true)
    } else {
      setUser(() => {{}})
      setLoggedIn(() => false)
    }
  }, [])

  return (
    <>
      <AppContainer >
        <Header loggedin={ loggedIn }/>
        <Body />
        <Footer />
      </AppContainer>
    </>
  )
}