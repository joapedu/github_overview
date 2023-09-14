import React, {useEffect} from 'react';
import './App.css';
import {useProfile} from "./hooks/useProfile";
import {useRepos} from "./hooks/useRepos";
import CardUser from "./components/card";
import HeaderProfile from "./components/header";

function App() {
    const { profiles, GetProfile } = useProfile();
    const { repos, GetRepos } = useRepos();

    useEffect(() => {
        GetProfile();
    }, [GetProfile])

    useEffect(() => {
        GetRepos();
    }, [GetRepos])

    return (
    <div className="App">
        <img src="./assets/overview.png" alt={'logo'}></img>
        <HeaderProfile profiles={profiles}/>
        <div className="container-lg" style={{ width: '30%', marginTop: '1%'}}>
          {repos.map((repos) => (
              <CardUser
                 key={repos.name}
                repos={repos}/>
          ))}
        </div>
    </div>
  );
}

export default App;
