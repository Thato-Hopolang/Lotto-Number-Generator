import { Header } from "../Header"
import { SubHeader } from "../SubHeader"
import { Button } from "../Button"

const LottoHome = () => {
  return (
    <div>
      <Header />
      <SubHeader text={'What do you want to play?'}/>
      <Button name={'Quick Pick'}/>
      <Button name={'Most Common'}/>
      <Button name={'Least Common'}/>
    </div>
  )
}

export default LottoHome