'use client';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { java } from '@codemirror/lang-java';
import { cpp } from '@codemirror/lang-cpp';

const extensions = { JavaScript: javascript(), TypeScript: javascript({ typescript: true }), Python: python(), Java: java(), 'C++': cpp() };
export default function CodeEditor({ value, onChange, language = 'JavaScript', readOnly = false }) {
  return <div className="overflow-hidden rounded-lg border border-zinc-700 text-sm"><CodeMirror value={value || ''} onChange={onChange} extensions={extensions[language] ? [extensions[language]] : []} theme="dark" editable={!readOnly} basicSetup={{ lineNumbers: true, foldGutter: true }} /></div>;
}
