import React, { useState, useEffect } from "react";
import "../Styling/Orders.css";
import { db, userAuth } from "../firebase";
import { Order } from "./Order";

export const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (userAuth.currentUser) {
      db.collection("users")
        .doc(userAuth.currentUser.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snap) => {
          setOrders(
            snap.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
    return () => !userAuth.currentUser;
  }, []);
  return (
    <div className="orders">
      <h1>Your orders</h1>
      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
};
