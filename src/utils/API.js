function serialize(obj) {
    var str = []
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]))
      }
    return str.join("&")
  }
  
  export const callAPI = ( path, method = "GET", params = { body: {}, query: {} }, accessToken) => {
    if (path) {
      const requestBody = { ...params.body }
      const token = accessToken
      let endpoint = `https://.....com${path}` // --handle '/' prefix if supplied
      endpoint += "?" + serialize({ ...params.query })
      const fetchOptions = {
        method,
        // withCredentials: true,
        // credentials: 'include',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
      if (
        method.trim().toUpperCase() !== "GET" &&
        method.toUpperCase() !== "HEAD"
      ) {
        fetchOptions.body = JSON.stringify(requestBody)
      }
      return fetch(endpoint, fetchOptions)
        .then((response) => {
          return response.json()
        })
        .then(async (responseJSON) => responseJSON)
        .catch((error) => {
          // console.error(error)
          return null
        })
    } else {
      return `Path is empty`
    }
  }
  