// src/components/SkillsList.js

import React, { useState } from 'react';
import skillsData from '../skillsData';
import AddSkill from './AddSkill';

const SkillsList = ({ onSkillSelect }) => {
  const [skills, setSkills] = useState(skillsData);

  const handleAddSkill = (newSkill) => {
    const newId = Math.max(...skills.map((skill) => skill.id)) + 1;
    setSkills([
      ...skills,
      {
        id: newId,
        ...newSkill,
      },
    ]);
  };

  return (
    <div>
      <AddSkill onAddSkill={handleAddSkill} />
      <ul>
        {skills.map((skill) => (
          <li key={skill.id} onClick={() => onSkillSelect(skill)}>
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;


