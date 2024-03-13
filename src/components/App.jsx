import Home from './Home'

function App() {
  return (
      <div className="wrapper">
        <main id="main">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
          <Home />
        </main>
        <footer>
            <p className="copyright">&copy; 2024 Handcrafted by Josh Esteban</p>
        </footer>
      </div>
  );
}

export default App
