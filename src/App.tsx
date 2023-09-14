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
        <img src="https://uploaddeimagens.com.br/images/004/607/471/full/overview.png?1694712977" alt="overview" style={{width: '20%', height: '20%'}}></img>
        <HeaderProfile profiles={profiles}/>
        <div className="container-lg" style={{ width: '40%'}}>
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
