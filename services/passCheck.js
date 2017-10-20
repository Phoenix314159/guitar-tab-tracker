module.exports = password => {
  const regEx = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/
  return regEx.test(password) // if password matches regex return true to break block
}
