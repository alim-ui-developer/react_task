import React, { useState, useEffect } from 'react'

const Box = (props) => {
  // 이렇게 해서 안되는데 왜 안되는질 모르겠다ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ
  const [boxResult, setBoxResult] = useState(null);

  useEffect(() => {
    if(props.title === "computer" && props.reslut !== "tie" && props.result === "win"){
      setBoxResult("lose");
    }else{
      setBoxResult(props.result);
    }
  },[])

  return (
    <div className={`box ${boxResult}`}>
      <h1>{props.title}</h1>
      <img
        className="item-img"
        src={props.item && props.item.image}
        alt={props.item && props.item.name}
      />
      <h2>{boxResult}</h2>
    </div>
  )
}


export default Box;