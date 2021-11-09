import React, { useEffect, useState } from 'react';
import './App.scss';
// hook : built in functionality that allows us to hook into "react" futures.
//useEffect allows us to hook into the component lifecycle like  component loading, loaded and unloaded.
import Profile from './components/Profile/Profile';

const App = () => {
  // const [isTrue, setIsTrue] = useState(false); 

  // This useEffect will only run once ( when the components first mounts/loads)
  // useEffect(() => {
  //   console.log("loads only once");
  // }, []);

  // will run when the page loads and whenever 'isTrue' changes
  // useEffect(() => {
  //   console.log("loads whenever isTrue changes");
  // }, [isTrue]);

  const [ user, setUser] = useState(null);
  const [changeUser, setChangeUser] = useState(true);

  useEffect(() =>{
    fetch('https://randomuser.me/api/')
      .then( res=> res.json())
      .then(data => setUser(data))
      .catch(err => console.log(err))
  }, [changeUser]);

  return (
    <>
    {/* <button onClick={() => setIsTrue(!isTrue)}>Click Me</button> */}
    <div className="app">
      <button onClick={() => setChangeUser(!changeUser)}>Get Profile</button>
      {/* {user && <h1>{user.results[0].name.first}</h1>}     */}
      {user && <Profile data={user.results[0]} />}
    </div>
    </>
  )
}

export default App

