import React, {useState} from 'react';
//Components
import CodeEditor from "@uiw/react-textarea-code-editor";
import ChatInput from "../ChatInput/ChatInput";
//Styled components
import styled from "styled-components";

const StyledEditorWrapper = styled.div`
  position: relative;
  display: flex;
`;

const StyledCodeEditor = styled(CodeEditor)`
    width: 100%;
`;

const StyledRemoveButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  font-weight: 800;
`;

const Editor = () => {
    const [code, setCode] = useState<[string]>(
        [`df = pd.read_csv('data/train.csv')`]
    );

    const updateCode = (value: string, indexOfCode: number) => {
        const newArray: [string] = [...code]
        newArray[indexOfCode] = value
        setCode(newArray)
    }

    const onRemove = (indexOfCode: number) => {
        const newArray: [string] = [...code]
        if (indexOfCode !== -1) {
            newArray.splice(indexOfCode, 1);
            setCode(newArray)
        }
    }

    return (
        <>
            {
                code.map((code, index) => {
                    return (
                        <StyledEditorWrapper key={index} data-color-mode="light">
                            <StyledCodeEditor
                                value={code}
                                language="py"
                                placeholder="Please enter python code."
                                onChange={(e) => updateCode(e.target.value, index)}
                                padding={15}
                                style={{
                                    fontFamily:
                                        "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
                                    fontSize: 12,
                                    marginBottom: '5px',
                                }}
                            />
                            <StyledRemoveButton onClick={()=>onRemove(index)}>X</StyledRemoveButton>
                        </StyledEditorWrapper>
                    )
                })
            }
            <ChatInput setCode={setCode} code={code}/>
        </>
    );
};

export default Editor;