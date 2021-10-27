import React from "react";
import Todo from './Todo';

const TodoList = (props) =>
{
    console.log(props.todoList)
    return (
        <div>
            {

                props.todoList.map((item, index) =>
                    <Todo key={index}
                        taskName={item.taskName}
                        ownerName={item.ownerName}
                        removeItem={() => props.removeItem(index)}
                    />
                )

            }
        </div>

    )
}

export default TodoList;
