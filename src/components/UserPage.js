import React from 'react';
import SkillsList from './SkillsList';


const user = {
  name: 'John',
  skills: [
    {
      id: 1,
      name: 'React',
      description: 'A JavaScript library for building user interfaces',
      experience: '3 years',
    },
    {
      id: 2,
      name: 'Node.js',
      description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine',
      experience: '2 years',
    },
    {
      id: 3,
      name: 'Python',
      description: 'A high-level programming language for general-purpose programming',
      experience: '4 years',
    },
  ],
};

const UserPage = () => {
  return (
    <div>
      <h1>{user.name}'s Page</h1>
      <SkillsList user={user} />
    </div>
  );
};

export default UserPage;
