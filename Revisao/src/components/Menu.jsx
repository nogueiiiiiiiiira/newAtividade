import style from './Menu.module.css'

export default function Menu() {
    return(
    
        <div className={style['wrap-menu']}>
            <div className={style['nav-links']}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/calc">Calculations</a></li>
                    <li><a href="/tec">Tecnologies</a></li>
                    <li><a href="/contact">Contacts</a></li>
                </ul>   
            </div>
        </div>
    )
}
