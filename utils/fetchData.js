import axios from "axios";

export const exerciseOptions = {
    method: 'GET',
    
    headers: {
    //   'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': "exercisedb.p.rapidapi.com",
      // 'X-RapidAPI-Key':  '125d34d4fcmsh6cb060fb9462e6ap13d2c6jsnb947a5fda3e9'
      'X-RapidAPI-Key': '9db52eac7amsh50bf221be8bbe35p195ed1jsnd4ed5fecfe50',
      // "X-RapidAPI-Key": "f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85",

    }  
};

export const FetchData = async(url,options) => {
    const response = await axios.get(url, options)
    const data = await response
    return data
}
 
