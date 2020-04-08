import React, { useRef } from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';

const Item = ({ text, isDragging, connectDragSource, connectDropTarget }) => {
  const opacity = isDragging ? 0 : 1
  const ref = useRef(null)
  connectDragSource(ref)
  connectDropTarget(ref)
  return (
    <div ref={ref} style={{ opacity }}>
      {text}
    </div>
  )
}

 function ListItem({todo, toggle, handleKeyDown, updateTodo, i}) {
//   const [collectedProps, drag] = useDrag({
//     item: { id, type }
//   })
    
    return(
    <div className={`todo ${todo.isComlpleted && 'todo-is-completed'}`}>
      <div className={'checkbox'} onClick={() => toggle(i)}>
        {todo.isCompleted && (
          <span>&#x2714;</span>
        )}
      </div>
      <input
        type="text"
        value={todo.content}
        onKeyDown={e => handleKeyDown(e, i)}
        onChange={e => updateTodo(e, i)}
      />
    </div>
  )
}

export default ListItem;
