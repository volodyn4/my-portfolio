import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
return (
<div>
<Header />
<main>
<section id="about"><About /></section>
<section id="skills"><Skills /></section>
<section id="experience"><Experience /></section>
<section id="contact"><Contact /></section>
</main>
<Footer />
</div>
);
}

export default App;