import { getToken } from '@/helpers/localStorage'
import axios from 'axios'

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: 'Bearer ' + getToken(),
	},
})

export default axiosInstance
