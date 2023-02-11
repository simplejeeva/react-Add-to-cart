import { useState } from "react";

import "./App.css";
import { Navbars } from "./Navbars";

function App() {
  return (
    <div className="App">
      <CartItems />

      <Footer />
    </div>
  );
}

function CartItems() {
  const items = [
    {
      img: "https://m.media-amazon.com/images/I/61FFlMkOxhL._SL1320_.jpg",
      name: "Headphone",
      rate: 1250,
    },

    {
      img: "https://m.media-amazon.com/images/I/71lVwl3q-kL._SL1500_.jpg",
      name: "Power Bank",
      rate: 1550,
    },

    {
      img: "https://m.media-amazon.com/images/I/71AvQd3VzqL._SX679_.jpg",
      name: "Oneplus phone",
      rate: 12050,
    },
    {
      img: "https://cdn1.smartprix.com/rx-i4U4FAoxX-w1200-h1200/4U4FAoxX.jpg",
      name: "SONY LAPTOP",
      rate: 1000,
    },
    {
      img: "https://www.sony.co.in/image/d4f672c8c1b08401c3fb67cce747b7db?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320",
      name: "SONYLED",
      rate: 7000,
    },
    {
      img: "data:image/jpeg;base64,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qA1Ky9mtnqbDqdsFPHlbfM951klktq97uk/RwGi3KAsc0i8VH7DfuTmkXio/Yb9yvKqAsc0i8VH7DU5pF4qP2G/cr6ICxzSLxUfsNTmkXio/Yb9yvogLHNYvFM9hv3K3UYbTyNLJKeKRhtdr42OabG40IWWiAxKfDaeNoZHTwxsF7NZGxrRc3OgCuc1i8VH7DVfRAWOaxeKj9hqrzWLxTPYaryICxzWLxUfsNTmsXio/Yar6ICxzWLxUfsNTmsXio/Yar6IDm9s9lIMSoJqRxEBfldHIxjbslbq0kdLesdROoUUbK4lVbO1fMsRpgKeUl1gBIwi9t9C7p6MzePDQHjPa020uz1NiNM6nqo8zb5mPbpLFJ0PY74J/8HRAZtKKaaNksTYpI5GhzHsa0tc08CCr7IWNN2sa09bWgGy5bYvZSfDDJGK91TRvBLIpYg2SOW/hB4dbXW4AFzr5+uQBERAEREAREQBEVEBVERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBFRVQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREB/9k=",

      name: "REDMI LED",
      rate: 14000,
    },
  ];

  const [count, setCount] = useState(0);

  return (
    <div className="mb-5">
      <Navbars count={count} />
      <div className="container">
        <div className="row">
          {items.map((ele, index) => (
            <Card
              cartdatas={ele}
              key={index}
              setCount={setCount}
              count={count}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ count, setCount, cartdatas }) {
  const [cgcart, setCgcart] = useState("true");

  let cart = cgcart ? "ADDCART" : "REMOVECART";

  let addcart = cgcart ? count + 1 : count - 1;

  const style = {};

  return (
    <div className="col-md-4 rad my-2 cart-container">
      <div style={style} className="card bg">
        <img
          className="card-img-top poster"
          src={cartdatas.img}
          alt={cartdatas.name}
        />
        <div className="card-body sub-div">
          <h5 className="card-title">{cartdatas.name}</h5>
          <p className="card-text">${cartdatas.rate}</p>
          <a
            href="#"
            className=" d-grid btn btn-primary"
            onClick={(event) => {
              console.log("cliked");

              setCgcart(!cgcart);

              setCount(addcart);
              console.log(event);
            }}
          >
            {cart}
          </a>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <h4>Copyright © Your Website 2023</h4>
    </div>
  );
}

export default App;
