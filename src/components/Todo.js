import React from 'react'

const Todo = () => {
    return (
        <>
            <div className="col-md-4 my-3">
                        <div className="card shadow">
                            <div className="card-header bg-dark text-white">
                                <h4>To Do List</h4>
                            </div>
                            <div className="card-body">
                                <ul class="list-group">
                                    <li class="list-group-item active">Main Task: </li>
                                    <li class="list-group-item">Optional Study</li>
                                    <li class="list-group-item"> Check Fridge for food</li>
                                </ul>
                            </div>
                            <div className="card-footer">
                                <h6> Completion Status: True</h6>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default Todo
