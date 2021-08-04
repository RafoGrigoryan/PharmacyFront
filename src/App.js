import logo from "./img/logo-pharmacy.png";
 import login from "./img/login.png";
 import registr from "./img/registr.png";
import './App.css';

function App() {
  return (
    <div className="App">

      <div className="head">
        <div className = "log">
          <img className="logo" src={logo} />
          <p>ԴԵՂԵՐԻ ՏԵՂԵԿԱՏՈՒ<br></br>
          drugs.am</p>
        </div>
        
           <nav className="menu">
            <ul className="menu_ul">
            <li>Գլխավոր</li>
            <li>Մեր մասին</li>
            <li>Դեղատներ</li>
            <li>Կապ</li>
          </ul>
          </nav>
         
        <div className="use">
            <div className="login">
              <img className="log-in" src={login} />
              <p>մուտք</p>
            </div>
            <div className="registration">
              <img className="registr" src={registr} />
              <p>գրանցում</p>
            </div>
        </div>
     </div>
{/* popup login */}
     <div className="popup-login">
       <div className="parent-form">
         <div className="close">
           <div>X</div>
          </div>
         <div className="form">
            <div className="login">
              <input className="login-inp" placeholder="login"/>
            </div>
            <div className="possword">
              <input className="password-inp" placeholder="password" />
            </div>
            <div className= "login-btn">
              <button>login</button>
            </div>
         </div>
        
       </div>
     </div>

    </div>
  );
}

export default App;
