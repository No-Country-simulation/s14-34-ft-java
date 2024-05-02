"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/shemas/shemas";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { useState } from "react";
import {
  PhoneInput,
  defaultCountries,
  parseCountry,
} from "react-international-phone";
//import 'react-international-phone/style.css';
import "./input-phone.css";
import Swal from "sweetalert2";
import Image from "next/image";

interface Register {
  nombrecompleto: string;
  email: string;
  password: string;
  confirmPassword: string;
  terminos: boolean;
}

export default function FormRegister() {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleTogglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  const countries = defaultCountries.filter((country) => {
    const { iso2 } = parseCountry(country);
    return [
      "es",
      "mx",
      "ar",
      "co",
      "pe",
      "ve",
      "cl",
      "ec",
      "gt",
      "cu",
      "bo",
      "do",
      "hn",
      "py",
      "sv",
      "ni",
      "cr",
      "uy",
      "pr",
      "pa",
      "gq",
    ].includes(iso2);
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<Register>({
    resolver: zodResolver(RegisterSchema),
  });

  // mensaje de exito
  function showAlert() {
    Swal.fire({
      title: "Registro exitoso",
      icon: "success",
      background: "#FAFAFA",
      confirmButtonColor: "#DF8B3F",
      footer: '<a href="/auth/login">Puedes Ingresar</a>',
    });
  }
  //   mensaje de error
  function showAlert2() {
    Swal.fire({
      title: "Oops... Ocurrio un problema en el servidor",
      icon: "error",
      background: "#FAFAFA",
      confirmButtonColor: "#DF8B3F",
      confirmButtonText: "Cerrar",
    });
  }

  function showAlert3() {
    Swal.fire({
      title: "Oops... Cuenta Existente",
      icon: "error",
      background: "#FAFAFA",
      confirmButtonColor: "#DF8B3F",
      confirmButtonText: "Cerrar",
    });
  }

  const isPhoneValid = (phone: string): boolean => {
    const numericPhone = phone.replace(/\D/g, "");

    const minDigits = 7;
    const maxDigits = 20;

    const numberOfDigits = numericPhone.length;
    return numberOfDigits >= minDigits && numberOfDigits <= maxDigits;
  };

  const onSubmit: SubmitHandler<Register> = async (data) => {
    try {
      if (data.password !== data.confirmPassword) {
        setError("confirmPassword", {
          type: "manual",
          message: "Passwords no coinciden",
        } as any);
        return;
      }

      const [firstName, lastName] = data.nombrecompleto.split(" ");

      const formData = {
        firstName,
        lastName,
        phone,
        email: data.email,
        password: data.password,
      };
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`,
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.ok) {
        setSuccessMessage("¡Registro exitoso!");
        showAlert();
      } else {
        setErrorMessage("Error en la solicitud de registro");
        showAlert2();
      }
      if (res.status == 403) {
        showAlert3();
      }

      console.log("Código de respuesta:", res.status);
    } catch (error) {
      setErrorMessage("Error en la solicitud de registro");
    }
  };

  return (
    <div className="bg-register bg-cover bg-center mt-24">
      <div className="mt-20 mb-20 ml-36 w-[658px] h-[1262px] p-[60px] bg-white rounded-2xl shadow-sm backdrop-blur-[25px] flex-col justify-start items-start gap-[50px] inline-flex">
        <div className="self-stretch grow shrink basis-0 flex-col justify-start items-center gap-8 flex">
          <div className="h-[100px] mb-10">
            <Image
              src="/logo/logoverde.svg"
              alt="logo"
              className="object-contain"
              width="500"
              height="100"
            />
          </div>
          <div className="self-stretch h-[95px] flex-col justify-start items-center gap-12 flex">
            <div className="self-stretch h-[95px] flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch justify-between items-center inline-flex">
                <div
                  className="grow shrink basis-0 self-stretch text-center text-black
text-[38px]
font-medium"
                >
                  Crea tu cuenta
                </div>
              </div>
              <div
                className="self-stretch text-center text-black
text-[22px]
font-medium"
              >
                Por favor, ingresa los datos requeridos
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="self-stretch h-[231px] flex-col justify-start items-start gap-6 flex"
              >
                <div className="self-stretch h-[85px] flex-col justify-start items-start flex">
                  <div className="px-4 py-2 justify-start items-center gap-2.5 inline-flex">
                    <div className="text-black text-lg font-semibold">
                      Nombre y Apellido
                    </div>
                  </div>
                  <input
                    type="text"
                    id="nombrecompleto"
                    autoComplete="given-name"
                    placeholder="Nombre y Apellido"
                    {...register("nombrecompleto")}
                    className="self-stretch px-4 py-3 bg-white rounded-xl border border-orange-400 justify-start items-center gap-3 inline-flex"
                  />
                  {errors.nombrecompleto && (
                    <span className="text-red-500">Campo requerido</span>
                  )}
                </div>
                <div className="self-stretch h-[85px] flex-col justify-start items-start flex">
                  <div className="px-4 py-2 justify-start items-center gap-2.5 inline-flex">
                    <div className="text-black text-lg font-semibold">
                      Email
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      autoComplete="given-name"
                      placeholder="Ingresa tu Email"
                      {...register("email")}
                      className="self-stretch px-4 py-3 bg-white rounded-xl border border-orange-400 justify-start items-center gap-3 inline-flex w-[540px] placeholder-padding input[type=email]"
                      style={{
                        padding: "10px",
                        paddingLeft: "40px",
                        textIndent: "0px",
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg width='54' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='mail'%3E%3Cmask id='mask0_1408_1168' maskUnits='userSpaceOnUse' x='0' y='0' width='24' height='25'%3E%3Crect id='Bounding box' y='0.669922' width='24' height='24' fill='%23D9D9D9'/%3E%3C/mask%3E%3Cg mask='url(%23mask0_1408_1168)'%3E%3Cpath id='mail_2' d='M4 20.6699C3.45 20.6699 2.97917 20.4741 2.5875 20.0824C2.19583 19.6908 2 19.2199 2 18.6699V6.66992C2 6.11992 2.19583 5.64909 2.5875 5.25742C2.97917 4.86576 3.45 4.66992 4 4.66992H20C20.55 4.66992 21.0208 4.86576 21.4125 5.25742C21.8042 5.64909 22 6.11992 22 6.66992V18.6699C22 19.2199 21.8042 19.6908 21.4125 20.0824C21.0208 20.4741 20.55 20.6699 20 20.6699H4ZM12 13.4949C12.0833 13.4949 12.1708 13.4824 12.2625 13.4574C12.3542 13.4324 12.4417 13.3949 12.525 13.3449L19.6 8.91992C19.7333 8.83659 19.8333 8.73242 19.9 8.60742C19.9667 8.48242 20 8.34492 20 8.19492C20 7.86159 19.8583 7.61159 19.575 7.44492C19.2917 7.27826 19 7.28659 18.7 7.46992L12 11.6699L5.3 7.46992C5 7.28659 4.70833 7.28242 4.425 7.45742C4.14167 7.63242 4 7.87826 4 8.19492C4 8.36159 4.03333 8.50742 4.1 8.63242C4.16667 8.75742 4.26667 8.85326 4.4 8.91992L11.475 13.3449C11.5583 13.3949 11.6458 13.4324 11.7375 13.4574C11.8292 13.4824 11.9167 13.4949 12 13.4949Z' fill='%23DF8B3F'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "left center ",
                      }}
                    />
                  </div>
                  {errors.email && (
                    <span className="text-red-500">Campo requerido</span>
                  )}
                </div>
                <div className="self-stretch h-[85px] flex-col justify-start items-start flex">
                  <div className="px-4 py-2 justify-start items-center gap-2.5 inline-flex">
                    <div className="text-black text-lg font-semibold">
                      Telefono
                    </div>
                  </div>
                  <PhoneInput
                    defaultCountry="ar"
                    value={phone}
                    onChange={setPhone}
                    countries={countries}
                    className=""
                  />
                  {isPhoneValid(phone) && (
                    <div style={{ color: "green" }}>Campo Verificado</div>
                  )}
                  {!isPhoneValid(phone) && (
                    <div style={{ color: "grey" }}>Campo requerido</div>
                  )}
                </div>
                <div className="self-stretch h-[85px] flex-col justify-start items-start flex">
                  <div className="px-4 py-2 justify-start items-center gap-2.5 inline-flex">
                    <div className="text-black text-lg font-semibold">
                      Contraseña
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="Ingresa tu contraseña"
                      autoComplete="given-name"
                      {...register("password")}
                      className="self-stretch px-4 py-3 bg-white rounded-xl border border-orange-400 justify-start items-center gap-3 inline-flex w-[540px] placeholder-padding input[type=password]"
                      style={{
                        padding: "10px",
                        paddingLeft: "40px",
                        textIndent: "0px",
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg width='54' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='key'%3E%3Cmask id='mask0_1408_1814' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='24' height='25'%3E%3Crect id='Bounding box' y='0.669922' width='24' height='24' fill='%23D9D9D9'/%3E%3C/mask%3E%3Cg mask='url(%23mask0_1408_1814)'%3E%3Cpath id='key_2' d='M7 15.6699C6.16667 15.6699 5.45833 15.3783 4.875 14.7949C4.29167 14.2116 4 13.5033 4 12.6699C4 11.8366 4.29167 11.1283 4.875 10.5449C5.45833 9.96159 6.16667 9.66992 7 9.66992C7.83333 9.66992 8.54167 9.96159 9.125 10.5449C9.70833 11.1283 10 11.8366 10 12.6699C10 13.5033 9.70833 14.2116 9.125 14.7949C8.54167 15.3783 7.83333 15.6699 7 15.6699ZM7 18.6699C8.28333 18.6699 9.44167 18.3033 10.475 17.5699C11.5083 16.8366 12.2333 15.8699 12.65 14.6699H13L14.3 15.9699C14.4 16.0699 14.5083 16.1408 14.625 16.1824C14.7417 16.2241 14.8667 16.2449 15 16.2449C15.1333 16.2449 15.2583 16.2241 15.375 16.1824C15.4917 16.1408 15.6 16.0699 15.7 15.9699L17 14.6699L18.75 16.0449C18.85 16.1283 18.9625 16.1908 19.0875 16.2324C19.2125 16.2741 19.3417 16.2866 19.475 16.2699C19.6083 16.2533 19.7292 16.2158 19.8375 16.1574C19.9458 16.0991 20.0417 16.0199 20.125 15.9199L22.375 13.3449C22.4583 13.2449 22.5208 13.1366 22.5625 13.0199C22.6042 12.9033 22.625 12.7783 22.625 12.6449C22.625 12.5116 22.6 12.3908 22.55 12.2824C22.5 12.1741 22.4333 12.0783 22.35 11.9949L21.325 10.9699C21.225 10.8699 21.1125 10.7949 20.9875 10.7449C20.8625 10.6949 20.7333 10.6699 20.6 10.6699H12.65C12.25 9.53659 11.5458 8.58659 10.5375 7.81992C9.52917 7.05326 8.35 6.66992 7 6.66992C5.33333 6.66992 3.91667 7.25326 2.75 8.41992C1.58333 9.58659 1 11.0033 1 12.6699C1 14.3366 1.58333 15.7533 2.75 16.9199C3.91667 18.0866 5.33333 18.6699 7 18.6699Z' fill='%23DF8B3F'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "left center",
                      }}
                    />
                    <div
                      className="icon"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <i className="fas fa-eye-slash">
                          <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="Component 41">
                              <mask
                                id="mask0_1408_1818"
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="24"
                                height="25"
                              >
                                <rect
                                  id="Bounding box"
                                  y="0.669922"
                                  width="24"
                                  height="24"
                                  fill="#D9D9D9"
                                />
                              </mask>
                              <g mask="url(#mask0_1408_1818)">
                                <path
                                  id="visibility"
                                  d="M11.9984 16.6699C13.2484 16.6699 14.3109 16.2324 15.1859 15.3574C16.0609 14.4824 16.4984 13.4199 16.4984 12.1699C16.4984 10.9199 16.0609 9.85742 15.1859 8.98242C14.3109 8.10742 13.2484 7.66992 11.9984 7.66992C10.7484 7.66992 9.68594 8.10742 8.81094 8.98242C7.93594 9.85742 7.49844 10.9199 7.49844 12.1699C7.49844 13.4199 7.93594 14.4824 8.81094 15.3574C9.68594 16.2324 10.7484 16.6699 11.9984 16.6699ZM11.9984 14.8699C11.2484 14.8699 10.6109 14.6074 10.0859 14.0824C9.56094 13.5574 9.29844 12.9199 9.29844 12.1699C9.29844 11.4199 9.56094 10.7824 10.0859 10.2574C10.6109 9.73242 11.2484 9.46992 11.9984 9.46992C12.7484 9.46992 13.3859 9.73242 13.9109 10.2574C14.4359 10.7824 14.6984 11.4199 14.6984 12.1699C14.6984 12.9199 14.4359 13.5574 13.9109 14.0824C13.3859 14.6074 12.7484 14.8699 11.9984 14.8699ZM11.9984 19.6699C9.7651 19.6699 7.7276 19.0699 5.88594 17.8699C4.04427 16.6699 2.5901 15.0866 1.52344 13.1199C1.4401 12.9699 1.3776 12.8158 1.33594 12.6574C1.29427 12.4991 1.27344 12.3366 1.27344 12.1699C1.27344 12.0033 1.29427 11.8408 1.33594 11.6824C1.3776 11.5241 1.4401 11.3699 1.52344 11.2199C2.5901 9.25326 4.04427 7.66992 5.88594 6.46992C7.7276 5.26992 9.7651 4.66992 11.9984 4.66992C14.2318 4.66992 16.2693 5.26992 18.1109 6.46992C19.9526 7.66992 21.4068 9.25326 22.4734 11.2199C22.5568 11.3699 22.6193 11.5241 22.6609 11.6824C22.7026 11.8408 22.7234 12.0033 22.7234 12.1699C22.7234 12.3366 22.7026 12.4991 22.6609 12.6574C22.6193 12.8158 22.5568 12.9699 22.4734 13.1199C21.4068 15.0866 19.9526 16.6699 18.1109 17.8699C16.2693 19.0699 14.2318 19.6699 11.9984 19.6699Z"
                                  fill="#DF8B3F"
                                />
                              </g>
                            </g>
                          </svg>
                        </i>
                      ) : (
                        <i className="fas fa-eye">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <mask
                              id="mask0_1002_2601"
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="24"
                              height="24"
                            >
                              <rect width="24" height="24" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_1002_2601)">
                              <path
                                d="M19.0984 21.9016L15.5984 18.4516C15.0151 18.6349 14.4234 18.7724 13.8234 18.8641C13.2234 18.9557 12.6151 19.0016 11.9984 19.0016C9.7651 19.0016 7.72344 18.4016 5.87344 17.2016C4.02344 16.0016 2.57344 14.4182 1.52344 12.4516C1.4401 12.3016 1.3776 12.1474 1.33594 11.9891C1.29427 11.8307 1.27344 11.6682 1.27344 11.5016C1.27344 11.3349 1.29427 11.1724 1.33594 11.0141C1.3776 10.8557 1.4401 10.7016 1.52344 10.5516C1.8901 9.90156 2.28177 9.26823 2.69844 8.65156C3.1151 8.0349 3.59844 7.4849 4.14844 7.00156L2.07344 4.90156C1.8901 4.71823 1.79844 4.48906 1.79844 4.21406C1.79844 3.93906 1.89844 3.70156 2.09844 3.50156C2.28177 3.31823 2.5151 3.22656 2.79844 3.22656C3.08177 3.22656 3.3151 3.31823 3.49844 3.50156L20.4984 20.5016C20.6818 20.6849 20.7776 20.9141 20.7859 21.1891C20.7943 21.4641 20.6984 21.7016 20.4984 21.9016C20.3151 22.0849 20.0818 22.1766 19.7984 22.1766C19.5151 22.1766 19.2818 22.0849 19.0984 21.9016ZM11.9984 16.0016C12.1818 16.0016 12.3568 15.9932 12.5234 15.9766C12.6901 15.9599 12.8568 15.9266 13.0234 15.8766L7.62344 10.4766C7.57344 10.6432 7.5401 10.8099 7.52344 10.9766C7.50677 11.1432 7.49844 11.3182 7.49844 11.5016C7.49844 12.7516 7.93594 13.8141 8.81094 14.6891C9.68594 15.5641 10.7484 16.0016 11.9984 16.0016ZM11.9984 4.00156C14.2318 4.00156 16.2776 4.60573 18.1359 5.81406C19.9943 7.0224 21.4484 8.6099 22.4984 10.5766C22.5818 10.7099 22.6443 10.8557 22.6859 11.0141C22.7276 11.1724 22.7484 11.3349 22.7484 11.5016C22.7484 11.6682 22.7318 11.8307 22.6984 11.9891C22.6651 12.1474 22.6068 12.2932 22.5234 12.4266C22.2068 13.0432 21.8526 13.6266 21.4609 14.1766C21.0693 14.7266 20.6318 15.2432 20.1484 15.7266C19.9151 15.9599 19.6401 16.0682 19.3234 16.0516C19.0068 16.0349 18.7318 15.9099 18.4984 15.6766L16.4984 13.6766C16.3818 13.5599 16.3068 13.4224 16.2734 13.2641C16.2401 13.1057 16.2484 12.9432 16.2984 12.7766C16.3651 12.5599 16.4151 12.3516 16.4484 12.1516C16.4818 11.9516 16.4984 11.7349 16.4984 11.5016C16.4984 10.2516 16.0609 9.18906 15.1859 8.31406C14.3109 7.43906 13.2484 7.00156 11.9984 7.00156C11.7651 7.00156 11.5484 7.01823 11.3484 7.05156C11.1484 7.0849 10.9401 7.1349 10.7234 7.20156C10.5568 7.25156 10.3901 7.2599 10.2234 7.22656C10.0568 7.19323 9.9151 7.11823 9.79844 7.00156L8.97344 6.17656C8.65677 5.8599 8.5526 5.49323 8.66094 5.07656C8.76927 4.6599 9.03177 4.39323 9.44844 4.27656C9.8651 4.19323 10.2859 4.12656 10.7109 4.07656C11.1359 4.02656 11.5651 4.00156 11.9984 4.00156ZM13.9734 9.65156C14.1568 9.86823 14.3109 10.1057 14.4359 10.3641C14.5609 10.6224 14.6401 10.8932 14.6734 11.1766C14.6901 11.3099 14.6401 11.4016 14.5234 11.4516C14.4068 11.5016 14.2984 11.4766 14.1984 11.3766L12.1484 9.32656C12.0484 9.22656 12.0276 9.11823 12.0859 9.00156C12.1443 8.8849 12.2401 8.82656 12.3734 8.82656C12.6901 8.8599 12.9818 8.9474 13.2484 9.08906C13.5151 9.23073 13.7568 9.41823 13.9734 9.65156Z"
                                fill="#DF8B3F"
                              />
                            </g>
                          </svg>
                        </i>
                      )}
                    </div>
                  </div>
                  {errors.password && (
                    <span className="text-red-500">Campo requerido</span>
                  )}
                </div>
                <div className="self-stretch h-[85px] flex-col justify-start items-start flex">
                  <div className="px-4 py-2 justify-start items-center gap-2.5 inline-flex">
                    <div className="text-black text-lg font-semibold">
                      Confirmar Contraseña
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword2 ? "text" : "password"}
                      id="confirmPassword"
                      placeholder="Ingresa tu contraseña"
                      autoComplete="given-name"
                      {...register("confirmPassword")}
                      className="self-stretch px-4 py-3 bg-white rounded-xl border border-orange-400 justify-start items-center gap-3 inline-flex w-[540px] placeholder-padding input[type=password]"
                      style={{
                        padding: "10px",
                        paddingLeft: "40px",
                        textIndent: "0px",
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg width='54' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='key'%3E%3Cmask id='mask0_1408_1814' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='24' height='25'%3E%3Crect id='Bounding box' y='0.669922' width='24' height='24' fill='%23D9D9D9'/%3E%3C/mask%3E%3Cg mask='url(%23mask0_1408_1814)'%3E%3Cpath id='key_2' d='M7 15.6699C6.16667 15.6699 5.45833 15.3783 4.875 14.7949C4.29167 14.2116 4 13.5033 4 12.6699C4 11.8366 4.29167 11.1283 4.875 10.5449C5.45833 9.96159 6.16667 9.66992 7 9.66992C7.83333 9.66992 8.54167 9.96159 9.125 10.5449C9.70833 11.1283 10 11.8366 10 12.6699C10 13.5033 9.70833 14.2116 9.125 14.7949C8.54167 15.3783 7.83333 15.6699 7 15.6699ZM7 18.6699C8.28333 18.6699 9.44167 18.3033 10.475 17.5699C11.5083 16.8366 12.2333 15.8699 12.65 14.6699H13L14.3 15.9699C14.4 16.0699 14.5083 16.1408 14.625 16.1824C14.7417 16.2241 14.8667 16.2449 15 16.2449C15.1333 16.2449 15.2583 16.2241 15.375 16.1824C15.4917 16.1408 15.6 16.0699 15.7 15.9699L17 14.6699L18.75 16.0449C18.85 16.1283 18.9625 16.1908 19.0875 16.2324C19.2125 16.2741 19.3417 16.2866 19.475 16.2699C19.6083 16.2533 19.7292 16.2158 19.8375 16.1574C19.9458 16.0991 20.0417 16.0199 20.125 15.9199L22.375 13.3449C22.4583 13.2449 22.5208 13.1366 22.5625 13.0199C22.6042 12.9033 22.625 12.7783 22.625 12.6449C22.625 12.5116 22.6 12.3908 22.55 12.2824C22.5 12.1741 22.4333 12.0783 22.35 11.9949L21.325 10.9699C21.225 10.8699 21.1125 10.7949 20.9875 10.7449C20.8625 10.6949 20.7333 10.6699 20.6 10.6699H12.65C12.25 9.53659 11.5458 8.58659 10.5375 7.81992C9.52917 7.05326 8.35 6.66992 7 6.66992C5.33333 6.66992 3.91667 7.25326 2.75 8.41992C1.58333 9.58659 1 11.0033 1 12.6699C1 14.3366 1.58333 15.7533 2.75 16.9199C3.91667 18.0866 5.33333 18.6699 7 18.6699Z' fill='%23DF8B3F'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "left center",
                      }}
                    />
                    <div
                      className="icon"
                      onClick={() => setShowPassword2(!showPassword2)}
                    >
                      {showPassword2 ? (
                        <i className="fas fa-eye-slash">
                          <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="Component 41">
                              <mask
                                id="mask0_1408_1818"
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="24"
                                height="25"
                              >
                                <rect
                                  id="Bounding box"
                                  y="0.669922"
                                  width="24"
                                  height="24"
                                  fill="#D9D9D9"
                                />
                              </mask>
                              <g mask="url(#mask0_1408_1818)">
                                <path
                                  id="visibility"
                                  d="M11.9984 16.6699C13.2484 16.6699 14.3109 16.2324 15.1859 15.3574C16.0609 14.4824 16.4984 13.4199 16.4984 12.1699C16.4984 10.9199 16.0609 9.85742 15.1859 8.98242C14.3109 8.10742 13.2484 7.66992 11.9984 7.66992C10.7484 7.66992 9.68594 8.10742 8.81094 8.98242C7.93594 9.85742 7.49844 10.9199 7.49844 12.1699C7.49844 13.4199 7.93594 14.4824 8.81094 15.3574C9.68594 16.2324 10.7484 16.6699 11.9984 16.6699ZM11.9984 14.8699C11.2484 14.8699 10.6109 14.6074 10.0859 14.0824C9.56094 13.5574 9.29844 12.9199 9.29844 12.1699C9.29844 11.4199 9.56094 10.7824 10.0859 10.2574C10.6109 9.73242 11.2484 9.46992 11.9984 9.46992C12.7484 9.46992 13.3859 9.73242 13.9109 10.2574C14.4359 10.7824 14.6984 11.4199 14.6984 12.1699C14.6984 12.9199 14.4359 13.5574 13.9109 14.0824C13.3859 14.6074 12.7484 14.8699 11.9984 14.8699ZM11.9984 19.6699C9.7651 19.6699 7.7276 19.0699 5.88594 17.8699C4.04427 16.6699 2.5901 15.0866 1.52344 13.1199C1.4401 12.9699 1.3776 12.8158 1.33594 12.6574C1.29427 12.4991 1.27344 12.3366 1.27344 12.1699C1.27344 12.0033 1.29427 11.8408 1.33594 11.6824C1.3776 11.5241 1.4401 11.3699 1.52344 11.2199C2.5901 9.25326 4.04427 7.66992 5.88594 6.46992C7.7276 5.26992 9.7651 4.66992 11.9984 4.66992C14.2318 4.66992 16.2693 5.26992 18.1109 6.46992C19.9526 7.66992 21.4068 9.25326 22.4734 11.2199C22.5568 11.3699 22.6193 11.5241 22.6609 11.6824C22.7026 11.8408 22.7234 12.0033 22.7234 12.1699C22.7234 12.3366 22.7026 12.4991 22.6609 12.6574C22.6193 12.8158 22.5568 12.9699 22.4734 13.1199C21.4068 15.0866 19.9526 16.6699 18.1109 17.8699C16.2693 19.0699 14.2318 19.6699 11.9984 19.6699Z"
                                  fill="#DF8B3F"
                                />
                              </g>
                            </g>
                          </svg>
                        </i>
                      ) : (
                        <i className="fas fa-eye">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <mask
                              id="mask0_1002_2601"
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="24"
                              height="24"
                            >
                              <rect width="24" height="24" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_1002_2601)">
                              <path
                                d="M19.0984 21.9016L15.5984 18.4516C15.0151 18.6349 14.4234 18.7724 13.8234 18.8641C13.2234 18.9557 12.6151 19.0016 11.9984 19.0016C9.7651 19.0016 7.72344 18.4016 5.87344 17.2016C4.02344 16.0016 2.57344 14.4182 1.52344 12.4516C1.4401 12.3016 1.3776 12.1474 1.33594 11.9891C1.29427 11.8307 1.27344 11.6682 1.27344 11.5016C1.27344 11.3349 1.29427 11.1724 1.33594 11.0141C1.3776 10.8557 1.4401 10.7016 1.52344 10.5516C1.8901 9.90156 2.28177 9.26823 2.69844 8.65156C3.1151 8.0349 3.59844 7.4849 4.14844 7.00156L2.07344 4.90156C1.8901 4.71823 1.79844 4.48906 1.79844 4.21406C1.79844 3.93906 1.89844 3.70156 2.09844 3.50156C2.28177 3.31823 2.5151 3.22656 2.79844 3.22656C3.08177 3.22656 3.3151 3.31823 3.49844 3.50156L20.4984 20.5016C20.6818 20.6849 20.7776 20.9141 20.7859 21.1891C20.7943 21.4641 20.6984 21.7016 20.4984 21.9016C20.3151 22.0849 20.0818 22.1766 19.7984 22.1766C19.5151 22.1766 19.2818 22.0849 19.0984 21.9016ZM11.9984 16.0016C12.1818 16.0016 12.3568 15.9932 12.5234 15.9766C12.6901 15.9599 12.8568 15.9266 13.0234 15.8766L7.62344 10.4766C7.57344 10.6432 7.5401 10.8099 7.52344 10.9766C7.50677 11.1432 7.49844 11.3182 7.49844 11.5016C7.49844 12.7516 7.93594 13.8141 8.81094 14.6891C9.68594 15.5641 10.7484 16.0016 11.9984 16.0016ZM11.9984 4.00156C14.2318 4.00156 16.2776 4.60573 18.1359 5.81406C19.9943 7.0224 21.4484 8.6099 22.4984 10.5766C22.5818 10.7099 22.6443 10.8557 22.6859 11.0141C22.7276 11.1724 22.7484 11.3349 22.7484 11.5016C22.7484 11.6682 22.7318 11.8307 22.6984 11.9891C22.6651 12.1474 22.6068 12.2932 22.5234 12.4266C22.2068 13.0432 21.8526 13.6266 21.4609 14.1766C21.0693 14.7266 20.6318 15.2432 20.1484 15.7266C19.9151 15.9599 19.6401 16.0682 19.3234 16.0516C19.0068 16.0349 18.7318 15.9099 18.4984 15.6766L16.4984 13.6766C16.3818 13.5599 16.3068 13.4224 16.2734 13.2641C16.2401 13.1057 16.2484 12.9432 16.2984 12.7766C16.3651 12.5599 16.4151 12.3516 16.4484 12.1516C16.4818 11.9516 16.4984 11.7349 16.4984 11.5016C16.4984 10.2516 16.0609 9.18906 15.1859 8.31406C14.3109 7.43906 13.2484 7.00156 11.9984 7.00156C11.7651 7.00156 11.5484 7.01823 11.3484 7.05156C11.1484 7.0849 10.9401 7.1349 10.7234 7.20156C10.5568 7.25156 10.3901 7.2599 10.2234 7.22656C10.0568 7.19323 9.9151 7.11823 9.79844 7.00156L8.97344 6.17656C8.65677 5.8599 8.5526 5.49323 8.66094 5.07656C8.76927 4.6599 9.03177 4.39323 9.44844 4.27656C9.8651 4.19323 10.2859 4.12656 10.7109 4.07656C11.1359 4.02656 11.5651 4.00156 11.9984 4.00156ZM13.9734 9.65156C14.1568 9.86823 14.3109 10.1057 14.4359 10.3641C14.5609 10.6224 14.6401 10.8932 14.6734 11.1766C14.6901 11.3099 14.6401 11.4016 14.5234 11.4516C14.4068 11.5016 14.2984 11.4766 14.1984 11.3766L12.1484 9.32656C12.0484 9.22656 12.0276 9.11823 12.0859 9.00156C12.1443 8.8849 12.2401 8.82656 12.3734 8.82656C12.6901 8.8599 12.9818 8.9474 13.2484 9.08906C13.5151 9.23073 13.7568 9.41823 13.9734 9.65156Z"
                                fill="#DF8B3F"
                              />
                            </g>
                          </svg>
                        </i>
                      )}
                    </div>
                  </div>
                  {errors.confirmPassword && (
                    <span className="text-red-500">Campo requerido</span>
                  )}
                </div>
                <div className="self-stretch px-4 py-2 justify-start items-start gap-4 inline-flex">
                  <div className="w-6 h-6 relative">
                    <input
                      type="checkbox"
                      id="terminos"
                      {...register("terminos")}
                      className="w-6 h-6 left-0 top-0"
                    />
                  </div>
                  <label
                    className="text-black text-lg font-normal"
                    htmlFor="terminos"
                  >
                    Aceptar{" "}
                    <Link
                      href="/termsandconditions"
                      target="_blank"
                      className="text-orange-400 text-lg font-normal "
                    >
                      Terminos y condiciones
                    </Link>{" "}
                  </label>
                  {errors.terminos && (
                    <span className="text-red-500">
                      {errors.terminos.message}
                    </span>
                  )}
                </div>
                <div className="self-stretch h-[125px] flex-col justify-start items-center gap-8 flex">
                  <div className="self-stretch h-14 px-[50px] py-4 bg-orange-400 rounded-2xl justify-center items-center gap-2.5 inline-flex">
                    <button
                      className="grow shrink basis-0 self-stretch text-center text-white text-xl font-medium "
                      type="submit"
                    >
                      Registrarme
                    </button>
                  </div>
                  <div className="self-stretch justify-between items-start inline-flex">
                    <div className="px-4 py-2 justify-start items-center gap-2.5 flex">
                      <div className="text-black text-lg font-medium ">
                        ¿Ya tenés una cuenta?
                      </div>
                    </div>
                    <div className="px-4 py-2 justify-start items-center gap-2.5 flex">
                      <div className="text-orange-400 text-lg font-semibold ">
                        <Link href="/auth/login">Ingrese Aqui</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-center items-center gap-20 inline-flex">
                  <div className="p-2 bg-neutral-50 rounded-xl border border-orange-400 justify-start items-start gap-2.5 flex">
                    <div className="w-12 h-12 relative">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Group 4">
                          <path
                            id="Vector"
                            d="M47.5332 19.2996H45.6V19.2H24V28.8H37.5636C35.5848 34.3884 30.2676 38.4 24 38.4C16.0476 38.4 9.6 31.9524 9.6 24C9.6 16.0476 16.0476 9.6 24 9.6C27.6708 9.6 31.0104 10.9848 33.5532 13.2468L40.3416 6.4584C36.0552 2.4636 30.3216 0 24 0C10.746 0 0 10.746 0 24C0 37.254 10.746 48 24 48C37.254 48 48 37.254 48 24C48 22.3908 47.8344 20.82 47.5332 19.2996Z"
                            fill="#FFC107"
                          />
                          <path
                            id="Vector_2"
                            d="M2.76562 12.8292L10.6508 18.612C12.7844 13.3296 17.9516 9.6 23.9984 9.6C27.6692 9.6 31.0088 10.9848 33.5516 13.2468L40.34 6.4584C36.0536 2.4636 30.32 0 23.9984 0C14.78 0 6.78562 5.2044 2.76562 12.8292Z"
                            fill="#FF3D00"
                          />
                          <path
                            id="Vector_3"
                            d="M24.0027 47.9985C30.2019 47.9985 35.8347 45.6261 40.0935 41.7681L32.6655 35.4825C30.175 37.3765 27.1317 38.401 24.0027 38.3985C17.7603 38.3985 12.4599 34.4181 10.4631 28.8633L2.63672 34.8933C6.60872 42.6657 14.6751 47.9985 24.0027 47.9985Z"
                            fill="#4CAF50"
                          />
                          <path
                            id="Vector_4"
                            d="M47.5332 19.3027H45.6V19.2031H24V28.8031H37.5636C36.617 31.4628 34.912 33.7869 32.6592 35.4883L32.6628 35.4859L40.0908 41.7715C39.5652 42.2491 48 36.0031 48 24.0031C48 22.3939 47.8344 20.8231 47.5332 19.3027Z"
                            fill="#1976D2"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="p-2 bg-neutral-50 rounded-xl border border-orange-400 justify-start items-start gap-2.5 flex">
                    <div className="w-12 h-12 relative">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Group 5">
                          <path
                            id="Vector"
                            d="M48 24C48 10.7452 37.2547 0 24 0C10.7452 0 0 10.7452 0 24C0 35.979 8.7765 45.9081 20.25 47.7084V30.9375H14.1562V24H20.25V18.7125C20.25 12.6975 23.8331 9.375 29.3153 9.375C31.941 9.375 34.6875 9.84375 34.6875 9.84375V15.75H31.6613C28.6798 15.75 27.75 17.6001 27.75 19.4981V24H34.4062L33.3422 30.9375H27.75V47.7084C39.2235 45.9081 48 35.9792 48 24Z"
                            fill="#1877F2"
                          />
                          <path
                            id="Vector_2"
                            d="M33.3422 30.9375L34.4062 24H27.75V19.4981C27.75 17.5999 28.6798 15.75 31.6613 15.75H34.6875V9.84375C34.6875 9.84375 31.941 9.375 29.3151 9.375C23.8331 9.375 20.25 12.6975 20.25 18.7125V24H14.1562V30.9375H20.25V47.7084C21.4905 47.9028 22.7443 48.0003 24 48C25.2557 48.0004 26.5095 47.9029 27.75 47.7084V30.9375H33.3422Z"
                            fill="white"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
