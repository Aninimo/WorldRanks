import styled from 'styled-components'

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    margin-top: 2rem;
  }
  
  a{
    margin-top: 1rem;
    padding-bottom: 2rem;
  }
`

export const MainBox = styled.div`
  width: 15rem;
  height: auto;
  text-align: center;
  padding: 1.5rem;
  border: 1px solid black;
  border-radius: .5rem;
  margin-top: 2.5rem;

 .moreInfo{
   display: flex;
   justify-content: space-between;
   margin-top: 1.5rem;
 }
`

export const SecondBox = styled.div`
  width: 16rem;
  height: auto;
  padding: 1rem;
  border: 1px solid black;
  border-radius: .5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  ul{
    margin-top: 1rem;
    
    li{
      display: flex;
      justify-content: space-between;
      padding: 1rem;
      border-bottom: 1px solid black;
    }
  }
`
