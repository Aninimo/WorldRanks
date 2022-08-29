import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  
  ul{
    width: 20rem;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border: 1px solid black;
    border-radius: .5rem;
  }

  
  li{
    width: 90%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    
    border-radius: .5rem;
    margin-bottom: 2rem;
    color: var(--text-color);
    box-shadow: 8px 8px 8px 7px rgba(0, 0, 0, 0.2);
  }

  a{
    text-decoration: none;
    
    div{
      display: flex;
      gap: 4.5rem;

      span{
        color: var(--text-color-secondary);
    }
  }
`
