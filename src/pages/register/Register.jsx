import React from "react";
import { styles } from "../../utils/styles/styles";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { showAlert } from "../../utils/swal/sweet-alert";
import { useAddProfileMutation } from "../../endpoints/handlers/register-handler";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const [addProfile, { data: response = [], isError, error, isSuccess }] =
    useAddProfileMutation();

  function submitFormInfo(data) {
    if (!data.email && !data.password)
      return Swal.fire(showAlert.error("Email & Password are required!"));

    if (data.password !== data.confirmPassword)
      return Swal.fire(showAlert.error("Password does not match!"));

    addProfile({
      fname: data.fname,
      lname: data.lname,
      gender: data.gender,
      address: data.address,
      contactNo: data.contactNo,
      username: data.email,
      password: data.password,
    });

    console.log(response);
    reset();
  }

  return (
    <main className="bg-slate-100">
      <section className="container">
        <form onSubmit={handleSubmit(submitFormInfo)}>
          <div className="min-h-screen flex justify-center items-center">
            <div className="w-[720px] h-[450px] ring-1 ring-slate-300 bg-slate-200 shadow-2xl flex justify-evenly">
              <div className="w-full">
                <div className="relative w-full px-14 mt-14">
                  <input
                    name="fname"
                    id="fname"
                    type="text"
                    placeholder="."
                    className="peer w-full border-b-2 text-[13px] placeholder-transparent border-gray-300 outline-none bg-transparent py-2"
                    {...register("fname")}
                  />
                  <label
                    htmlFor="fname"
                    className={`absolute px-14 ${styles.label}`}
                  >
                    Firstname
                  </label>
                </div>

                <div className="relative w-full px-14 mt-7">
                  <input
                    name="lname"
                    id="lname"
                    type="text"
                    placeholder="."
                    className="peer w-full border-b-2 text-[13px] placeholder-transparent border-gray-300 outline-none bg-transparent py-2"
                    {...register("lname")}
                  />
                  <label
                    htmlFor="lname"
                    className={`absolute px-14 ${styles.label}`}
                  >
                    Lastname
                  </label>
                </div>

                <div className="relative w-full px-14 mt-7">
                  <select
                    id="gender"
                    name="gender"
                    value="gender"
                    className="w-full border-b-2 text-[13px] placeholder-transparent border-gray-300 outline-none bg-transparent py-2"
                    placeholder="."
                    {...register("gender")}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <label
                    htmlFor="gender"
                    className={`absolute px-14 ${styles.label}`}
                  >
                    Gender
                  </label>
                </div>

                <div className="relative w-full px-14 mt-7">
                  <input
                    name="address"
                    id="address"
                    type="text"
                    placeholder="."
                    className="peer w-full border-b-2 text-[13px] placeholder-transparent border-gray-300 outline-none bg-transparent py-2"
                    {...register("address")}
                  />
                  <label
                    htmlFor="address"
                    className={`absolute px-14 ${styles.label}`}
                  >
                    Address
                  </label>
                </div>

                <div className="relative w-full px-14 mt-7">
                  <input
                    name="contact"
                    id="contact"
                    type="text"
                    placeholder="."
                    className="peer w-full border-b-2 text-[13px] placeholder-transparent border-gray-300 outline-none bg-transparent py-2"
                    {...register("contactNo")}
                  />
                  <label
                    htmlFor="contact"
                    className={`absolute px-14 ${styles.label}`}
                  >
                    Contact No.
                  </label>
                </div>
              </div>

              <div className="w-full bg-gradient-to-r from-[#40128B] to-[#9336B4]">
                <div className="relative w-full px-14 mt-[110px]">
                  <input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="."
                    autoComplete="false"
                    className="peer w-full border-b-2 text-[13px] text-white placeholder-transparent border-white outline-none bg-transparent py-2"
                    {...register("email")}
                  />
                  <label
                    htmlFor="email"
                    className={`absolute px-14 ${styles.label}`}
                  >
                    Email Address
                  </label>
                </div>

                <div className="relative w-full px-14 mt-7">
                  <input
                    name="password"
                    id="password"
                    type="password"
                    placeholder="."
                    className="peer w-full border-b-2 text-[13px] text-white placeholder-transparent border-white outline-none bg-transparent py-2"
                    {...register("password")}
                  />
                  <label
                    htmlFor="password"
                    className={`absolute px-14 ${styles.label}`}
                  >
                    Password
                  </label>
                </div>

                <div className="relative w-full px-14 mt-7">
                  <input
                    name="confirmPassword"
                    id="confirmPassword"
                    type="password"
                    placeholder="."
                    className="peer w-full border-b-2 text-[13px] text-white placeholder-transparent border-white outline-none bg-transparent py-2"
                    {...register("confirmPassword")}
                  />
                  <label
                    htmlFor="confirmPassword"
                    className={`absolute px-14 ${styles.label}`}
                  >
                    Confirm Password
                  </label>
                </div>

                <div className="w-full flex justify-center items-center mt-16">
                  <button type="submit" className={styles.btnSubmit}>
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Register;
