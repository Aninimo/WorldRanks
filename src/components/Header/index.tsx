import { useState, useEffect } from 'react'
import { Moon } from 'phosphor-react'
import { HeaderContainer } from './styles'

export function Header(){
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme !== null) {
      document.documentElement.setAttribute(
        "data-theme",
        storedTheme
      );
      setTheme(storedTheme);
    }
  }, []);

  const switchTheme = () => {
    if (theme === "light") {
      saveTheme("dark");
    } else {
      saveTheme("light");
    }
  };

  const saveTheme = (theme: string) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };  

  return(
    <HeaderContainer>
      <h1>WorldRank</h1>
      <button onClick={switchTheme} data-testid="theme-button"><Moon/></button>
    </HeaderContainer>
  )
}
