import { Card, CardContent, Typography } from '@material-ui/core'
import React, {forwardRef} from 'react'
import './Message.css';

const Message = forwardRef(({txt,name},ref) => {
    const isUser = name === txt.name;
    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? 'message_userCard' : 'message_guestCard'}>
                <CardContent>
                    <Typography color="white" variant="h5" component="h2">
                        {!isUser && `${txt.name || "Unknow User"}:`} {txt.txt}
                    </Typography>
                </CardContent>
                </Card>
        </div>
    )
})

export default Message
