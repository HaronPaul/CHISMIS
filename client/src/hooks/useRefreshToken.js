import axios from '../api/axios'
import {useDispatch, useSelector} from 'react-redux'
import {changeToken} from '../redux/userSlice'

const useRefreshToken = () => {
    const dispatch = useDispatch()
    const {token} = useSelector((state) => state.user)

    const refresh = async () => {
        const response = await axios.get('/refresh', {
            withCredentials: true
        })
        console.log('Response from refresh route: ')
        console.log(response)
        dispatch(changeToken({accessToken: response.data.accessToken, role: response.data.role}))
        return response.data.accessToken
    }
    
    return refresh
}

export default useRefreshToken