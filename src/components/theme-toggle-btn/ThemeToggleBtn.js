import React, {useContext} from 'react'
import ThemeContext from '../../context/theme-context/ThemeContext';
import './ThemeToggleBtn.css'
import AppTheme from '../../Colors';

const ThemeToggleBtn = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (

    // <!-- Rounded switch -->
    <div>
      <label className="switch">
          <input type="checkbox"
          checked={themeMode.backgroundColor.slice(1)===AppTheme.light.backgroundColor.slice(1)?false:true} 
          onChange={()=>{
              setThemeMode(themeMode.backgroundColor.slice(1)===AppTheme.light.backgroundColor.slice(1)?AppTheme.dark:AppTheme.light);
          }}/>
          <span className="slider round"></span>
      </label>
    </div>
  );
}

export default ThemeToggleBtn;