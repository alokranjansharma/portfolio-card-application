import { useState, useEffect, use } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CardLayout from './components/card-layout/CardLayout'
import cards from './data/data'
import './App.css'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [theme, setTheme] = useState('light');

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, cards.length - 1));
  };

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === cards.length - 1;

  const themeSwitcher = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(theme);
}, [theme]);

  return (
    <>
      <section className="portfolio-cards-block">
      <CardLayout
        {...cards[currentIndex]}
        onPrev={prevSlide}
        onNext={nextSlide}
        currentIndex={currentIndex}
        total={cards.length}
        isFirst={isFirst}
        isLast={isLast}
        theme={theme}
        themeSwitcher={themeSwitcher}
      />
    </section>
    </>
  )
}

export default App
