import style from './Menu.module.css'

export default function Menu(){
    return(
            <div className={style.wrapMenu}>
                <div className={style.navLinks}>
                <ul>
                    <li><a href="">Profiles</a></li>
                    <li><a href={"/tec"}>Tecnologies</a></li>
                    <li><a href="">Graphics</a></li>
                </ul>   
                </div>
            </div>

            
    )
}
