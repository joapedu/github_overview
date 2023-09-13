import React, {useEffect} from 'react';
import './App.css';
import {useProfile} from "./hooks/useProfile";
import {useRepos} from "./hooks/useRepos";
import CardUser from "./components/card";


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
        <div className="container-lg">
          {repos.map((repos) => (
              <CardUser
                repos={repos}/>
          ))}
        </div>
    </div>
  );
}

export default App;
