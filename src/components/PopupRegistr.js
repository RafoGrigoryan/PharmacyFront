import { useState } from "react"

export function PopupRegistr(){
   const [value,setvalue]= useState("");


    return(
        <div className="popup-registr">
            <div className="popup">
                <div className = "close">
                    <button onClick={()=>
                    document.querySelector('.popup-registr').style.display='none'
                    }>X</button>
                </div>
                <div className="title"> 
                <p>registration</p>
                </div>
                <div className="inputs">

                    <div>
                        <p>name</p>
                        <input type="text" placeholder="name" onClick={()=>{
                        document.querySelector('.popup-registr .popup .inputs div .surname').style.display="none"
                        document.querySelector('.popup-registr .popup .inputs div .email').style.display="none"
                        document.querySelector('.popup-registr .popup .inputs div .login').style.display="none"
                        document.querySelector('.popup-registr .popup .inputs div .repeat-password').style.display="none"
                        document.querySelector('.popup-registr .popup .inputs div .password').style.display='none'    
                        document.querySelector('.popup-registr .popup .inputs div .name').style.display='inline-block'
                        }}/>
                        <pre className="name">name must not exceed 20 characters</pre>
                        </div>

                    <div>
                        <p>surname</p>
                        <input type="text" placeholder="surname" onClick={()=>{
                         document.querySelector('.popup-registr .popup .inputs div .name').style.display="none"
                         document.querySelector('.popup-registr .popup .inputs div .email').style.display="none"
                         document.querySelector('.popup-registr .popup .inputs div .login').style.display="none"
                         document.querySelector('.popup-registr .popup .inputs div .repeat-password').style.display="none"
                         document.querySelector('.popup-registr .popup .inputs div .password').style.display='none'   
                        document.querySelector('.popup-registr .popup .inputs div .surname').style.display='inline-block'
                        }}/>
                        <pre className="surname">surname must not exceed 20 characters</pre>
                        </div>

                    <div>
                        <p>emali</p>
                        <input type="email" placeholder="email" onClick={()=>{
                         document.querySelector('.popup-registr .popup .inputs div .name').style.display="none"
                         document.querySelector('.popup-registr .popup .inputs div .surname').style.display="none"
                         document.querySelector('.popup-registr .popup .inputs div .login').style.display="none"
                         document.querySelector('.popup-registr .popup .inputs div .repeat-password').style.display="none"
                         document.querySelector('.popup-registr .popup .inputs div .password').style.display='none'
                        document.querySelector('.popup-registr .popup .inputs div .email').style.display='inline-block'
                        }}/>
                        <pre className="email">mail must not exceed 30 characters</pre>
                        </div>

                    <div>
                        <p>login</p>
                        <input type="text" placeholder="login" onClick={()=>{
                       document.querySelector('.popup-registr .popup .inputs div .name').style.display="none"
                       document.querySelector('.popup-registr .popup .inputs div .surname').style.display="none"
                       document.querySelector('.popup-registr .popup .inputs div .email').style.display="none"
                       document.querySelector('.popup-registr .popup .inputs div .repeat-password').style.display="none"
                       document.querySelector('.popup-registr .popup .inputs div .password').style.display='none'
                        document.querySelector('.popup-registr .popup .inputs div .login').style.display='inline-block'
                        }}/>
                         <pre className="login">login must not exceed 30 characters</pre>
                        </div>

                    <div>
                        
                        <p>password</p>
                        <input type="password" value={value} placeholder="password" onChange={(event)=>{
                            setvalue=event.target.value;
                        }} onClick={()=>{
                        document.querySelector('.popup-registr .popup .inputs div .name').style.display="none"
                        document.querySelector('.popup-registr .popup .inputs div .surname').style.display="none"
                        document.querySelector('.popup-registr .popup .inputs div .email').style.display="none"
                        document.querySelector('.popup-registr .popup .inputs div .login').style.display="none"
                        document.querySelector('.popup-registr .popup .inputs div .repeat-password').style.display="none"
                        document.querySelector('.popup-registr .popup .inputs div .password').style.display='inline-block'
                        }}/>
                        <pre className="password">mail must not exceed 30 characters</pre>
                        </div>

                    <div>
                        <p>repeat password</p>
                        <input type="password" placeholder="repeat password" onClick={()=>{
                       document.querySelector('.popup-registr .popup .inputs div .name').style.display="none"
                       document.querySelector('.popup-registr .popup .inputs div .surname').style.display="none"
                       document.querySelector('.popup-registr .popup .inputs div .email').style.display="none"
                       document.querySelector('.popup-registr .popup .inputs div .login').style.display="none"
                       document.querySelector('.popup-registr .popup .inputs div .password').style.display='none'
                        document.querySelector('.popup-registr .popup .inputs div .repeat-password').style.display='inline-block'
                        }}/>
                        <pre className="repeat-password">invalid password</pre>
                        </div>

                       
                    <div><button>send</button></div>
                </div>
                </div> 
        </div>
    )
}