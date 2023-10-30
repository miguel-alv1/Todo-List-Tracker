import TodoRowItem from "./TodoRowItem";

function TodoTable(props) {
    return (
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Task Description</th>
                    <th scope='col'>Priority</th>
                </tr>
            </thead>
            <tbody>
                {props.todos.map(todoItem => (<TodoRowItem rowNumber={todoItem.rowNumber} rowDescription={todoItem.rowDescription} rowPriority={todoItem.rowPriority}/>))}
            </tbody>
        </table>
    )
}

export default TodoTable