import { useState } from 'react';
import './App.css';
import Box from './component/Box';

const choice = {
	rock:{
		name: 'Rock',
		image: 'https://image.auction.co.kr/itemimage/28/65/8e/28658ea5e6.jpg',
	},
	scissors:{
    name: 'scissors',
		image: 'https://i.namu.wiki/i/PGp3JnsDa9eaMKBC1OwnSU4M0vLE0d_40ehrl0aUYum98U6tg0Nnl8W6_c0bQk2Bp9mQCMTe7eQt32pszxoQGw.webp',
  },
	paper:{
    name: 'paper',
		image: 'https://www.collinsdictionary.com/images/full/paper_111691001.jpg',
  }
}


function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체에 key값만 뽑아서 array로 만들어주는 함수
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    // 판단하는 함수
    setResult(judgement(choice[userChoice], computerChoice));
  }
  
  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);

    if(user.name === computer.name) {
      return "tie"
    }
    else if (user.name === "Rock") 
      return computer.name === "Scissors" ? "win" : "lose"
    else if (user.name === "Scissors") 
      return computer.name === "Paper" ? "win" : "lose"
    else if (user.name === "Paper") 
      return computer.name === "Scissors" ? "win" : "lose"
  }


  return (
    <div class="wrap">
      <p className="memo">💡 이 부분이 숙제입니다 💡</p>
      {/* you와 computer의 선택을 보여주는 박스 */}
      <div className="main">
        <Box title="you" item={userSelect} result={result} />
        <Box title="computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={() => play('scissors')}>가위</button>
        <button onClick={() => play('rock')}>바위</button>
        <button onClick={() => play('paper')}>보</button>
      </div>
    </div>
  );
}

export default App;
