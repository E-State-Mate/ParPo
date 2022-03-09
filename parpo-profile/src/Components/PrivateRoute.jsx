import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../Lib/authContext'

export default function PrivateRoute({children}) {
    const { currentUser } = useAuth();

    useEffect(() => {
      console.log(currentUser)
    }, [currentUser])

  return currentUser ? children : <Navigate to="/login" />
}