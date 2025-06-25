import React from 'react';

function SkillBar({ name, level }) {
  return (
    <div style={{ marginBottom: '10px' }}>
      {name}
      <div style={{ background: '#eee', height: '20px', borderRadius: '5px', overflow: 'hidden' }}>
        <div style={{ width: `${level}%`, background: '#4caf50', height: '100%' }}></div>
      </div>
    </div>
  );
}

function Skills() {
  const skills = [
    { name: 'HTML', level: 80 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 60 },
    { name: 'React', level: 95 }
  ];

  return (
    <section id="skills" style={{ padding: '30px' }}>
      <h2>Навыки</h2>
      {skills.map((skill, index) => (
        <SkillBar key={index} name={skill.name} level={skill.level} />
      ))}
    </section>
  );
}

export default Skills;
