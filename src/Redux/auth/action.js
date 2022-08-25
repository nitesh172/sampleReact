import AsyncStorage from "@react-native-async-storage/async-storage"
import { callAPI } from "../../utils/API"

export const Init = (setLoading) => {
  return async (dispatch) => {
    const token = await AsyncStorage.getItem("token")

    if (!token) return setLoading(false)

    let reaction = await callAPI("/auth/profile", "GET", {}, token)

    if (reaction !== null &&  reaction.message === "User not exist") {
      await AsyncStorage.clear()
      return setLoading(false)
    }

    if (reaction !== null) {
      dispatch({
        type: "LOGIN",
        payload: { token: token, data: reaction },
      })
      setLoading(false)
    } else if(reaction === null){
      dispatch({
        type: "SERVERTIMEOUT"
      })
      setLoading(false)
    }
  }
}

export const Login = (data) => {
  return async (dispatch) => {
    await AsyncStorage.setItem("token", data.token)
    dispatch({
      type: "LOGIN",
      payload: data,
    })
  }
}

export const UpdateUser = (data) => {
  return async (dispatch) => {
    dispatch({
      type: "UPDATEUSER",
      payload: data,
    })
  }
}

export const LogOut = () => {
  return async (dispatch) => {
    await AsyncStorage.clear()
    dispatch({
      type: "LOGOUT",
      payload: null,
    })
  }
}
