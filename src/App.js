import './styles/main.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

/**
 * Composite tempalte of App structure. Header, Body, and Footer to build the web app.
 * All logic is handled in seperate components.
 */

function App() {
  return (
    <div className='bg-gradient-to-r from-green-700 via-green-200 to-green-700 text-center'>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
