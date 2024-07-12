import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "styled-components";
import InputMask from "react-input-mask";

type Inputs = {
  firstname: string;
  email: string;
  Phonenumber: string;
  YourAddress: string;
  "ZIP Code": string;
  City: string;
  Country: string; // Added Country field to Inputs type
};

const schema = yup.object({
  firstname: yup
    .string()
    .min(8, "Name must be at least 8 characters long")
    .max(30, "Name must be at most 30 characters long")
    .required("Name field is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  Phonenumber: yup
    .string()
    .matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, {
      message: "Invalid phone number",
      excludeEmptyString: true,
    })
    .required("Phone number is required"),
  YourAddress: yup.string().required("Address is required"),
  "ZIP Code": yup.string().required("ZIP Code is required"),
  City: yup.string().required("City is required"),
  Country: yup.string().required("Country is required"), // Added validation for Country
});

function Checkout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    // Handle form submission logic here, e.g., send data to server, redirect, etc.
  };
  const navigate = useNavigate();
  return (
    <div>
      <p onClick={() => navigate(-1)}>GO BACK</p>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <h1>CHECKOUT</h1>
        <p>Billing details</p>
        <label htmlFor="Name">Name</label>
        <input type="text" placeholder="Firstname" {...register("firstname")} />
        {errors.firstname && <p>{errors.firstname.message}</p>}

        <label htmlFor="Email Address">Email Address</label>
        <input type="text" placeholder="Email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}

        <label htmlFor="Phone Number">Phone Number</label>
        <InputMask
          mask="+999 999 9999"
          maskChar=" "
          type="text"
          placeholder="+1 202-555-0136"
          {...register("Phonenumber")}
        />
        {errors.Phonenumber && <p>{errors.Phonenumber.message}</p>}

        <div>
          <p>Shipping info</p>
          <h1>Your Address</h1>

          <label htmlFor="Your Address">Address</label>
          <input
            type="text"
            placeholder="Your Address"
            {...register("YourAddress")}
          />
          {errors.YourAddress && <p>{errors.YourAddress.message}</p>}

          <label htmlFor="ZIP Code">ZIP Code</label>
          <InputMask
            mask="99999"
            type="text"
            placeholder="ZIP Code"
            {...register("ZIP Code")}
          />
          {errors["ZIP Code"] && <p>{errors["ZIP Code"].message}</p>}

          <label htmlFor="City">City</label>
          <input type="text" placeholder="City" {...register("City")} />
          {errors.City && <p>{errors.City.message}</p>}

          <label htmlFor="Country">Country</label>
          <input type="text" placeholder="Country" {...register("Country")} />
          {errors.Country && <p>{errors.Country.message}</p>}
        </div>

        <button type="submit">Submit</button>
      </FormStyled>
    </div>
  );
}

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;

  input {
    width: 100%;
    height: 56px;
    border-radius: 8px;
    border: 1px solid #cfcfcf;
    background: #fff;
    padding-left: 20px;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s ease-in-out;

    &:focus {
      border-color: #d87d4a;
    }
  }

  h1 {
    color: #000;
    font-family: Manrope;
    font-size: 28px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  p {
    color: #d87d4a;
    font-family: Manrope;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.929px;
    margin-top: 0;
  }

  label {
    color: #000;
    font-family: Manrope;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
  }

  button {
    width: 100%;
    height: 56px;
    border: none;
    border-radius: 8px;
    background-color: #d87d4a;
    color: #fff;
    font-family: Manrope;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #7e3f1b;
    }
  }
`;

export default Checkout;
