import { useState } from 'react'
import Card from './components/Card'
import Menu from './components/Menu'
import style from './Tecnologies.module.css'



export const Tecnologies = () => {
    const [show, setShow] = useState('all');
    return(
        <>
            <Menu/>
            <section className={style['wrap-tec']}>
                <h1>TEC'S</h1>
               <div className={style['wrap-btns-tec']}>
                <button className={style.btnTec} onClick={() => setShow('html')}>HTML</button>
                <button className={style.btnTec} onClick={() => setShow('css')}>CSS</button>
                <button className={style.btnTec} onClick={() => setShow('js')}>JAVASCRIPT</button>
                <button className={style.btnTec} onClick={() => setShow('react')}>REACT</button>
                <button className={style.btnTec} onClick={() => setShow('all')}>All TEC'S</button>
               </div>
                <div className={style['wrap-cards-tec']}>
                   {show === 'html' && <Card title='HTML' desc='Sou o HTML'/>}
                   {show === 'css' && <Card title='CSS'  desc='Sou o CSS'/>}
                   {show === 'js' && <Card title='JAVASCRIPT' desc='Sou o JAVASCRIPT'/>}
                   {show === 'react' && <Card title='REACT JS'  desc='Sou o REACT'/>}
                   {show === 'all' && 
                   <>
                   <Card title='HTML' desc='Sou o HTML'/> 
                   <Card title='CSS' desc='Sou o CSS'/>
                   <Card title='JAVASCRIPT'desc='Sou o JAVASCRIPT'/>
                   <Card title='REACT JS' desc='Sou o REACT'/>
                   </>}
                </div>
            </section>
        </>
    )
}
