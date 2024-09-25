import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainBody from './components/MainBody';
import Footer from './components/Footer';

function App() {
  return (
    <div className="wrapper">
     <Header/>
     <MainBody/>
     <Footer/>
    </div>
  );
}

export default App;
