import React from 'react'
import useInput from '../../customhook/useInput'

import { addUser } from '../../actions/users.actions';

const AddUserForm = (): JSX.Element => {
    const {value: name, bind: bindName, reset: resetName} = useInput("");
    const {value: username, bind: bindUsername, reset: resetUsername} = useInput("");
    const {value: email, bind: bindEmail, reset: resetEmail} = useInput("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addUser({ name, username, email });
        resetEmail();
        resetName();
        resetUsername();
    }

    return (
        <div className="section">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">New User</h5>
                <div className="input-field ">
                    <input id="new_name" type="text" className="validate" {...bindName} />
                    <label htmlFor="new_name">Name</label>
                </div>
                <div className="input-field ">
                    <input id="new_username" type="text" className="validate" {...bindUsername} />
                    <label htmlFor="new_username">Username</label>
                </div>
                <div className="input-field">
                    <input id="new_email" type="text" className="validate" {...bindEmail} />
                    <label htmlFor="new_email">Email</label>
                </div>
                <button className="btn green">Add</button>
            </form>
        </div>
    )
}

export default AddUserForm
