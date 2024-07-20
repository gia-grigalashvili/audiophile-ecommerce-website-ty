import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "styled-components";
import InputMask from "react-input-mask";
import Finish from "./Finish";

type Inputs = {
  firstname: string;
  email: string;
  Phonenumber: string;
  YourAddress: string;
  ZIPCode: string;
  City: string;
  Country: string;
  paymentMethod: string;
  eMoneyNumber?: string;
  eMoneyPIN?: string;
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
  ZIPCode: yup.string().required("ZIP Code is required"),
  City: yup.string().required("City is required"),
  Country: yup.string().required("Country is required"),
  paymentMethod: yup.string().required("Payment method is required"),
  eMoneyNumber: yup.string(),
  eMoneyPIN: yup.string(),
});

interface CheckoutProps {
  cartProductDetails: {
    productId: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
  }[];
  totalItems: number;
}

const Checkout: React.FC<CheckoutProps> = ({ cartProductDetails }) => {
  const [successfulPurchase, setSuccessfulPurchase] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);

    setSuccessfulPurchase(true);
  };

  const navigate = useNavigate();
  const paymentMethod = watch("paymentMethod");

  const totalPrice = cartProductDetails.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const totalVAT = (totalPrice * 20) / 100;

  const totalWithShipping = totalPrice + 50;

  const grandTotal = totalWithShipping + totalVAT;

  return (
    <MAINDIVS>
      {successfulPurchase && (
        <Finish
          cartProductDetails={cartProductDetails}
          onClose={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      )}
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <div className="isa">
          <p onClick={() => navigate(-1)}>GO BACK</p>
          <h1>CHECKOUT</h1>
          <p>Billing details</p>
          <div className="ifsas">
            {/* Input fields for billing details */}
            <label htmlFor="firstname">Name</label>
            <input
              type="text"
              placeholder="Firstname"
              {...register("firstname")}
            />
            {errors.firstname && <p>{errors.firstname.message}</p>}

            <label htmlFor="email">Email Address</label>
            <input type="text" placeholder="Email" {...register("email")} />
            {errors.email && <p>{errors.email.message}</p>}

            <label htmlFor="Phonenumber">Phone Number</label>
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
              <label htmlFor="YourAddress">Address</label>
              <input
                type="text"
                placeholder="Your Address"
                {...register("YourAddress")}
              />
              {errors.YourAddress && <p>{errors.YourAddress.message}</p>}

              <label htmlFor="ZIPCode">ZIP Code</label>
              <InputMask
                mask="99999"
                type="text"
                placeholder="ZIP Code"
                {...register("ZIPCode")}
              />
              {errors.ZIPCode && <p>{errors.ZIPCode.message}</p>}

              <label htmlFor="City">City</label>
              <input type="text" placeholder="City" {...register("City")} />
              {errors.City && <p>{errors.City.message}</p>}

              <label htmlFor="Country">Country</label>
              <input
                type="text"
                placeholder="Country"
                {...register("Country")}
              />
              {errors.Country && <p>{errors.Country.message}</p>}
            </div>

            {/* Payment details */}
            <h1>Payment Details</h1>
            <p>Payment Method</p>
            <div className="asa">
              <label>
                <input
                  type="radio"
                  value="eMoney"
                  {...register("paymentMethod")}
                />
                <span>e-Money</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="CashonDelivery"
                  {...register("paymentMethod")}
                />
                <span>Cash on Delivery</span>
              </label>
              {errors.paymentMethod && <p>{errors.paymentMethod.message}</p>}

              {paymentMethod === "eMoney" && (
                <>
                  <label htmlFor="eMoneyNumber">e-Money Number</label>
                  <InputMask
                    type="text"
                    mask="999999999"
                    placeholder="238521993"
                    {...register("eMoneyNumber")}
                  />
                  {errors.eMoneyNumber && <p>{errors.eMoneyNumber.message}</p>}

                  <label htmlFor="eMoneyPIN">e-Money PIN</label>
                  <InputMask
                    type="text"
                    placeholder="6891"
                    mask="9999"
                    {...register("eMoneyPIN")}
                  />
                  {errors.eMoneyPIN && <p>{errors.eMoneyPIN.message}</p>}
                </>
              )}
            </div>
          </div>
        </div>
        <Build>
          <h1>SUMMARY</h1>
          {cartProductDetails.map((product) => (
            <div className="if" key={product.productId}>
              <img src={product.image} alt={product.name} />
              <div className="product">
                <h1>{product.name}</h1>
                <p>$ {product.price}</p>
              </div>
              <h6>x{product.quantity}</h6>
            </div>
          ))}
          <div className="to">
            <h3>TOTAL</h3>
            <h1>${totalPrice.toFixed(2)}</h1>
          </div>
          <div className="to">
            <h3>SHIPPING</h3>
            <h1>$50</h1>
          </div>
          <div className="to">
            <h3>VAT (INCLUDED)</h3>
            <h1>${totalVAT.toFixed(2)}</h1>
          </div>
          <div className="to">
            <h3>GRAND TOTAL</h3>
            <h1>${grandTotal.toFixed(2)}</h1>
          </div>
          <button type="submit">Submit</button>
        </Build>
      </FormStyled>
    </MAINDIVS>
  );
};
const MAINDIVS = styled.div`
  @media (min-width: 1440px) {
    padding: 160px;
    background: #f1f1f1;
    display: flex;
    gap: 200px;
  }
`;
const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 20px;
  gap: 20px;

  @media (min-width: 1440px) {
    width: 100%;
    justify-content: center;

    flex-direction: row;
  }
  .isa {
    background: #ffffff;
    padding: 20px;
    @media (min-width: 740px) {
      background: #ffffff;
    }
    @media (min-width: 1440px) {
      width: 700px;
      background: #ffffff;
    }
  }
  .ifsas {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .asa {
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin-top: 10px;
    }
  }
  input[type="text"],
  input[type="radio"] {
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

  input[type="radio"] {
    width: 20px;

    height: 20px;
    margin-right: 10px;
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
    display: flex;
    align-items: center;
  }

  button {
    width: 100%;
    margin-top: 30px;
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
const Build = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 500px;
  background: #fff;

  padding: 20px;
  @media (min-width: 1440px) {
    width: 400px;
    min-height: 300px;
    max-height: 600px;
  }
  .if {
    display: flex;
    padding-top: 20px;
    justify-content: space-between;
    img {
      width: 74px;
      height: 74px;
    }
    .product {
      display: flex;
      flex-direction: column;
      h1 {
        color: #000;
        font-family: Manrope;
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
        line-height: 25px;
      }
      h6 {
        color: #727272;
        text-align: right;
        font-family: Manrope;
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
        line-height: 25px;
      }
    }
  }
  .to {
    display: flex;
    justify-content: space-between;

    h1 {
      color: #000;
      text-align: right;
      font-family: Manrope;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: uppercase;
    }
    h3 {
      color: #848484;
      font-family: Manrope;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 25px;
    }
  }
  button {
    width: 100%;
    margin-top: 30px;
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
