import { useForm } from "react-hook-form"

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  const onSubmit = (data) => {
    console.log("Form data:", data)
    reset()
  }

  return (
    <div id="contact" className="hero min-h-screen mt-6">
      <div className="hero-content text-center w-full">
        <div className="w-full sm:w-[80%] lg:w-[60%]">
          <div className="card card-border bg-base-100 w-full mt-4 p-2">
            <div className="card-body grid grid-cols-1 gap-8 md:grid-cols-2">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 gap-2"
              >
                <h2 className="card-title text-3xl gradient-text mb-4">
                  Let's Work Together!
                </h2>
                
                {/* Name */}
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-info w-full"
                    {...register("name", {
                      required: "This field is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                      maxLength: {
                        value: 20,
                        message: "Name must be at most 20 characters",
                      },
                    })}
                  />
                  <span className="flex items-center gap-1 text-red-400 text-xs min-h-[1.25rem] mt-1">
                    {errors.name ? (
                      <>
                        <i className="ri-error-warning-fill text-sm" />
                        {errors.name.message}
                      </>
                    ) : (
                      "\u00A0"
                    )}
                  </span>
                </div>

                {/* Lastname */}
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Lastname"
                    className="input input-info w-full"
                    {...register("lastname", {
                      required: "This field is required",
                      minLength: {
                        value: 2,
                        message: "Lastname must be at least 2 characters",
                      },
                      maxLength: {
                        value: 20,
                        message: "Lastname must be at most 20 characters",
                      },
                    })}
                  />
                  <span className="flex items-center gap-1 text-red-400 text-xs min-h-[1.25rem] mt-1">
                    {errors.lastname ? (
                      <>
                        <i className="ri-error-warning-fill text-sm" />
                        {errors.lastname.message}
                      </>
                    ) : (
                      "\u00A0"
                    )}
                  </span>
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Email address"
                    className="input input-info w-full"
                    {...register("email", {
                      required: "This field is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  <span className="flex items-center gap-1 text-red-400 text-xs min-h-[1.25rem] mt-1">
                    {errors.email ? (
                      <>
                        <i className="ri-error-warning-fill text-sm" />
                        {errors.email.message}
                      </>
                    ) : (
                      "\u00A0"
                    )}
                  </span>
                </div>

                {/* Phone */}
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="input input-info w-full"
                    {...register("phone", {
                      required: "This field is required",
                      pattern: {
                        value: /^\+?[0-9]{10,}$/,
                        message: "Invalid phone number",
                      },
                      minLength: {
                        value: 10,
                        message:
                          "Phone number must be at least 10 characters",
                      },
                      maxLength: {
                        value: 15,
                        message:
                          "Phone number must be at most 15 characters",
                      },
                    })}
                  />
                  <span className="flex items-center gap-1 text-red-400 text-xs min-h-[1.25rem] mt-1">
                    {errors.phone ? (
                      <>
                        <i className="ri-error-warning-fill text-sm" />
                        {errors.phone.message}
                      </>
                    ) : (
                      "\u00A0"
                    )}
                  </span>
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <textarea
                    placeholder="Type your message here"
                    className="textarea textarea-info w-full"
                    {...register("message", {
                      required: "This field is required",
                      minLength: {
                        value: 5,
                        message: "Message must be at least 5 characters",
                      },
                    })}
                  />
                  <span className="text-gray-400 text-xs text-left min-h-[1.25rem] mt-1">
                    {errors.message ? errors.message.message : "\u00A0"}
                  </span>
                </div>

                <button type="submit" className="btn btn-soft btn-info">
                  Send Message
                </button>
              </form>

              {/* Contact Info */}
              <div className="flex flex-col justify-center items-start gap-4 text-left">
                <div className="flex gap-4 items-center">
                  <i className="ri-mail-line text-4xl text-[#00bafe]"></i>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p>marcoskrause2002@gmail.com</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <i className="ri-phone-fill text-4xl text-[#00bafe]"></i>
                  <div>
                    <p className="text-gray-400">Phone Number</p>
                    <p>(+595) 986 746 209</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <i className="ri-map-pin-2-line text-4xl text-[#00bafe]"></i>
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p>Asuncion, Paraguay</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
