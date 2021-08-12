import './App.css';
import {PopupLogin} from './components/PopupLogin';
import {Header} from './components/Header';
import { PopupRegistr } from './components/PopupRegistr';
import { Main } from './components/Main';
import {Footer} from './components/Footer';

function App() {


  return (
    <div className="App">
    
        <Header/>
        <PopupLogin/>
        <PopupRegistr/>
        <Main/>
        <Footer/>
     
    </div>
  );
}

export default App;
