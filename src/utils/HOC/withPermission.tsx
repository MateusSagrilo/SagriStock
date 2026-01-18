import React, { FC, ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux'
import { useNavigate } from 'react-router-dom'

type Role = 'admin' | 'customer' | undefined

const withPermission = (roles: Role[], redirect = '') => 
  (Component: FC<any>): FC<any> => 
  (props: any): ReactNode => {
    const navigate = useNavigate()
    const auth = useSelector((state: RootState) => ({
      profile: state.authentication.profile
    }))

    if (!roles.includes(auth.profile?.role)) {
      if (redirect) {
        navigate(redirect)
      }
      return null
    }

    return <Component {...props} />
  }

export default withPermission