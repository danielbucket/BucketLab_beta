const login = (req, res) => {

  res.status(200).json({
    loggedIn: true,
    user: {
      name: 'John Doe',
      email: 'johndoe@email.org',
      id: 1
    }
  })
}

const logout = (req, res) => {
  res.status(200).json({
    loggedIn: false,
    user: {}
  })
}

module.exports = {
  login,
  logout
}