import React, {useState} from 'react';
import Header from './components/header';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Portfolio from './components/portfolio';
import Resume from './components/resume';


function App() {
  const navItems = [
    { id: 1, title: 'About Me' },
    { id: 2, title: 'Portfolio' },
    { id: 3, title: 'Contact'},
    { id: 4, title: 'Resume'},
  ];
  const [currentTitle, setCurrentTitle] = useState(navItems[0].title);
  return (
    <div className='flex flex-col min-h-screen bg-gray-200'>
      <Header navItems={navItems} currentTitle={currentTitle} setCurrentTitle={setCurrentTitle} />
      <main className='py-8 px-2'>
        {currentTitle === 'About Me' && <About />}
        {currentTitle === 'Contact' && <Contact />}
        {currentTitle === 'Resume' && <Resume />}
        {currentTitle === 'Portfolio' && <Portfolio />}
      </main>
      <div className='mt-auto'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
