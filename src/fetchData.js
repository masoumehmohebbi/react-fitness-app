import axios from "axios";

export const exerciseOptions = {
    method: 'GET',
    
    headers: {
    //   'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Key': '125d34d4fcmsh6cb060fb9462e6ap13d2c6jsnb947a5fda3e9',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const FetchData = async(url,options) => {
    const response = await axios.get(url, options)
    const data = await response
    return data
}
 