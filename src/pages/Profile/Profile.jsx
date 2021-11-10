import React from 'react'
import {useHistory} from 'react-router-dom'

export const Profile = () => { 
    const history = useHistory()
    
    let handleCLick = () => history.push('/')
    
    return (
        <div>
           <h1>Welcome, developer21</h1>
           <h2 onClick={handleCLick}>Go back</h2>
        </div>
    )
}
