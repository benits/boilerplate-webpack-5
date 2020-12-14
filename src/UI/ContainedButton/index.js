import styled from 'styled-components'

const ContainedButton = styled.button`
  cursor: pointer;
  outline: none;
  padding: 0 16px;
  min-width: 160px;
  height: 48px;
  background: #0033cc;
  border-radius: 24px;
  font-size: 16px;
  color: #ffffff;
  border: none;
  &:disabled {
    background-color: #d5d5d5;
    cursor: not-allowed;
  }
  &:hover {
    box-shadow: ${props => (props.disabled ? 'none' : '0px 0px 8px #0033cc33')};
  }
  &:active {
    color: #0cdac1;
  }
`
export default ContainedButton
