import './code-editor.css';
import './syntax.css';
import { useRef} from 'react';
import MonacoEditor, { EditorDidMount } from '@monaco-editor/react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';
import codeShift from "jscodeshift";
import HighLighter from "monaco-jsx-highlighter";


interface CodeEditorProps {
    initialValue: string;
    onChange(value: string): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({onChange, initialValue}) => {
    const editorRef = useRef<any>();
    
    const onEditorDidMount: EditorDidMount = (getValue, monacaEditor) => {
        editorRef.current = monacaEditor;
        monacaEditor.onDidChangeModelContent(() =>{
            onChange(getValue())
        })
        monacaEditor.getModel()?.updateOptions({tabSize: 2})
        const highlighter = new HighLighter(
            // @ts-ignore
            window.monaco, 
            codeShift,
            monacaEditor
        );
        highlighter.highLightOnDidChangeModelContent(
            () => {},
            () => {},
            undefined,
            () => {},
        );
    }

    const onFormatClick = () => {
        const unFormatted = editorRef.current.getModel().getValue();
        
        const formatted = prettier.format(unFormatted, {
            parser: 'babel',
            plugins: [parser],
            useTabs: false,
            semi: true,
            singleQuote: true,
        }).replace(/\n$/, '');
        
        editorRef.current.setValue(formatted)
    }

    return (
        <div className="editor-wrapper">
            <button className="button button-format is-primary is-small" onClick={onFormatClick}>Format</button>
            <MonacoEditor 
                editorDidMount={onEditorDidMount}
                value={initialValue}
                height="500px" 
                theme="dark" 
                language="javascript" 
                options={{
                    wordWrap: 'on',
                    minimap: {enabled: false},
                    showUnused: false,
                    folding: false,
                    lineNumbersMinChars: 3,
                    fontSize: 16,
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                }} />;
        </div>
        )
}

export default CodeEditor;