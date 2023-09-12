import { useRef, useState } from 'react'

import "./TodoEditor.css";

export default function TodoEditor({ onCreate }) {

    const [content, setContent] = useState('');
    const inputRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value)
    }
    const onClick = () => {
        if (content === "") {
            inputRef.current.focus();
            return; // 새로운 투두로 추가하지 못하도록 막기 (아무것도 안 하게)
        }
        onCreate(content);
        setContent("");
    }

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onClick();
        }
    }

    return (
        <div className="TodoEditor">
            <input ref={inputRef} placeholder="New Todo ..." value={content} onChange={onChangeContent} onKeyDown={onKeyDown}/>
            <button onClick={onClick}>추가</button>
        </div>
    )
}