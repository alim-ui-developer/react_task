import React, { useState, useEffect } from 'react';

const Box = (props) => {
  // 이렇게 해서 안되는데 왜 안되는질 모르겠다ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ
  // 원인 찾았음!!!!! props.result !== 'tie'..ㅠㅠ 대소문자 구분 때문!!!🤦‍♀️ >> 전체 string값 대소문자 하나로 통일해줌
  const [boxResult, setBoxResult] = useState(null);

  useEffect(() => {
    if(props.title === "computer") {
      switch (props.result) {
        case "win":
          setBoxResult("lose");
          break;
        case "lose":
          setBoxResult("win");
          break;
        default:
          setBoxResult(props.result);
      }
    }
    else if(props.title === "you") {
      setBoxResult(props.result);
    }
  },[props.title, props.result])

  return (
    <div className={`boxWrap ${boxResult}`}>
      <div className="box">
        <div className="itemImageBox">
          <p className="itemimage">
            <img
              src={props.item ? props.item.image : "https://img.freepik.com/premium-photo/question-mark-sign-3d-question-mark_118019-6308.jpg"}
              alt={props.item && props.item.name}
            />
          </p>
        </div>
        <p className="gamerImage">
          <img src={props.image} alt={props.title} />
          <h2>{boxResult}</h2>
        </p>
      </div>
      <h1 className="gamerText">- {props.title} -</h1>
    </div>
  )
}


export default Box;