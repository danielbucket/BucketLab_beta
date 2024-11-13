import React from 'react'
import { HeaderContainer } from './header.styled.js'

export default function Header({ loggedIn }) {
  return (
    <>
      <HeaderContainer>
        <h1>Header</h1>
        { loggedIn ? <p>Welcome, { loggedIn }</p> : <p>Please log in</p> }
      </HeaderContainer>
    </>
  )
}