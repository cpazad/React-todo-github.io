import React, { useState, useEffect } from 'react'
import Todo from './Todo'

const Lists = () => {
    
    // Manual Task List

    const lists = [
        {
            title: 'What a job?',
            complete: 'No'
        },
        {
            title: 'What a Work?',
            complete: 'No'
        },
        {
            title: 'What a Play?',
            complete: 'Yes'
        }
    ]
    // useState setting

    const [todos, settodo] = useState(lists)
    // useEffect setting

    useEffect(() => {
        
        fetch('https://jsonplaceholder.typicode.com/todos/?_limit=6')
        .then(data => data.json())
        .then(data => settodo(data))
    }, [])
    
    return (
        <>
            <div className="container my-5">
                <div className="row">
                   {
                       todos.map((todo)=><Todo work={ todo}></Todo> )
                   }
                </div>
            </div>
            
        </>
    )
}

export default Lists
