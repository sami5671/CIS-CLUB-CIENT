import { useNavigate } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Login from "../Login/Login";
import useAxiosPublic from "./../../Hooks/UseAxiosPublic";
import UseAuth from "./../../Hooks/UseAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import GoogleLogin from "../../Components/GoogleLogin";
import GithubLogin from "../../Components/GithubLogin";
const SignUp = () => {
  // =================================================================
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  // ----------------------------------------------------------------
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUserProfile } = UseAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const isPasswordValid = (password) => {
    // Add your password validation logic here
    // For example: at least one uppercase, one lowercase, and one special character
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    return (
      uppercaseRegex.test(password) &&
      lowercaseRegex.test(password) &&
      specialCharRegex.test(password)
    );
  };

  const onSubmit = async (data) => {
    const imageFile = { image: data.photoURL[0] };
    const imageRes = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const imageUrl = imageRes.data.data.display_url;

    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;

        updateUserProfile(data.name, imageUrl)
          .then(() => {
            const userInfo = {
              name: data.name,
              email: data.email,
              photoURL: data.photoURL,
            };

            axiosPublic
              .post("/users", userInfo)
              .then((res) => {
                if (res.data.insertedId) {
                  reset();
                  Swal.fire("User created successfully");
                  navigate("/");
                } else {
                  Swal.fire("Error creating user entry in the database");
                }
              })
              .catch((error) => {
                console.error("Error creating user entry:", error.message);
                Swal.fire({
                  icon: "error",
                  title: "Error",
                  text: error.message,
                });
              });
          })
          .catch((error) => {
            console.error("Error updating user profile:", error.message);
            Swal.fire({
              icon: "error",
              title: "Error",
              text: error.message,
            });
          });
      })
      .catch((error) => {
        console.error("Error creating user:", error.message);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message,
        });
      });
  };
  // =================================================================
  return (
    <>
      <h1 className="text-white mb-11">page</h1>
      <Tabs>
        <TabList>
          <Tab>
            <span className="text-amber-800">Login</span>{" "}
          </Tab>
          <Tab>Sign Up</Tab>
        </TabList>
        <TabPanel>
          <Login />
        </TabPanel>
        <TabPanel>
          <div className=" bg-slate-900">
            <div className="hero-content flex-col lg:flex-row-reverse -mt-12">
              <div className="flex-shrink-0 w-full shadow-2xl p-2 mt-16 lg:px-28">
                {/* ============ */}
                <div className="px-8 mt-8">
                  <div>
                    <h1 className="text-2xl font-bold text-slate-500 mb-4">
                      Create Your User Account
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

                <div className="divider mt-8">OR</div>
                {/* ============= */}

                <form onSubmit={handleSubmit(onSubmit)} className="text-white">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold text-slate-500">
                        UserName*
                      </span>
                    </label>
                    <input
                      type="text"
                      {...register("name", { required: true })}
                      placeholder="name"
                      className="p-2 border-2 text-slate-800"
                      required
                    />
                    {errors.name && (
                      <span className="text-red-400">
                        name field is required
                      </span>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold text-slate-500">
                        Choose Your Photo*
                      </span>
                    </label>
                    <input
                      type="file"
                      {...register("photoURL", { required: true })}
                      placeholder="photo URL"
                      className="p-2 border-2 text-lime-400"
                      required
                    />
                    {errors.photoURL && (
                      <span className="text-red-400">photoURL is required</span>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold text-slate-500">
                        Email
                      </span>
                    </label>
                    <input
                      type="email"
                      {...register("email", { required: true })}
                      placeholder="email"
                      className="p-2 border-2 text-slate-800"
                      required
                    />
                    {errors.email && (
                      <span className="text-red-400">
                        Email field is required
                      </span>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold text-slate-500">
                        Password
                      </span>
                    </label>
                    <input
                      type="password"
                      {...register("password", {
                        required: "Password is required",
                        validate: (value) =>
                          isPasswordValid(value) ||
                          "Password must be one uppercase, one lowercase & one special character ",
                      })}
                      placeholder="password"
                      className="p-2 border-2 text-slate-800"
                      required
                    />
                    {errors.password && (
                      <span className="text-red-400">
                        {errors.password.message}
                      </span>
                    )}
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="mt-6">
                    <input
                      className="px-8 py-2 bg-blue-400 border-2 text-white hover:bg-white hover:text-black cursor-pointer"
                      type="submit"
                      value="Register"
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
        </TabPanel>
      </Tabs>
    </>
  );
};

export default SignUp;
