import { useState } from 'react';
import bundle from "../bundler";
import CodeEditor from '../components/code-editor'
import Preview from '../components/preview'


const CodeCell = () => {
    const [input, setInput] = useState('');
    const [code, setCode] = useState('');

    const onClick = async () => {
        const output = await bundle(input);
        setCode(output);
    }
    
    return <div>
        <CodeEditor 
            initialValue="adem" 
            onChange={(value) => setInput(value)}/>
        <div>
            <button onClick={onClick}>Submit</button>
        </div>
        <Preview code={code}/>
    </div>
};

export default CodeCell