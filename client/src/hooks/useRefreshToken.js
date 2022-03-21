import axios from 'axios'
import {useDispatch} from 'react-redux'
import {setUser} from '../redux/userSlice'

const useRefreshToken = () => {
    const dispatch = useDispatch()

    const refresh = async () => {
        const response = await axios.get('http://localhost:')
    }
}

export default useRefreshToken