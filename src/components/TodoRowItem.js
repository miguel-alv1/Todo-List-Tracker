function TodoRowItem(props) {
    return (
        <tr>
            <th scope='row'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowPriority}</td>
        </tr>
    )
}

// command that allows us to use this component within our application
export default TodoRowItem