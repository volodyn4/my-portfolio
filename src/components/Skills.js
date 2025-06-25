import React, { useState, useEffect } from 'react';

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // имитация загрузки данных
    setSkills([
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'React', level: 75 }
    ]);
  }, []);

  return (
    <section id="skills" style={{ padding: '30px' }}>
      <h2>Навыки</h2>
      {skills.map((s, i) => (
        <div key={i} style={{ marginBottom: '10px' }}>
          {s.name}
          <div style={{ background: '#eee', height: '20px', borderRadius: '5px', overflow: 'hidden' }}>
            <div style={{ width: `${s.level}%`, background: '#4caf50', height: '100%' }} />
          </div>
        </div>
      ))}
    </section>
  );
}