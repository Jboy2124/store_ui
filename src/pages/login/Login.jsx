import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { styles } from "../../utils/styles/styles";
import { useLoginMutation } from "../../endpoints/handlers/auth-handler";
import { useDispatch } from "react-redux";
import { auth } from "../../endpoints/slices/auth-slice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { showAlert } from "../../utils/swal/sweet-alert";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const [login, { data }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogin(data) {
    if (!data.email || !data.password)
      return Swal.fire(showAlert.error("All fields are required!"));

    login(data);
  }

  function handleResponseData() {
    if (data?.message) return Swal.fire(showAlert.error(data.message));
    else {
      if (data !== undefined) {
        setTimeout(() => {
          dispatch(
            auth({
              id: data?.id,
              email: data?.email,
              user: data?.user,
              role: data?.role,
            })
          );
          reset();
          navigate("/");
        }, 200);
      }
    }
  }
  useEffect(() => {
    handleResponseData();
  }, [data]);

  return (
    <main className="bg-slate-100 font-poppins text-white">
      <section className="container">
        <div className="min-h-screen flex justify-center items-center">
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="relative w-[400px] h-[500px] bg-slate-200 ring-1 ring-slate-300 overflow-hidden shadow-2xl">
              <div className="absolute w-full h-[150px] skew-y-[-6deg] top-[-25px] bg-gradient-to-r from-[#40128B] to-[#9336B4]"></div>
              <div className="relative text-center w-full text-[20px] mt-10">
                Login
              </div>
              <p className="relative text-center text-[13px]">
                Please enter your email & password
              </p>
              <div className="relative mt-10 text-gray-800">
                <div className="w-full">
                  <div className="relative w-full px-14 mt-28">
                    <input
                      name="email"
                      id="email"
                      type="email"
                      placeholder="."
                      className="peer w-full border-b-2 text-[13px] placeholder-transparent border-gray-300 outline-none bg-transparent py-2"
                      {...register("email")}
                    />
                    <label
                      htmlFor="email"
                      className={`absolute px-14 ${styles.label}`}
                    >
                      Email Address
                    </label>
                  </div>

                  <div className="relative w-full px-14 mt-10">
                    <input
                      name="password"
                      id="password"
                      type="password"
                      placeholder="."
                      className="peer w-full border-b-2 text-[13px] placeholder-transparent border-gray-300 outline-none bg-transparent py-2"
                      {...register("password")}
                    />
                    <label
                      htmlFor="password"
                      className={`absolute px-14 ${styles.label}`}
                    >
                      Password
                    </label>
                  </div>
                  <p className="text-[11px] mt-2 text-end px-14">
                    Forgot{" "}
                    <span className="hover:underline underline-offset-4 cursor-pointer">
                      password?
                    </span>
                  </p>

                  <div className=" mt-14 text-center">
                    <button type="submit" className={styles.btnSubmit}>
                      Login
                    </button>
                    <p className="text-[11px] mt-2">
                      Don't have an account yet?{" "}
                      <span className="hover:underline underline-offset-4 cursor-pointer">
                        Register
                      </span>{" "}
                      here.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
