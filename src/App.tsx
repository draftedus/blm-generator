import React, { FormEvent, useState } from 'react';
import { useClipboard } from 'use-clipboard-copy';
import { getInjectScript, getScriptAttribute } from './helpers';
import {
  Button,
  CheckBoxLabel,
  CopyCode,
  CustomizeSection,
  Form,
  Input,
  InputGroup,
  InputRow,
  Label,
  SectionInfo,
  StyledApp,
  TextArea,
  CheckBox,
  CheckBoxSection,
} from './App.styled';
import ColorPickerInput from './components/color-picker-input/ColorPickerInput';

/**
 * Grab the script URL we are using to generate the snippet
 */
const scriptUrl =
  getScriptAttribute('data-script-url') ??
  '//blmtech.s3.amazonaws.com/blm.min.js';

/**
 * Set our default props for the WYSIWYG preview
 */
const DEFAULT_SCRIPT_PROPS = {
  companyName: 'Drafted',
  bgColor: '#000000',
  textColor: '#FFFFFF',
  allowMetrics: false,
};

/**
 * Grab the default script shown in the embed code textarea
 */
const DEFAULT_SCRIPT = getInjectScript(
  DEFAULT_SCRIPT_PROPS.companyName,
  DEFAULT_SCRIPT_PROPS.bgColor,
  DEFAULT_SCRIPT_PROPS.textColor,
  DEFAULT_SCRIPT_PROPS.allowMetrics,
  scriptUrl,
);

/**
 * Main functional component that is injected into the page
 * @constructor
 */
const App: React.FC = () => {
  // Setup our state
  const [companyName, setCompanyName] = useState(
    DEFAULT_SCRIPT_PROPS.companyName,
  );
  const [bgColor, setBgColor] = useState(DEFAULT_SCRIPT_PROPS.bgColor);
  const [textColor, setTextColor] = useState(DEFAULT_SCRIPT_PROPS.textColor);
  const [allowMetrics, setAllowMetrics] = useState(
    DEFAULT_SCRIPT_PROPS.allowMetrics,
  );
  const [generatedScript, setGeneratedScript] = useState(DEFAULT_SCRIPT);
  const clipboard = useClipboard({ copiedTimeout: 750 });

  /**
   * Handle onClick to grab new embed code
   * @param e
   */
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const script = getInjectScript(
      companyName,
      bgColor,
      textColor,
      allowMetrics,
      scriptUrl,
    );
    setGeneratedScript(script);
  };

  return (
    <StyledApp>
      <Form onSubmit={handleSubmit}>
        <CustomizeSection>
          <InputRow>
            <InputGroup>
              <Label>Company Name</Label>
              <Input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <Label>Text Color</Label>
              <ColorPickerInput
                value={textColor}
                onChange={(v) => setTextColor(v?.toUpperCase())}
              />
            </InputGroup>
            <InputGroup>
              <Label>BG Color</Label>
              <ColorPickerInput
                value={bgColor}
                onChange={(v) => setBgColor(v?.toUpperCase())}
              />
            </InputGroup>
          </InputRow>
        </CustomizeSection>
        <CheckBoxSection>
          <CheckBox
            type="checkbox"
            checked={allowMetrics}
            onChange={() => setAllowMetrics(!allowMetrics)}
          />
          <CheckBoxLabel>
            Add me to the list below when I install this
          </CheckBoxLabel>
        </CheckBoxSection>
        <SectionInfo>
          <Button type="submit">Refresh Embed Code</Button>
        </SectionInfo>
      </Form>
      <CopyCode>
        <TextArea
          readOnly
          id="copy-code-text"
          ref={clipboard.target}
          value={generatedScript}
        />
        <Button onClick={clipboard.copy}>
          {clipboard.copied ? 'Copied' : 'Copy'}
        </Button>
      </CopyCode>
    </StyledApp>
  );
};

export default App;
