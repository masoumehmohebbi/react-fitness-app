import axios from "axios";

export const exerciseOptions = {
    method: 'GET',
    
    headers: {
    //   'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': "exercisedb.p.rapidapi.com",
      // 'X-RapidAPI-Key':  '125d34d4fcmsh6cb060fb9462e6ap13d2c6jsnb947a5fda3e9'
      // 'X-RapidAPI-Key':  'f6f1310788mshc1152382ad06a25p166e3ajsn83b903926726'
      'X-RapidAPI-Key':  ' bd9ec4b8bbmsh477922810441ea4p1c48bbjsn82f93792faeb'
     
    }  
};

export const FetchData = async(url,options) => {
    const response = await axios.get(url, options)
    const data = await response
    return data
}
 