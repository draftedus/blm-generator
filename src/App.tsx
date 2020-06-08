import React, {FormEvent, useState} from 'react';
import { useClipboard } from 'use-clipboard-copy';
import styled from 'styled-components';

const AppClass = styled.div`
    width: 100%;
    background-color: black;
    color: white;
    font-family: Inter, sans-serif;
`;

const Form = styled.form`
    margin: 0 auto;
    max-width: 980px;
`;

const TextArea = styled.textarea`
    width: 580px;
    height: 155px;
`;

const Button = styled.button`
    width: 210px;
    height: 70px;
    background-color: black;
    border: 1px solid white;
    color: white;
    font-size: 24px;
    font-weight: bold;
    margin: 0 10px;
    cursor: pointer;
    &:hover {
    background-color: white;
    color: black;
    }
`;

const CustomizeSection = styled.div`
    padding-top: 70px;
    padding-bottom: 80px;
    border-top: 2px solid #C4C4C4;
`;

const InputRow = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    justify-content: space-between;
`;

const InputGroup = styled.div`
    display: flex;
    flex-flow: column nowrap;
    padding-top: 10px;
`;

const Label = styled.label`
    padding-bottom: 15px;
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
`;

const Input = styled.input`
    padding: 15px;
    border: 1px solid white;
    background-color: black;
    color: white;
    text-outline: none;
    font-weight: bold;
    font-size: 18px;
`;

const SpacedInput = styled(Input)`
    letter-spacing: 0.1em;
`;

const SectionInfo = styled.div`
    display: flex;
    justify-content: center;
    button {
      width: 360px;
    }
`;

const CopyCode = styled.div `
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 100px;
    color: black;
    padding-bottom: 80px;

    button {
        margin-left: 30px;
    }
`;

function App() {

    const [companyName, setCompanyName] = useState("Drafted");
    const [bgColor, setBgColor] = useState("#000000");
    const [textColor, setTextColor] = useState("#FFFFFF");
    const clipboard = useClipboard({ copiedTimeout: 750 });
    const [generatedScript, setGeneratedScript] = useState("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setGeneratedScript(`<script>
    !function(){var e=window.BLM=window.BLM||[];e.initialized?window.console&&console.error&&console.error("BLM snippet already called")
    :(e.initialized=!0,e.load=function(o){var r=document.createElement("script");r.type="text/javascript",r.src="//blmtech.s3.amazonaws.com/blm.min.js";
    var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(r,t),e._loadOptions=o},
    e.load({ name: "${companyName}", primaryColor: "${textColor}", backgroundColor: "${bgColor}" }))
    }();
</script>`);
    };

    return (
        <AppClass>
            <Form onSubmit={handleSubmit}>
                <CustomizeSection>
                    <InputRow>
                        <InputGroup>
                            <Label>
                                Company Name
                            </Label>
                            <Input
                                type="text"
                                value={companyName}
                                onChange={e => setCompanyName(e.target.value)}
                            />
                        </InputGroup>
                        <InputGroup>
                            <Label>
                                Text Color
                            </Label>
                            <SpacedInput
                                type="text"
                                value={textColor}
                                onChange={e => setTextColor(e.target.value)}
                            />
                        </InputGroup>
                        <InputGroup>
                            <Label>
                                BG Color
                            </Label>
                            <SpacedInput
                                type="text"
                                value={bgColor}
                                onChange={e => setBgColor(e.target.value)}
                            />
                        </InputGroup>
                    </InputRow>
                </CustomizeSection>
                <SectionInfo>
                    <Button type="submit">Get Embed Code</Button>
                </SectionInfo>
            </Form>
            <CopyCode>
                <TextArea readOnly id="copy-code-text" ref={clipboard.target} value={generatedScript} />
                <Button onClick={clipboard.copy}>{clipboard.copied ? 'Copied' : 'Copy'}</Button>
            </CopyCode>
        </AppClass>
    );
}

export default App;
