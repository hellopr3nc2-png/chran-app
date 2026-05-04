import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
5.  **Add Tailwind:** Create `src/index.css` and add:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
6.  **Upload to GitHub:** Push this folder to a new GitHub repository.
