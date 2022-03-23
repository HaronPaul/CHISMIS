import {Outlet} from 'react-router-dom'
import { useState, useEffect } from 'react'
import useRefreshToken from '../hooks/useRefreshToken'
import { useSelector } from 'react-redux'

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true)
    const refresh = useRefreshToken()
    const {token} = useSelector((state) => state.user)

    useEffect(() => {
        const verifyRefreshToken = async () => {
            try {
                console.log(`Token is ${token}`)
                await refresh()
            } catch(err) {
                console.error(err)
            } finally{
                setIsLoading(false)
            }
        }

        !token? verifyRefreshToken():setIsLoading(false)
    }, [])

    useEffect(() => {
        console.log(`isLoading: ${isLoading}`)
        console.log(`aT: ${JSON.stringify(token)}`)
    }, [isLoading])

    return(
        <>
            {isLoading
                ? <p> Loading ...</p>
                : <Outlet />
            }
        </>
    )
}

export default PersistLogin