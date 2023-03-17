import { useContext } from 'react';
import ThemeContext from '../../context/theme-context/ThemeContext';
import logo from '../../logo.svg'
import ThemeToggleBtn from '../theme-toggle-btn/ThemeToggleBtn';
import './Header.css'
import light_icn from './../../assets/svgs/light_mode_icn.svg'
import dark_icn from './../../assets/svgs/dark_mode_icn.svg'

const Header = () => {
    const theme = useContext(ThemeContext)[0];
    const currentTheme = theme;

    return (
        <div>          
            <header style={{
                    backgroundColor:`${currentTheme.backgroundColor}`,
                    color:`${currentTheme.textColor}`,
                    borderBottom:`2px solid ${currentTheme.textColor}`,
                    padding:`8px`
                    }}>
                <img src={logo} className="logo" alt="logo" />
                <h1 style={
                    {
                        color:`${currentTheme.textColor}`,
                        fontSize:`20px`,
                        margin:`0px 4px 0px 4px`,
                        padding:`2px 2.5px 2px 2.5px`,
                        borderBottom:`${currentTheme.border}`
                    }
                    }>Theme Switcher
                </h1>
                <div style={{display:"flex",alignItems:"center"}}>&nbsp;<img src={light_icn} alt='L' width='22px'/>&nbsp;<ThemeToggleBtn/>&nbsp;<img src={dark_icn} alt='D' width='22px'/>&nbsp;</div>
            </header>
        </div>
    );
}

export default Header;