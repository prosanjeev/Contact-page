import './App.css';
import NavBar from './components/navigation/NavBar';
import ContactHeader from './components/ContactHeader/ContactHeader'
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  return (
    <>
    <NavBar/>
    <div className='body-container'>
    <ContactHeader/>
    <ContactForm/>
    </div>
    </>
  );
}

export default App;
