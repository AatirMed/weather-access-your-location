import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { Add } from "../../store/store";

const InputFromAdd = () => {
  const [user, setuser] = useState({ name: "", ville: "" });
  const dispatch = useDispatch();

  const store = useSelector((state) => state.users);
  useEffect(() => setuser({ name: "", ville: "" }), [store.length]);

  const HandChange = (event) => {
    const { name, value } = event.target;
    setuser({ ...user, [name]: value });
  };

  return (
    <div className="InputFromAdd">
      <h2>Add user</h2>
      <div className="form">
        <div>
          <h3>Name :</h3>{" "}
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={user.name}
            onChange={HandChange}
          />
        </div>
        <div>
          <h3>Ville :</h3>{" "}
          <input
            type="text"
            placeholder="Ville"
            name="ville"
            value={user.ville}
            onChange={HandChange}
          />
        </div>
        <div>
          <button className="btn" onClick={() => dispatch(Add(user))}>
            add
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputFromAdd;
