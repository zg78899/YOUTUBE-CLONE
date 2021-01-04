import firebase from 'firebase/app';
import auth from '../../firebase';
import {LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_PROFILE,
  LOG_OUT} from '../actionType';

export const login = ()=> async dispatch =>{

  try{
  dispatch({
      type:LOGIN_REQUEST,
    })
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl');

    const res = await auth.signInWithPopup(provider);
    // console.log(res );

    const accessToken = res.credential.accessToken;

    const profile = {
      name:res.additionalUserInfo.profile.name,
      photoURL:res.additionalUserInfo.profile.picture,
    }

    sessionStorage.setItem('YOUTUBE-ACCESS-TOKEN',accessToken);
    sessionStorage.setItem('YOUTUBE-ACCESS-USER',JSON.stringify(profile));


    dispatch({
      type:LOGIN_SUCCESS,
      payload:accessToken
    });

    dispatch({
      type:LOAD_PROFILE,
      payload:profile
    });

  }catch(e){
    // console.log(e.message)
    dispatch({
      type:LOGIN_FAIL,
      payload:e.message
    });

  }
}

export const log_out =()=> async dispatch =>{
  await auth.signOut();
  dispatch({
    type:LOG_OUT
  });

  sessionStorage.removeItem('YOUTUBE-ACCESS-TOKEN');
  sessionStorage.removeItem('YOUTUBE-ACCESS-USER');
}