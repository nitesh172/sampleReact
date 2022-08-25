const initialState = {
  authToken: null,
  profile: null,
  server: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        authToken: action.payload.token,
        profile: action.payload.data,
      }

    case "LOGOUT":
      return { ...state, authToken: action.payload }

    case "UPDATEUSER":
      return { ...state, profile: action.payload }

    case "SERVERTIMEOUT":
      return { ...state, server: false }

    default:
      return state
  }
}
