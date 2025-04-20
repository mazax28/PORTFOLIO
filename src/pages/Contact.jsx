import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";
import { sendContactEmail } from "../services/emailjs";
import { toast } from "react-hot-toast";
import { motion, useInView } from "framer-motion";

function Contact() {
  const { t } = useTranslation("global");
  const [copied, setCopied] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: custom },
    }),
  };

  const handleCopy = (text,type) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type);
      setTimeout(() => setCopied(false), 1500);
    });
  };

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

  const onSubmit = async (data) => {
    try {
      await sendContactEmail(data);
      toast.success(t("success.success_send_message"), {
        duration: 4000,
        position: "top-right",
        style: {
          background: "#333",
          color: "#fff",
        },
      });
      reset();
    } catch (error) {
      toast.error(t("error.error_send_message_fail"), {
        duration: 4000,
        position: "top-right",
        style: {
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  return (
    <div id="contact" className="hero min-h-screen mt-4" ref={ref}>
      <div className="hero-content text-center w-full">
        <motion.div
          className="w-full sm:w-[80%] lg:w-[60%]"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          <motion.div
            className="card bg-white/5 backdrop-blur-md shadow-md w-full mt-4 p-4"
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="card-body grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Formulario */}
              <motion.form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 gap-1"
                custom={0.4}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <motion.h2
                  className="card-title text-3xl gradient-text mb-4"
                  custom={0.6}
                  variants={fadeUp}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  {t("contact.title")}
                </motion.h2>

                {/* Inputs con errores */}
                {["name", "lastname", "email", "phone"].map((field, index) => (
                  <motion.div
                    className="flex flex-col"
                    key={field}
                    custom={0.8 + index * 0.1}
                    variants={fadeUp}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    <input
                      type="text"
                      placeholder={t(`contact.i_${field}`)}
                      className="input input-info w-full bg-white/10 backdrop-blur-sm border-none"
                      {...register(field, {
                        required: t("error.error_required"),
                        ...(field === "email" && {
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: t("error.error_email_invalid"),
                          },
                        }),
                        ...(field === "phone" && {
                          pattern: {
                            value: /^\+?[0-9]{10,}$/,
                            message: t("error.error_phone_invalid"),
                          },
                          minLength: { value: 10, message: t("error.error_phone_min") },
                          maxLength: { value: 15, message: t("error.error_phone_max") },
                        }),
                        ...(field === "name" && {
                          minLength: { value: 2, message: t("error.error_name_min") },
                          maxLength: { value: 20, message: t("error.error_name_max") },
                        }),
                        ...(field === "lastname" && {
                          minLength: { value: 2, message: t("error.error_lastname_min") },
                          maxLength: { value: 20, message: t("error.error_lastname_max") },
                        }),
                      })}
                    />
                    <span className="flex items-center gap-1 text-red-400 text-xs min-h-[1.25rem] mt-1">
                      {errors[field] ? (
                        <>
                          <i className="ri-error-warning-fill text-sm" />
                          {errors[field].message}
                        </>
                      ) : (
                        "\u00A0"
                      )}
                    </span>
                  </motion.div>
                ))}

                {/* Mensaje */}
                <motion.div
                  className="flex flex-col"
                  custom={1.2}
                  variants={fadeUp}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <textarea
                    placeholder={t("contact.i_message")}
                    className="textarea textarea-info w-full bg-white/10 backdrop-blur-sm border-none"
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
                </motion.div>

                <motion.button
                  type="submit"
                  className="btn btn-soft btn-info"
                  custom={1.4}
                  variants={fadeUp}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  {t("contact.i_send")}
                </motion.button>
              </motion.form>

              {/* Info de contacto */}
              <motion.div
                className="flex flex-col justify-center items-start gap-4 text-left"
                custom={0.6}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <motion.div
                  className="flex gap-4 items-center"
                  custom={0.8}
                  variants={fadeUp}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <i className="ri-mail-line text-4xl text-[#00bafe]"></i>
                  <div>
                    <p className="text-gray-400">{t("contact.email")}</p>
                    <div className="flex gap-2 items-center">
                      <p className={`${copied === 'email' ? 'text-[#00bafe]' : ''}  transition-colors duration-300`}>marcoskrause2002@gmail.com</p>
                      <i
                        onClick={() => handleCopy("marcoskrause2002@gmail.com",'email')}
                        className="ri-file-copy-line cursor-pointer text-[#00bafe] transition-colors duration-200 hover:text-[#008ac4]"
                      ></i>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="flex gap-4 items-center"
                  custom={1.0}
                  variants={fadeUp}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <i className="ri-phone-fill text-4xl text-[#00bafe]"></i>
                  <div>
                    <p className="text-gray-400">{t("contact.phone")}</p>
                    <div className="flex gap-2 items-center">
                      <p className={`${copied === 'number' ? 'text-[#00bafe]' : ''}  transition-colors duration-300`} >(+595) 986 746 209</p>
                      <i value='number'
                        onClick={() => handleCopy("(+595) 986 746 209",'number' )}
                        className="ri-file-copy-line cursor-pointer text-[#00bafe] transition-colors duration-200 hover:text-[#008ac4]"
                      ></i>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="flex gap-4 items-center"
                  custom={1.2}
                  variants={fadeUp}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <i className="ri-map-pin-2-line text-4xl text-[#00bafe]"></i>
                  <div>
                    <p className="text-gray-400">{t("contact.location")}</p>
                    <p>Asunción, Paraguay</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;