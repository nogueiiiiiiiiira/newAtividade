import Card from "./components/Card"
import style from "./Tecnologies.module.css"
import { useState } from 'react'

export const Tecnologies = () => {
    const [show, setShow] = useState('HTML');
    return(
        <section className = {style.wrapPrincipalTec}>
            <Menu/>
            <h1>Tec</h1>
            <div>
                <button onClick={() => setShow('html')}>HTML</button>
                <button onClick={() => setShow('css')}>CSS</button>
                <button onClick={() => setShow('javascript')}>JAVASCRIPT</button>
                <button onClick={() => setShow('react')}>REACT</button>
                <button onClick={() => setShow('all')}>ALL</button>
            </div>
            <div className= {style.cardsTec}>
                {show === 'html' || show === 'all' && <Card title= 'HTML'/>}
                {show === 'css' || show === 'all' && <Card title='CSS' />}
                {show === 'javascript' || show === 'all' && <Card title='JAVASCRIPT' />}
                {show === 'react' || show === 'all' && <Card title='REACT' />}
                {show === 'all' && 
                <>
                 <Card title='HTML' />
                 <Card title='CSS' />
                 <Card title='JAVASCRIPT' />
                 <Card title='REACT'/>
                 </>
                 }
            </div>
        </section>
    )
}