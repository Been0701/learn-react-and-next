import "./TodoItem.css";

export default function TodoItem({
    id, content, createdDate, isDone, onUpdate, onDelete
}) {
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