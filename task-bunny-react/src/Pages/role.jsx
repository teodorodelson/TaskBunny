import React, { useState } from "react";
import Axios from "axios";
import JWTD from "jwt-decode";

export default function RoleRendering() {
  const [providerID, setProviderID] = useState("");
  const token = localStorage.getItem("token");
  const username = JWTD(token).sub;

  Axios.get("http://13.58.157.19:8081/users/userByname/" + username, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((result) => setProviderID(result.data))
    .catch((err) => console.log("error username:" + err));

  Axios.get("http://13.58.157.19:8081/role/" + providerID, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((result) => localStorage.setItem("role", result.data))
    .catch((err) => console.log("error role:" + err));

  return <></>;
}
