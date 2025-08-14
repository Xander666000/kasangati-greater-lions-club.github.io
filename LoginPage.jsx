import React, {useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [sending, setIsSending] = useState(false)


//   handle submit function
  const handleSubmit = (e) => {
    e.preventDefault()
    // login logic here...
    console.log('logging in...')
  }


  return (
    <div className="py-20 bg-[whitesmoke] px-3 mt-20">
      <form
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md m-auto"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold mb-4 text-black font-lato">Login to your account</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            className="w-full p-2 rounded bg-[rgba(3,160,181,0.41)] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
            name="username"
            maxLength={10}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            className="w-full p-2 rounded bg-[rgba(3,160,181,0.41)] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
            name="password"
            maxLength={20}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          disabled={sending}
          type="submit"
          className={`w-full bg-teal-500 text-white p-2 mt-3 rounded hover:bg-teal-600 transition ${
            sending ? 'opacity-50' : ''
          }`}
        >
          {sending ? 'Logging in...' : 'Login'}
        </button>

        <p className="mt-5 font-roboto">
          Don't have an account? <Link to="/register" className="text-blue-800">Register</Link>
        </p>
      </form>
    </div>
  )
}

export default Login
