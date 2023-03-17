import { useContext } from "react"
import ThemeContext from "../../context/theme-context/ThemeContext"
import AppTheme from "../../Colors";
import './Main.css'


const Main = () => {
    const [theme,toggleTheme] = useContext(ThemeContext);
    
    return (
        <div
            style={{
                padding:"1rem",
                backgroundColor:`${theme.backgroundColor}`,
                color:`${theme.textColor}`,
                textAlign:"center"
            }}
            className="main">
            <h1>A Theme-Toggler built using React's Context API</h1>
            <p>    
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptate modi sapiente debitis eius corrupti soluta esse dolorem porro ex, illum necessitatibus ipsam. Esse architecto dolores, laboriosam cum recusandae fugiat?
                A nemo, voluptatum non eaque quam delectus obcaecati ad quaerat quisquam adipisci ullam illum eum officia error harum aliquam, fuga accusamus eveniet at tempora libero nisi? Voluptatem labore tempore exercitationem.
                Unde cumque quis sequi! Sapiente possimus quae a magnam, dolores itaque magni dicta fuga rem molestias voluptatum exercitationem aut ad harum iste? Nam id quasi recusandae repellendus quia vitae est?
                Magni labore velit voluptatem numquam, vel expedita, cumque dolorem nulla rerum porro quae dignissimos saepe quaerat minima nam eos earum ex. Animi veritatis laudantium doloremque nisi sunt fugit tempora mollitia.
                Placeat corporis ullam ratione quisquam non! Corporis, id! Ullam, veritatis numquam optio deleniti saepe impedit aliquid qui vel adipisci perspiciatis culpa quam cumque reprehenderit sed aspernatur provident eum voluptas error?
            </p>
            <button
                style={{
                    backgroundColor:`${theme.backgroundColor}`,
                    padding:"16px 120px",
                    fontSize:"20px",
                    color:`${theme.textColor}`,
                    border:`${theme.border}`,
                    cursor:`pointer`
                }}
                onClick={()=>{toggleTheme(theme===AppTheme.light?AppTheme.dark:AppTheme.light)}}>{theme===AppTheme.light?"Turn Off the lights":"Turn On the lights"}</button>
        </div>
    )
}

export default Main;