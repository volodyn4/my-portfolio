import React, { useState, useEffect } from 'react';

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Имитация загрузки данных
    setSkills([
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'React', level: 75 }
    ]);
  }, []);

  return (
    <section id="skills">
      <h2>Навыки</h2>
      {skills.map((s, i) => (
        <div key={i}>
          {s.name}
          <div style={{ background: '#eee' }}>
            <div style={{ width: `${s.level}%`, background: '#4caf50' }}>{' '}</div>
          </div>
        </div>
      ))}
    </section>
  );
}