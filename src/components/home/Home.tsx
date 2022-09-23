import React, { useEffect } from 'react'
import AddUserForm from './AddUserForm'
import UsersList from '../users/UsersList'
import { getUsers } from '../../actions/users.actions'
import SearchBar  from './SearchBar'

const Home = ():JSX.Element => {

    useEffect(() => {
        getUsers();
    },[])

    return (
        <div className="container ">
            <div className="row center-align">
            <div className="toolbar">
                <button className="btn green">Toggle Add</button>
                <SearchBar/>
            </div>
                <AddUserForm />
                <UsersList/> 
            </div>
        </div>
    )
}

export default Home
