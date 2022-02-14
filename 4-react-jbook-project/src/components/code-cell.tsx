import { useState, useEffect } from 'react';
import bundle from "../bundler";
import CodeEditor from '../components/code-editor'
import Preview from '../components/preview'
import Resizable from './resizable';


const CodeCell = () => {
    const [input, setInput] = useState('');
    const [code, setCode] = useState('');
    
    useEffect(() => {
       
       const timer = setTimeout(async () => {
            const output = await bundle(input);
            setCode(output);
        }, 500);
        return () => {
            clearTimeout(timer)
        }
    }, [input])

    
    return <Resizable direction='vertical'>
        <div style={{height: '100%', display: 'flex', flexDirection: 'row'}}>
            <Resizable direction='horizontal'>
                <CodeEditor 
                    initialValue="adem" 
                    onChange={(value) => setInput(value)}/>
            </Resizable>
            <Preview code={code}/>
        </div>
    </Resizable>
};

export default CodeCell