const Message = (props) => {
    const messageStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    if (props.message === null) {
        return null
    } else {
        if (props.messageType === 'notification') {
            messageStyle.color = 'green'
        } else if (props.messageType === 'error') {
            messageStyle.color = 'red'
        }

      return (
        <p style={messageStyle} >{props.message}</p>
        )
    }
}

export default Message