import { useState, useEffect } from 'react';
import '../../styles/Task1_2_Self.css';

// 사용자가 선택하는 버튼의 값
const BUTTON_ARR = [
  {
    name:'scissors',
    image: 'http://www.pngmart.com/files/1/Scissors-PNG-Pic.png'
  },{
    name:'rock',
    image: 'https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png'
  },
  {
    name:'paper',
    image: 'https://www.collinsdictionary.com/images/full/paper_111691001.jpg'
  }
]

// TODO: 컴포넌트 분리 후 props로 속성 나누기
// TODO: ARR에 이름 넣어주기

function Self() {
  ///// 🤔❓ 근데 이렇게 useState를 주렁주렁 써도 될지.....흠
  const [ yourNum, setYourNum ] = useState(null);
  const [ computersNum, setComputersNum ] = useState(null);
  const [ yourResult, setYourResult ] = useState('');
  const [ computersResult, setComputersResult ] = useState('');
  
  // you 값 버튼 선택
  const yourChoice = (choiceNum) => {
    // 사용자가 선택한 값
    setYourNum(choiceNum);

    // 사용자가 값을 선택함과 동시에 컴퓨터의 값 랜덤 출력
    setComputersNum(Math.floor(Math.random() * BUTTON_ARR.length));
  }

  // 클릭 이벤트로 yourNum과 computersNum의 값이 변경될 때 마다 게임 결과 출력
  useEffect(() => {
    if(yourNum === computersNum){
      // 비기는 경우
      setYourResult('tie');
      setComputersResult('tie');
    }
    else if(
      // you(사용자)가 이기는 경우
      (yourNum === 0 && computersNum === 2) || 
      (yourNum === 1 && computersNum === 0) || 
      (yourNum === 2 && computersNum === 1)
    ){
      // 결과 출력
      setYourResult('win');
      setComputersResult('lose');
    }
    else if(
      // you(사용자)가 지는경우
      (yourNum === 0 && computersNum === 1) || 
      (yourNum === 1 && computersNum === 2) || 
      (yourNum === 2 && computersNum === 0)
    ){
      setYourResult('lose');
      setComputersResult('win');
    }
  }, [computersNum, yourNum]);
  
  return (
    <section className="wrapper_self">
      <h1>가위 바위 보!</h1>
      <p className="memo">💡 강의 듣기 전 미리 만들어 본 코드입니다 💡</p>
      {/* you와 computer의 선택을 보여주는 박스 */}
      <div className="resultBox">
        <div className={`yourBox ${yourResult}`}>
          <h2>you</h2>
          {/* 최초 로딩시 이미지와 결과값이 안보이게 예외처리 */}
          {yourNum !== null && 
            <>
              <img src={BUTTON_ARR[yourNum].image} alt={BUTTON_ARR[yourNum].name} />
              <p>{yourResult}</p>
            </>
          }
        </div>
        <div className={`computersBox ${computersResult}`}>
          <h2>computer</h2>
          {/* 최초 로딩시 이미지와 결과값이 안보이게 예외처리 */}
          {computersNum !== null &&
            <>
              <img src={BUTTON_ARR[computersNum].image} alt={BUTTON_ARR[computersNum].name} />
              <p>{computersResult}</p>
            </>
          }
        </div>
      </div>
      {/* 가위바위보 선택하는 버튼 */}
      <div className="buttonBox">
        <button className="btn_scissors" onClick={() => yourChoice(0)}>가위</button>
        <button className="btn_rock" onClick={() => yourChoice(1)}>바위</button>
        <button className="btn_paper" onClick={() => yourChoice(2)}>보</button>
      </div>
      {/* 결과(you 기준) / 최초 로딩시 안보이게 예외처리 */}
      {yourNum !== undefined &&
        <div className="scoreBox">{yourResult}</div>
      }
    </section>
  );
}

export default Self;
