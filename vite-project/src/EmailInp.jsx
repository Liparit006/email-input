import React,{useState,useEffect} from "react";

function EmailInp() {
    const [emailInp, setEmailInp] = useState("")
    const regex = new RegExp('[a-z0-9]+@[a-z]+[.]+[a-z]{2,3}')
    
    return(
        <div>
            <form action="">
                {regex.test(emailInp) == false ? <input type="text" style={{border:"2.5px solid red"}} name="email" value={emailInp} onChange = {(e)=>{setEmailInp(e.target.value)}} />
                 : <input style={{border: "2.5px solid #00ff04"}} type="text" name="email" value={emailInp} onChange = {(e)=>{setEmailInp(e.target.value)}} />}
            </form>
        </div>
    )
}

export default EmailInp