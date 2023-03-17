import {createContext} from 'react';
import AppTheme from '../../Colors';

const ThemeContext = createContext({
    theme:AppTheme.light,
    toggleTheme:()=>{}
});

export default ThemeContext;