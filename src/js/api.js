import get from 'lodash/get';

const API = process.env.API;
const PER_PAGE = 7;

const checkStatus = response => {
    if (response.ok) {
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      return Promise.reject(error)
    }
  }

  const toJson = response => response.json()
  const extractData = json => get(json, 'data', [])

  const request = (endpoint='') =>
    fetch(`${API}${endpoint}`)
      .then(checkStatus)
      .then(toJson)
      .then(extractData)
  
  export const fetchPopular = (limit = PER_PAGE) =>
    request(`/anime?page[limit]=${limit}&sort=-user_count`)
  
  export const fetchHighestRated = (limit = PER_PAGE) =>
    request(`/trending/anime?limit=${limit}`)
  
  export const fetchTrending = (limit = PER_PAGE) =>
    request(`/anime?page[limit]=${limit}&sort=-average_rating`)





