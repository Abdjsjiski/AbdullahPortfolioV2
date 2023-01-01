import React from 'react'
import ReactDOM from 'react-dom'

const Modal_Styles = {
    position: "fixed",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: "black",
    padding: '50px',
    zIndex: 1000
}
const OverLay_Styles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000,
}

const button_styles ={
    marginRight: "5px",
    border: "1px solid"
}
export default function Modal({open, children, onClose}) {
    if(!open) return null
  return ReactDOM.createPortal (
<>
<div style={OverLay_Styles}/>
    <div style={Modal_Styles}>
        {children}
        <button onClick={onClose} style={button_styles}>Close</button>
    </div>
</>,
document.getElementById('portal')
  )
}
