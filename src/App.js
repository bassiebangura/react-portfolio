import './App.css';
import React, {useState} from 'react';
import Header from './components/header';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Portfolio from './components/portfolio';
import Resume from './components/resume';


function App() {
  //about me is the default page
  const navItems = [
    { id: 1, title: 'About Me' },
    { id: 2, title: 'Portfolio' },
    { id: 3, title: 'Contact'},
    { id: 4, title: 'Resume'},
  ];
  const [currentTitle, setCurrentTitle] = useState(navItems[0].title);
  return (
    <div className='flex flex-col h-full bg-gray-200'>
      <Header navItems={navItems} currentTitle={currentTitle} setCurrentTitle={setCurrentTitle} />
      <main>
        {currentTitle === 'About Me' && <About />}
        {currentTitle === 'Contact' && <Contact />}
        {currentTitle === 'Resume' && <Resume />}
        {currentTitle === 'Portfolio' && <Portfolio />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
