import '@/styles/globals.css'
import '../public/styles.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {

  useEffect(() => {
    // Check if user prefers dark mode
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    console.log('isDarkMode', isDarkMode);
    // Add dark mode class to body if user prefers dark mode
    if (isDarkMode) {
      console.log('dark mode');
      document.body.classList.add('dark-mode');
    }
  }, []);

  
  return <Component {...pageProps} />
}
