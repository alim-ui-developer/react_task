import React from 'react';
import { Link } from "react-router-dom";
import '../styles/PageIndex.css';

const Index = () => {
  return (
    <div className="pageListWrap">
      <h1 class="title">React Study Task List</h1>
      <ul class="list">
        <li>
          <Link to="Task1_2/Task1_2">
            <em>첫번째 프로젝트: 가위바위보 게임</em>
            <span>📅 2024/03/19~20</span>
          </Link>
        </li>
      </ul>

    </div>
  )
}

export default Index
