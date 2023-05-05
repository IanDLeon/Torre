// src/components/SkillDetails.js

import React from 'react';

const SkillDetails = ({ skill }) => {
  if (!skill) {
    return <p>Select a skill to view details</p>;
  }

  return (
    <div>
      <h3>{skill.name}</h3>
      <p>Description: {skill.description}</p>
      <p>Experience Level: {skill.experienceLevel}</p>
    </div>
  );
};

export default SkillDetails;
