import React, {useState} from "react";
//Styled components
import styled from 'styled-components';

const ChatWrapper = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: end;
  
  position: fixed;
  bottom: 50px;
`;

const Input = styled.textarea`
  max-width: 60%;
  min-width: 20%;
  width: 60%;
  
  max-height: 200px;
  min-height: 32px;
  
  border: 5px solid #AFAFAFAF;
  border-radius: 10px;
  
  margin-right: 10px;
  padding: 5px;
  font-size: 15px;
`;

const Button = styled.button`
  border: 5px solid #AFAFAFAF;
  border-radius: 10px;
  height: 40px;
`;

interface Props {
    setCode: (value: [string]) => void;
    code: [string];
}

const ChatInput = ({setCode, code}: Props) => {
    const [inputValue, setInputValue] = useState<string>('')

    const addNewCodeEditor = () => {
        const newArray:[string] = [...code]
        newArray.push(inputValue)
        setCode(newArray)
    }

    return (
        <ChatWrapper>
            <Input onChange={(e) => setInputValue(e.target.value)}/>
            <Button onClick={addNewCodeEditor}>Ask</Button>
        </ChatWrapper>
    )
};

export default ChatInput;
