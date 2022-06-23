import React from 'react'

const Header = ({handleToggleDarkMode}) => {
    return (
        <div className="header">
             {/*Not uygulamamızın başlığı*/}
        <h1><span style={{color:"#308d46"}}>React</span> Notlarım</h1>
         {/*Arka plan renginin değişmesi için gerekli buton*/}
        <button onClick={()=>handleToggleDarkMode((previousDarkMode)=>!previousDarkMode)} className="save">Karanlık Mod</button>
        </div>
    )
}

export default Header