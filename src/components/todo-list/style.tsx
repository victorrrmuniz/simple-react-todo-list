
import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 64px;

  > div {
    width: 70%;
    margin: 0 auto;
    
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`

export const HeaderTitle = styled.div`
  background-color: #1d1d1d;
  padding: 32px;
  border-radius: 16px;
  border: solid 1px #444444;

  h1 {
    text-align: center;
  }
`

export const ContentContainer = styled.div`
  background-color: #1d1d1d;
  padding: 32px;
  border-radius: 16px;
  border: solid 1px #444444;
  display: flex;
  flex-direction: row;
  gap: 16px;

  > div {
    flex: 1;
  }
`
export const TodoListContainer = styled.div`
  background-color: #1d1d1d;
  padding: 32px;
  border-radius: 16px;
  border: solid 1px #444444;

  table {
    border-collapse: collapse;
    width: 100%;
    font-size: 1.5rem;
  }

  th {
    text-align: left;
  }

  td:nth-child(1), td:nth-child(3) {
    width: 100px;
  }

  td:nth-child(3) {
    text-align: center;
  }

  td:nth-child(2) {
    font-weight: bolder;
  }

  .checked-item {
    text-decoration: line-through;
    opacity: 0.5;
  }

  
`
