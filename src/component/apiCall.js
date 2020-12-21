import axios from 'axios'
import { CONFIG } from './config'

export const apiCall = async (cityName) => {
    const { data } = await axios.get(CONFIG.WEATHER_API_URL, {
        params: {
            q: cityName,
            units: 'metric',
            APPID: CONFIG.WEATHER_API_KEY,
        }
    });

    return data;
}






