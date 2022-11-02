import './App.css';
import React, {useState} from 'react';
import Header from './components/header';

function App() {
  //about me is the default page
  const navItems = [
    { id: 1, title: 'About Me', content: 'About page content' },
    { id: 2, title: 'Portfolio', content: 'Contact page content' },
    { id: 3, title: 'Contact', content: 'Contact page content' },
    { id: 4, title: 'Resume', content: 'Resume page content' },
  ];
  const [currentTitle, setCurrentTitle] = useState(navItems[0].title);
  return (
    <div>
       <Header navItems={navItems} currentTitle={currentTitle} setCurrentTitle={setCurrentTitle}/>
    </div>
  );
}

export default App;
