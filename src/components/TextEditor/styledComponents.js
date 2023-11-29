import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #25262c;
  background-size: cover;
  padding: 40px;
`
export const AppContainer = styled.div`
  background-color: #1b1c22;
  background-size: cover;
  width: 75%;
  height: 90%;
  display: flex;
  flex-direction: row;
  font-family: 'Roboto';
  padding: 20px;
`

export const AppHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 48%;
  height: 100%;
`

export const AppHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: #f8fafc;
`
export const AppImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const AppImage = styled.img`
  width: 75%;
`
export const TextElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;
`
export const ButtonsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #25262c;
  border: solid 1px #334155;
  border-radius: 10px 10px 0px 0px;
  margin: 0px;
  padding: 0px;
`
export const ListItem = styled.li`
  list-style-type: none;
  padding-top: 5px;
  margin-left: 5px;
`

export const Button = styled.button`
  font-size: 25px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  color: ${props => (props.active ? '#faff00' : '#f1f5f9')};
`
export const TextArea = styled.textarea`
  height: 100%;
  width: 100%;
  border-radius: 0px 0px 10px 10px;
  background-color: #25262c;
  border: solid 1px #334155;
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-family: 'Roboto';
  color: #cbd5e1;
  font-size: 14px;
  padding: 14px;
  outline: none;
  resize: none;
`
