import React, { FormEvent, useEffect, useState } from 'react';
import { useClipboard } from 'use-clipboard-copy';
import { fullUrl, getInjectScript, getScriptAttribute } from './helpers';
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
  SpacedInput,
  Domains,
  UsedByContainer,
} from './App.styled';
import { getDomains } from './metrics';

/**
 * Grab the script URL we are using to generate the snippet
 */
const scriptUrl =
  getScriptAttribute('data-script-url') ??
  'https://blmtech.s3.amazonaws.com/blm.min.js';

/**
 * Metrics URL used to list domains
 */
const metricsUrl =
  getScriptAttribute('data-metrics-url') ??
  'https://blmtech-prod.drft.workers.dev';

/**
 * Set our default props for the WYSIWYG preview
 */
const DEFAULT_SCRIPT_PROPS = {
  companyName: 'Drafted',
  bgColor: '#000000',
  textColor: '#FFFFFF',
  metricsEnabled: true,
};

/**
 * Grab the default script shown in the embed code textarea
 */
const DEFAULT_SCRIPT = getInjectScript(
  DEFAULT_SCRIPT_PROPS.companyName,
  DEFAULT_SCRIPT_PROPS.bgColor,
  DEFAULT_SCRIPT_PROPS.textColor,
  DEFAULT_SCRIPT_PROPS.metricsEnabled,
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
  const [metricsEnabled, setMetricsEnabled] = useState(
    DEFAULT_SCRIPT_PROPS.metricsEnabled,
  );
  const [generatedScript, setGeneratedScript] = useState(DEFAULT_SCRIPT);
  const [domains, setDomains] = useState([]);
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
      metricsEnabled,
      scriptUrl,
    );
    setGeneratedScript(script);
  };

  // Grab our domains if we can and set them
  useEffect(() => {
    const fetchData = async () => {
      const result = await getDomains(metricsUrl);
      setDomains(result.domains);
    };
    fetchData().catch((err) => console.error('Failed to fetch domains', err));
  }, []);

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
              <SpacedInput
                type="text"
                value={textColor}
                onChange={(e) => setTextColor(e?.target?.value)}
              />
            </InputGroup>
            <InputGroup>
              <Label>BG Color</Label>
              <SpacedInput
                type="text"
                value={bgColor}
                onChange={(e) => setBgColor(e?.target?.value)}
              />
            </InputGroup>
          </InputRow>
        </CustomizeSection>
        <CheckBoxSection>
          <CheckBox
            type="checkbox"
            checked={metricsEnabled}
            onChange={() => setMetricsEnabled(!metricsEnabled)}
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
      <UsedByContainer>
        <h3>Used By</h3>
        <Domains>
          {domains.map((d: { companyName: string; domain: string }) => (
            <a href={fullUrl(d.domain)} target="_blank">
              {d.companyName}
            </a>
          ))}
        </Domains>
      </UsedByContainer>
    </StyledApp>
  );
};

export default App;
