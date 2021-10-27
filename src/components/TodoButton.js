const TodoButton = (props) =>
{
    return (
        <button onClick={() => props.handleClick()} className="btn btn-danger "> <i className='fas fa-trash'></i></button>
    )
}
export default TodoButton;