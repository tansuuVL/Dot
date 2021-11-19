import { Button, Card, Grid, Paper } from "@material-ui/core";
import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./PaymentForm.css";

const PaymentForm = () => {
  const [form, setForm] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  });
  const [focus, setFocus] = useState("");

  const handleChange = (e) => {
    const values = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(values);
  };
  // const handleInputFocus = (e) => {
  //   setForm({ focus: e.target.name });
  // };
  return (
    <>
      <Grid container spacing={4} className="main">
        <Grid item md={5} xs={12}>
          <Paper>
            <h1>Enter your payment details</h1>
            <div className="card">
              <Cards
                id="PaymentForm"
                cvc={form.cvc}
                expiry={form.expiry}
                focused={focus}
                name={form.name}
                number={form.number}
              />
            </div>
            <form>
              <input
                className="number"
                type="tel"
                name="number"
                placeholder="Card Number"
                value={form.number}
                onChange={handleChange}
                onFocus={(e) => setFocus(e.target.name)}
              />
              <input
                className="number"
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                onFocus={(e) => setFocus(e.target.name)}
              />
              <input
                className="valid"
                width="60px"
                type="tel"
                name="expiry"
                placeholder="Valid Thru"
                value={form.expiry}
                onChange={handleChange}
                onFocus={(e) => setFocus(e.target.name)}
              />
              <input
                className="cvc"
                type="tel"
                name="cvc"
                placeholder="CVC"
                value={form.cvc}
                onChange={handleChange}
                onFocus={(e) => setFocus(e.target.name)}
              />
            </form>
            <Button className="btn" variant="contained" color="primary">
              PAY
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default PaymentForm;

// import { useState, useRef, useEffect } from "react";
// import Cards from "react-credit-cards";
// import "react-credit-cards/es/styles-compiled.css";

// export default function PaymentForm() {
//   const [number, setNumber] = useState("");
//   const [name, setName] = useState("");
//   const [expiry, setExpiry] = useState("");
//   const [cvc, setCvc] = useState("");
//   const [focus, setFocus] = useState("");

//   useEffect(() => {
//     ref.current.focus();
//   }, []);

//   const ref = useRef(null);
//   return (
//     <div className="App">
//       <Cards
//         number={number}
//         name={name}
//         expiry={expiry}
//         cvc={cvc}
//         focused={focus}
//       />
//       <form>
//         <input
//           type="tel"
//           name="number"
//           placeholder="Card Number"
//           value={number}
//           onChange={(e) => setNumber(e.target.value)}
//           onFocus={(e) => setFocus(e.target.name)}
//           ref={ref}
//         />
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           onFocus={(e) => setFocus(e.target.name)}
//         />
//         <input
//           type="text"
//           name="expiry"
//           placeholder="MM/YY"
//           value={expiry}
//           onChange={(e) => setExpiry(e.target.value)}
//           onFocus={(e) => setFocus(e.target.name)}
//         />
//         <input
//           type="tel"
//           name="cvc"
//           placeholder="CVC"
//           value={cvc}
//           onChange={(e) => setCvc(e.target.value)}
//           onFocus={(e) => setFocus(e.target.name)}
//         />
//       </form>
//     </div>
//   );
// }
