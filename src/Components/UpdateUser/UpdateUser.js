import React, { useEffect, uses, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

function UpdateUser() {
  const [inputs, setInputs] = useState({});
  const history = useNavigate();
  const id = useParams().id;

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get("http://localhost:5000/users/${id}")
        .then((res) => res.data)
        .then((data) => setInputs());
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios.put("http://localhost:5000/users/${id}", {
      name: String(inputs.name),
      gmail: String(inputs.gmail),
      age: Number(inputs.age),
      address: String(inputs.address),
    });
  };

  return (
    <div>
      <h1>UpdateUser</h1>
    </div>
  );
}

export default UpdateUser;
