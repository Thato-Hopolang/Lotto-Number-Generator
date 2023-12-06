// import React from 'react'
import { Header } from "./Header"
import { SubHeader } from "./SubHeader"
import { Button } from "./Button"

const Home = () => {
  return (
    <div>
      <Header />
      <SubHeader text={'What do you want to play?'}/>
      <Button name={'Daily Lotto'}/>
      <Button name={'Lotto'}/>
      <Button name={'Powerball'}/>
    </div>
  )
}

export default Home
