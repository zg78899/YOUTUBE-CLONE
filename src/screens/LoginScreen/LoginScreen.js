import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./loginScreen.scss";
import {login} from '../../redux/actions/auth.action';
import { useHistory } from 'react-router-dom';

function LoginScreen() {
  const dispatch = useDispatch();
  const accessToken = useSelector(state => state.auth.accessToken);

  const handleLogin =()=>{
    dispatch(login())
  };
const history = useHistory();

  useEffect(()=>{
if(accessToken && accessToken){
  history.push('/');
}
  },[accessToken,history]);


  return (
    <div className="login">
      <div className="login__container">
        <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="noImage"/>
        <button onClick={handleLogin}>Login with Google</button>
        <p>A Youtube clone project made using of Youtube-API</p>
      </div>
      
    </div>
  ) 

}
export default LoginScreen;