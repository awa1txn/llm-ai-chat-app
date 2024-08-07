
export default function Home() {
  return (
    <div className="flex bg-background-basic text-white h-screen">
      <div>
        <img 
        className="absolute h-screen right-0"
        src="login-sidebar.svg"/>
      </div>
      <div className="flex items-center justify-center w-6/12">
      <div className="m-8">
        <img src="/logo.svg"/>
        <div className="mt-20 ml-20">

          <div className="text-2xl font-medium mb-4">
            Let's get <span className="gradient-text text-2xl font-bold">creative!</span>
          </div>

          <div className="text-[#9B9C9E]">
            Log in to Artificium to start creating magic.
          </div>

          <div className="flex mt-12">
          <img
          className="absolute p-3"
          src="/mail.svg"/>
          <input
            type="text"
            className="pl-10 w-96 bg-[#1A1D21] border-[#686B6E] input-gradient-shadow border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
          />
          </div>

          <div className="flex mt-4">
          <img
          className="absolute p-3"
          src="/pass.svg"/>
          <input
            type="text"
            className="pl-10 w-96 bg-[#1A1D21] border-[#686B6E] input-gradient-shadow border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
          />
          </div>

          <div className="flex mt-8 justify-between">
            <div className="flex">
              <input   name="scales" checked
                      type="checkbox" 
                      class="w-6 h-6 accent-[#1A1D21] border-[#686B6E] p-1"/>
              <p className="pl-3 text-lg">Remember me</p>
            </div>

            <div className="gradient-text text-base font-bold">
              Forgot Password?
            </div>

          </div>

          <div className="flex w-96 h-10 mt-8 text-center bg-[#B6F09C] text-[#0C1132] font-semibold text-lg rounded-lg items-center justify-center">
            Log in
          </div>

          <img 
          className="mt-8 w-96"
          src="/login-divider.svg" />

          <div className="mt-8 flex w-96 justify-between">
            <img 
            className="w-44"
            src="/google-account-login.svg"/>
            <img 
            className="w-44"
            src="/apple-account-login.svg"/>
          </div>

        </div>

        <div className="mt-20 text-[#9B9C9E]">
          Don't have an account? <span className="gradient-text text-base font-bold">Sign Up</span>
        </div>
      </div>
      </div>
    </div>
  );
}
