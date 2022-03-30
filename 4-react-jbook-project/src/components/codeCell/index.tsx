import { useState, useEffect } from 'react';
import bundle from "../../bundler";
import CodeEditor from '../codeEditor'
import Preview from '../preview'
import Resizable from '../resizable';


const CodeCell = () => {
    const [input, setInput] = useState('');
    const [err, setErr] = useState('');
    const [code, setCode] = useState('');
    
    useEffect(() => {
       
       const timer = setTimeout(async () => {
            const output = await bundle(input);
            setCode(output.code);
            setErr(output.err);
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
            <Preview code={code} err={err}/>
        </div>
    </Resizable>
};

export default CodeCell