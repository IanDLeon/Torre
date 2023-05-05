// src/components/AddSkill.js

import React, { useState } from 'react';
import './Addskill.css';

const AddSkill = ({ onAddSkill }) => {
  const [skillName, setSkillName] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddSkill({ name: skillName, experienceLevel, description });
    setSkillName('');
    setExperienceLevel('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Skill"
        value={skillName}
        onChange={(e) => setSkillName(e.target.value)}
      />
      <select
        value={experienceLevel}
        onChange={(e) => setExperienceLevel(e.target.value)}
      >
        <option value="">Select Experience Level</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Skill</button>
    </form>
  );
};

export default AddSkill;
