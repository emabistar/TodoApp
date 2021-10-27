import TodoText from "./TodoText"
import TodoButton from './TodoButton';
const Todo = (props) =>
{
    return (
        <div className="col-lg-12 ">
            <ol class="list-group list-group-numbered  ">
                <li class="list-group-item d-flex   mb-2 justify-content-between align-items-start">
                    <div class="ms-2 me-auto ">
                        <div class="fw-bold">
                            <TodoText text={props.taskName} />
                        </div>
                        <div>
                            <TodoText text={props.ownerName} />
                        </div>
                    </div>
                    <TodoButton handleClick={props.removeItem} />
                </li>
            </ol>
        </div >
    );
};
export default Todo;