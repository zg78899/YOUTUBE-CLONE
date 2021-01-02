
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './screens/homeScreen/HomeScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import './_app.scss';
import {BrowserRouter  as Router,Redirect,Route,Switch} from 'react-router-dom';


const Layout = ({children})=>{
  const [sidebar,setSideBar] = useState(false);
  //toggle hamburgerMenu
  const handleToggleSidebar = ()=>setSideBar(value=>!value);


  return(
    <>
    <Header handleToggleSidebar={handleToggleSidebar}/>
    <div className="app_container border border-info">
      <Sidebar sidebar={sidebar}
      handleToggleSidebar={handleToggleSidebar}/>
      <Container className="app__main border border-warning">
        {/* <HomeScreen/> */}
        {children}
      </Container>
    </div>
    </>    
  )
};

function App() {
  
  return (
   <Router>
     <Switch>
     <Route path="/auth">
      <LoginScreen/>
     </Route>
     <Route path="/search">
      <h1>Search me</h1>
     </Route>
     <Route exact path="/">
       <Layout>
         <HomeScreen/>
       </Layout>
     </Route>
     <Route>
       <Redirect to="/"/>
     </Route>
     </Switch> 
   </Router>
   
  );
}

export default App;
