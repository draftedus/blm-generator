import React, {FormEvent, useState} from 'react';
import './App.css';

// {
//     font: 'Inter, sans-serif',
//     companyName: 'Drafted',
//     textColor: '#00000',
//     bgColor: '#FCC501'
// }
function App() {

    const [companyName, setCompanyName] = useState("Drafted");
    const [fontFamily, setFontFamily] = useState("Inter, sans-serif");
    const [bgColor, setBgColor] = useState("#000000");
    const [textColor, setTextColor] = useState("#FFFFFF");
    const [shouldTrack, setShouldTrack] = useState(true);
    const [showLearnLink, setShowLearnLink] = useState(true);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

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
                        <div className="inputGroup fontFamily">
                            <label>
                                Font Family
                            </label>
                            <input
                                type="text"
                                value={fontFamily}
                                onChange={e => setFontFamily(e.target.value)}
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
                <div className="section info">
                    <div>
                    <input type="checkbox" id="track" name="track" value="track"/>
                    <span> Track my install to add me to the list </span><br/>
                    </div>
                    <div>
                    <input type="checkbox" id="learnLink" name="learnLink" value="learnLink"/>
                    <span> Display a link back to blacklivesmatter.tech in my banner </span><br/>
                    </div>
                </div>
            </form>

        </div>
    );
}

export default App;
