import { FaFacebookF } from "react-icons/fa";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../../Components/GoogleLogin";
import GithubLogin from "../../Components/GithubLogin";
import UseAuth from "../../Hooks/UseAuth";

const Login = () => {
  const navigate = useNavigate();
  const { signIn } = UseAuth();
  const location = useLocation();
  const [error, setError] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await signIn(email, password);
      const user = result.user;
      navigate("/", { state: { form: location } });
      console.log(user);
    } catch (error) {
      // Handle login error
      console.error(error);
      setError("Invalid email or password. Please try again."); // Set error state
    }
  };

  return (
    <>
      <div className=" bg-slate-900">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-shrink-0 w-full mt-16  shadow-2xl lg:px-28">
            {/* ============ */}
            <div className="px-8 mt-8">
              <div>
                <h1 className="text-2xl font-bold text-slate-500 mb-4">
                  Already have an account?
                </h1>
                <p className="text-[14px] font-bold text-slate-500">
                  Use Social Media Credentials
                </p>
              </div>
              <div className="flex justify-center gap-6 mt-6">
                <GoogleLogin></GoogleLogin>
                <GithubLogin></GithubLogin>
                <p className="border-2 text-4xl text-blue-500 bg-slate-200 shadow-xl p-1">
                  <FaFacebookF />
                </p>
              </div>
            </div>

            <div className="divider mt-8 text-white">OR</div>

            {/* ============= */}
            <hr />
            <form
              onSubmit={handleLogin}
              className="card-body text-white border-2 mt-4"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-slate-500">
                    User Email*
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="p-2 border-2 text-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-slate-500">
                    Password*
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="p-2 border-2 text-black"
                  required
                />
                {error && <span className="text-red-400">{error}</span>}
                <label className="">
                  <a href="#" className="text-slate-400 hover:underline">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="mt-6">
                <input
                  className="px-8 py-2 bg-blue-400 border-2 text-white hover:bg-white hover:text-black cursor-pointer"
                  type="submit"
                  value="Login"
                />
              </div>
              <div>
                <p className="text-[12px]">
                  For any issues or assistance, email
                  <a href="" className="underline ml-2 text-blue-500">
                    samialam5671@gmail.com
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
