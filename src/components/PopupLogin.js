export function PopupLogin(){

    return(
        <div className="popup-login">
        <div className="parent-form">
          <div className="close">
            <div><button onClick={()=>
                  document.querySelector('.popup-login').style.display='none'
            }>X</button></div>
           </div>
          <div className="form">
             <div className="login">
               <input className="login-inp" maxLength="20" placeholder="login"/>
             </div>
             <div className="possword">
               <input className="password-inp" maxLength="30" minLength="8" placeholder="password" />
             </div>
             <div className= "login-btn">
               <button>login</button>
             </div>
          </div>
         
        </div>
      </div>
    )
}
