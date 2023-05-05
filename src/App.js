// src/App.js

import React, { useState } from 'react';
import UserSelection from './components/UserSelection';
import SkillsList from './components/SkillsList';
import SkillDetails from './components/SkillDetails';
import './App.css';

function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <div className="App">
      <h1>User Skills</h1>
      <UserSelection onUserSelect={setSelectedUser} />
      {selectedUser && (
        <>
          <h2>Skills for {selectedUser.name}</h2>
          <SkillsList onSkillSelect={setSelectedSkill} />
          <SkillDetails skill={selectedSkill} />
        </>
      )}
    </div>
  );
}

export default App;
