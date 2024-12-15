import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import './CodePage.css';

function CodePage() {
    const { codeId } = useParams(); // Extract unique ID from URL
    const navigate = useNavigate();
    const [code, setCode] = useState(''); // Store the code entered

    // Copy the URL to the clipboard
    const copyToClipboard = () => {
        navigator.clipboard.writeText(window.location.href);
        // alert('URL copied to clipboard!');
    };

    return (
        <div className="codePageContainer">
            <header className="codePageHeader">
            <img src="/codecollab.png" alt="Code Collab Logo" className="codecollablogo" onClick={() => navigate('/')} />
                <button className="backButton" onClick={() => navigate('/')}>
                    Go Back
                </button>
            </header>

            <div className="editorContainer">
            <Editor
                height="80vh" // Adjust the height of the editor
                width="100%"  // Full width
                theme="vs-dark" // Dark theme
                defaultLanguage="javascript" // Default programming language
                value={code} // Bind the code state
                onChange={(value) => setCode(value)} // Update the state on change
                options={{
                    fontSize: 14, // Adjust the font size
                    minimap: { enabled: false }, // Disable the minimap
                    lineNumbers: 'on', // Show line numbers
                }}
            />
        </div>

            <div className="actionButtons">
                {/* <button className="saveButton" onClick={() => alert('Code saved!')}>
                    Save Code
                </button> */}
                <button className="shareButton" onClick={copyToClipboard}>
                    Copy Shareable Link
                </button>
            </div>
        </div>
    );
}

export default CodePage;
