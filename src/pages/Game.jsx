import { useParams } from 'react-router-dom'
import Easy from '../components/Easy'
import Medium from '../components/Medium'
import Hard from '../components/Hard'

function Game() {
    const {vibe} = useParams()

    const vibeComponents = {
        chill: <Easy />,
        flex: <Medium />,
        hard: <Hard />
      };

      return vibeComponents[vibe]
  
}

export default Game