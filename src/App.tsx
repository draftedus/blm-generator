import React, {FormEvent, useState} from 'react';
import { useClipboard } from 'use-clipboard-copy';

// {
//     font: 'Inter, sans-serif',
//     companyName: 'Drafted',
//     textColor: '#00000',
//     bgColor: '#FCC501'
// }
function App() {

    const [companyName, setCompanyName] = useState("Drafted");
    const [bgColor, setBgColor] = useState("#000000");
    const [textColor, setTextColor] = useState("#FFFFFF");
    const clipboard = useClipboard({ copiedTimeout: 750 });
    const [scriptProps, setScriptProps] = useState({ companyName: "Drafted", bgColor: "#000000", textColor: "#FFFFFF" });

    const generatedScript = `<script>
        !function(){var e=window.BLM=window.BLM||[];e.initialized?window.console&&console.error&&console.error("BLM snippet already called")
        :(e.initialized=!0,e.load=function(o){var r=document.createElement("script");r.type="text/javascript",r.src="//blmtech.s3.amazonaws.com/blm.min.js";
        var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(r,t),e._loadOptions=o},
        e.load({ name: "${scriptProps.companyName}", primaryColor: "${scriptProps.textColor}", backgroundColor: "${scriptProps.bgColor}" }))
        }();
    </script>
    `;

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setScriptProps({ companyName, bgColor, textColor });
    };


    return (
        <div className="app">
            <form className="app__form" onSubmit={handleSubmit}>
                <div className="section customize">
                    <div className="inputRow">
                        <div className="inputGroup companyName">
                            <label>
                                Company Name
                            </label>
                            <input
                                type="text"
                                value={companyName}
                                onChange={e => setCompanyName(e.target.value)}
                            />
                        </div>
                        <div className="inputGroup textColor">
                            <label>
                                Text Color
                            </label>
                            <input
                                type="text"
                                value={textColor}
                                onChange={e => setTextColor(e.target.value)}
                            />
                        </div>
                        <div className="inputGroup bgColor">
                            <label>
                                BG Color
                            </label>
                            <input
                                type="text"
                                value={bgColor}
                                onChange={e => setBgColor(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="section-info">
                    <button type="submit">Refresh Embed Code</button>
                </div>
            </form>
            <div className="copy-code">
                <textarea readOnly id="copy-code-text" ref={clipboard.target} value={generatedScript} />
                <button onClick={clipboard.copy}>{clipboard.copied ? 'Copied' : 'Copy'}</button>
            </div>
        </div>
    );
}

export default App;
