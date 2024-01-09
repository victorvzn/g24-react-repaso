const Login = () => {
  return (
    <form className="w-96 mx-auto">
      <h1 className="text-center text-3xl mb-8">Budget App - Login</h1>

      <div className="flex flex-col gap-4 bg-slate-100 p-8 shadow-lg rounded-lg">
        <label className="font-medium">
          Email
          <input
            type="text"
            name="email"
            placeholder="jhon@mail.com"
            className="border w-full p-3"
          />
        </label>

        <label className="font-medium">
          Password
          <input
            type="password"
            name="password"
            placeholder="123456789"
            className="border w-full p-3"
          />
        </label>

        <input
          type="submit"
          value="Login"
          className="w-full bg-amber-600 p-3 font-medium hover:bg-amber-500 hover:duration-300 cursor-pointer"
        />
      </div>
    </form>
  )
}

export default Login