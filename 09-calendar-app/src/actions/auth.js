export const startLogin = (email, password) => {
  // es asincrono asi que necesita este return
  return () => {
    console.log("desde startLogin")
    console.log(email, password)
  }
}