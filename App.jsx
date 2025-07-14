import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'


function App() {
  const [links, setLinks] = useState([]);

  

  useEffect(() => {
    

    const allLinks = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      try {
        const item = JSON.parse(localStorage.getItem(key));
        if (item && item.originalUrl) { // check for your expected structure
          allLinks.push({ id: key, ...item });
        }
      } catch {
        
      }
    }
    setLinks(allLinks);
  }, []);

  if (links.length === 0) {
    return <p>No shortened URLs found yet. Create one to see it here!</p>;
  }

  return (
    <div>
      <h2>Your Shortened URLs</h2>
      <ul>
        {links.map(link => (
          <li key={link.id}>
            <a
              href={`?r=${link.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {window.location.origin}/?r={link.id}
            </a>
            <br />
            Clicks: {link.clicks || 0} | Created: {new Date(link.createdAt).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

