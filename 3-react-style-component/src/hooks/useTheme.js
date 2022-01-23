import {useState} from 'react';

function useTheme(startingTheme = 'light') {
    const [theme, setTheme] = useState(startingTheme);
    function validateTheme(themeValue) {
        const validTheme = themeValue ===  'dark' ? 'dark' : 'light';
        setTheme(validTheme);
    }
    return { 
        theme, 
        setTheme: validateTheme
    }
}

export default useTheme;