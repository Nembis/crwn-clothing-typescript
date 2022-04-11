import { FC, FormEvent, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "../button/button.component";
import { FormContainer, PaymentFormContainer } from "./payment-form.styles";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectCartTotal } from "../../store/cart/cart.selector";

interface PaymentFormProps {}

export const PaymentForm: FC<PaymentFormProps> = () => {
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);

  const paymentHandler = async (e: FormEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();

      if (!stripe || !elements) {
        return;
      }

      setIsProcessingPayment(true);

      const response = await fetch(
        "/.netlify/functions/create-payment-intent",
        {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ amount: amount * 100 }),
        }
      ).then((res) => res.json());

      const clientSecret: string = response.paymentIntent.client_secret;
      console.log(clientSecret);

      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: currentUser ? currentUser.displayName : "Guest",
          },
        },
      });

      setIsProcessingPayment(false);

      if (paymentResult.error) {
        alert(paymentResult.error);
      } else {
        if (paymentResult.paymentIntent.status === "succeeded") {
          alert("Payment Succesful");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <Button
          buttonType="inverted"
          onClick={(e) => paymentHandler(e)}
          disabled={isProcessingPayment}
        >
          Pay Now
        </Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};
