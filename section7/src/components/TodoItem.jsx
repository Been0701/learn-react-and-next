import { TodoContext } from "../TodoContext";
import "./TodoItem.css";
import { memo, useContext } from 'react';

function TodoItem({id, content, createdDate, isDone}) {

    const {onUpdate, onDelete} = useContext(TodoContext);
    
    const onChangeCheckbox = () => {
        onUpdate(id)
    }

    const onClickDeleteBtn = () => {
        onDelete(id)
    }

    return(
        <div className="TodoItem">
            <input onChange={onChangeCheckbox} type="checkbox" checked={isDone}/>
            <div className="content">{content}</div>
            <div className="date">{new Date(createdDate).toLocaleDateString()}</div>
            <button onClick={onClickDeleteBtn}>삭제</button>
        </div>
    )
}

export default memo(TodoItem);