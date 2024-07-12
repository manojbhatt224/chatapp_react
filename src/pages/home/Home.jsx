import React from 'react'
import '../home/Home.css'
import ProfileSide from '../../components/profileSide/ProfileSide'
import PostSide from '../../components/PostSide/PostSide'
import RightSide from '../../components/RightSide/RightSide'
const Home = () => {
  return (
    <div className="Home">
        <ProfileSide></ProfileSide>
        <PostSide/>
        <RightSide/>
    </div>
  )
}

export default Home