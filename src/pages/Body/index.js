import React from 'react'
import { useState } from 'react'
import { BodyContainer } from './body.styled.js'
import robot from '../../assets/robot.jpeg'
import squirrel from '../../assets/squirrel.jpg'
import llama from '../../assets/llama.jpeg'

const profiles = [
  {
    name: 'Robototron',
    image: robot,
    id: 1
  },
  {
    name: 'Squirrelchongbot',
    image: squirrel,
    id: 2
  },
  {
    name: 'LlamaJaws',
    image: llama,
    id: 3
  }
]

export default function Body() {
  const [activeProfile, setActiveProfile] = useState({})

  const handleClick = id => {
    const selectedProfile = profiles.find(profile => profile.id === id)
    setActiveProfile(selectedProfile)
  }

  return (
    <>
      <BodyContainer>
        <div className="profile-select">
          {
            profiles.map(profile => {
              return (
                <button key={ profile.id } onClick={() => handleClick(profile.id)}>
                  { profile.name }
                </button>
              )
            })
          }
        </div>
        <div className='profile-view'>
          <img src={activeProfile.image} alt='profile' />
          <p>{activeProfile.name}</p>
        </div>
      </BodyContainer>
    </>
  )
}