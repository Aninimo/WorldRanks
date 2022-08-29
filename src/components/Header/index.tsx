import { useState, useEffect } from 'react'
import { Moon } from 'phosphor-react'
import { HeaderContainer } from './style'

export function Header(){
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme")
    );

    setTheme(localStorage.getItem("theme"));
  }, []);

  const switchTheme = () => {
    if (theme === "light") {
      saveTheme("dark");
    } else {
      saveTheme("light");
    }
  };

  const saveTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };
  return(
    <HeaderContainer>
      <h1>WorldRank</h1>
      <button onClick={switchTheme}><Moon/></button>
    </HeaderContainer>
  )
}
