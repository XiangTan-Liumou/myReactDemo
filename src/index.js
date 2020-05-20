import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const handleLeftClick = () => {
    setAll(allClicks.concat("L"))
    setLeft(left + 1)
  }
  const handleRightClick = () => {
    setAll(allClicks.concat("R"))
    setRight(right +1)

    console.log(allClicks,'---allClicks');
  }

  return (
    <div>
      <div>
        {left}
        <Button onClick={handleLeftClick} text="left1"></Button>
        <Button onClick={handleRightClick} text='right1'></Button>
        {right}
        <p>{allClicks.join("")}</p>
        <History allClicks={allClicks}></History>
    </div>
    </div>
  )
}

const History = (props) => {
  if(props.allClicks.length === 0){
    return(
      <div>
        the app is used by pressing the button
      </div>
    )
  }

  return(
    <div>
      button press history: {props.allClicks.join('')}
    </div>
  )
}

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))
