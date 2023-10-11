import logo from './logo.svg';
import './App.css';

import React from 'react';

const Header = ({ title }) => {
  return (
    <div className='header'>
      <Logo />
      <HeadMenu></HeadMenu>
      <SubTitle title={title}></SubTitle>
    </div>);
}

const Logo = () => {
  return (
    <h1 href='#' className='lo'>
      <a href='#'>
        <img src='' alt="메인로고" />
      </a>
    </h1>
  )
}

const HeadMenu = () => {
  return (
    <ul className='headMenu'>
      <li className='login'><a href='Login'>로그인</a></li>
      <li className='smart'><a href='#'>스마트 견적</a></li>
      <li className='myPage'><a href='#'>마이 페이지</a></li>
      <li className='helpCenter'><a href='#'>HELP<br></br>CENTER</a></li>
    </ul>
  )
}

const SubTitle = ({ title }) => {
  return (
    <h2 className='subTitle'>{title}</h2>
  )
}

const Login = () => {
  return (
    <div className='login'></div>
  )
}

const Body = () => {
  return (
    <div className='body'>
      <Budget></Budget>
      <Etc></Etc>
      <Usage></Usage>
      <PageMove></PageMove>
    </div>
  )
}

const Budget = () => {
  return (
    <form className='budget'>
      <fieldset>
        <legend>예산을 입력해주세요</legend>
        <input type='number' min={0} name='name' placeholder='단위: 만' />
      </fieldset>
    </form>
  )
}


const Etc = () => {
  return (
    <form className='etc'>
      <fieldset>
        <legend>그 외 필요한 구성요소를 선택해주세요</legend>
        <div>
          <label>
            <input type='checkbox' id='multiDisplay' name='multiDisplay' value='multiDisplay' />다중 디스플레이
          </label>
        </div>
        <div>
          <label>
            <input type='checkbox' id='changeUtile' name='changeUtile' value='changeUtile' />노트북 및 기타 기기 전환연결(PS5 등)
          </label>
        </div>
        <div>
          <label>
            <input type='checkbox' id='projector' name='projector' vaule='projector' />프로젝터 연결
          </label>
        </div>
        <div>
          <label>
            <input type='checkbox' id='remote' name='remote' value='remote' />원격제어
          </label>
        </div>
      </fieldset>
    </form >
  );
}

const Usage = () => {
  const [usageList, setUsageList] = React.useState('');
  const [value, setValue] = React.useState('');

  function handleInputSubmit(event) {
    event.preventDefault();
    setValue(event.target.value);
    console.log(event.target.value);
  }

  function handleUsageSubmit(event) {
    event.preventDefault();
    console.log('클릭됨');
    setUsageList(value);
    console.log(event);
    console.log(event.target.value);
  }

  return (
    <form className='usage' action=''>
      <fieldset>
        <legend>용도를 입력해주세요.</legend>
        <div>{usageList}</div>
        <input type="text" name="usage" placeholder='ex)photoshop' />
        <button type='submit' onSubmit={handleUsageSubmit}>추가</button>
      </fieldset>
    </form >
  );
}

const PageMove = () => {
  return (
    <div>
      <div className='prev'>
        <a href='#'>prev</a>
      </div>
      <div className='next'>
        <a href='#'>next</a>
      </div>
    </div>
  )
}

const Modal = () => {
  return (
    <div className='loginPage'>
      <div className='modal-content'>
        <div className=''></div>
        <div className='modal-header'>
          <h3>Modal Header</h3>
        </div>
        <div className='modal-body'>
          <p>Modal body text goes here.</p>
        </div>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Header title='현재 페이지'></Header>
      <Body></Body>
      <Modal></Modal>
    </div>
  );
}

export default App;
