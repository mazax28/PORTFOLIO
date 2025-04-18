import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Contact() {
  const { t } = useTranslation("global");
  const [copied, setCopied] = useState(false)

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }


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
  });

  const onSubmit = (data) => {
    console.log("Form data:", data);
    reset();
  };

  return (
    <div id="contact" className="hero min-h-screen mt-4">
      <div className="hero-content text-center w-full">
        <div className="w-full sm:w-[80%] lg:w-[60%]">
          <div className="card card-border bg-base-100 w-full mt-4 p-2">
            <div className="card-body grid grid-cols-1 gap-8 md:grid-cols-2">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 gap-2"
              >
                <h2 className="card-title text-3xl gradient-text mb-4">
                  {t("contact.title")}
                </h2>

                {/* Name */}
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder={t("contact.i_name")}
                    className="input input-info w-full"
                    {...register("name", {
                      required: t("error.error_required"),
                      minLength: {
                        value: 2,
                        message: t("error.error_name_min"),
                      },
                      maxLength: {
                        value: 20,
                        message: t("error.error_name_max"),
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
                    placeholder={t("contact.i_lastname")}
                    className="input input-info w-full"
                    {...register("lastname", {
                      required: t("error.error_required"),
                      minLength: {
                        value: 2,
                        message: t("error.error_lastname_min"),
                      },
                      maxLength: {
                        value: 20,
                        message: t("error.error_lastname_max"),
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
                    placeholder={t("contact.i_email")}
                    className="input input-info w-full"
                    {...register("email", {
                      required: t("error.error_required"),
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: t("error.error_email_invalid"),
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
                    placeholder={t("contact.i_phone")}
                    className="input input-info w-full"
                    {...register("phone", {
                      required: t("error.error_required"),
                      pattern: {
                        value: /^\+?[0-9]{10,}$/,
                        message: t("error.error_phone_invalid"),
                      },
                      minLength: {
                        value: 10,
                        message: t("error.error_phone_min"),
                      },
                      maxLength: {
                        value: 15,
                        message: t("error.error_phone_max"),
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
                    placeholder={t("contact.i_message")}
                    className="textarea textarea-info w-full"
                    {...register("message", {
                      required: t("error.error_required"),
                      minLength: {
                        value: 5,
                        message: t("error.error_message_min"),
                      },
                    })}
                  />
                  <span className="text-gray-400 text-xs text-left min-h-[1.25rem] mt-1">
                    {errors.message ? errors.message.message : "\u00A0"}
                  </span>
                </div>

                <button type="submit" className="btn btn-soft btn-info">
                  {t("contact.i_send")}
                </button>
              </form>

              {/* Contact Info */}
              <div className="flex flex-col justify-center items-start gap-4 text-left">
                <div className="flex gap-4 items-center">
                  <i className="ri-mail-line text-4xl text-[#00bafe]"></i>
                  <div>
                    <p className="text-gray-400">{t("contact.email")}</p>
                    <div className="flex gap-2">
                      <p>marcoskrause2002@gmail.com</p>
                      <i         onClick={() => handleCopy("marcoskrause2002@gmail.com")}
 class="ri-file-copy-line cursor-pointer text-[#00bafe] transition-colors duration-200 hover:text-[#008ac4]"></i>


                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <i className="ri-phone-fill text-4xl text-[#00bafe]"></i>
                  <div>
                    <p className="text-gray-400">{t("contact.phone")}</p>
                    <div className="flex gap-2">
                      <p>(+595) 986 746 209</p>
                      <i         onClick={() => handleCopy("(+595) 986 746 209")}
 class="ri-file-copy-line cursor-pointer text-[#00bafe] transition-colors duration-200 hover:text-[#008ac4]"></i>

                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <i className="ri-map-pin-2-line text-4xl text-[#00bafe]"></i>
                  <div>
                    <p className="text-gray-400">{t("contact.location")}</p>
                    <p>Asunción, Paraguay</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
