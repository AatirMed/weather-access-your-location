import { Edit, monter, disREmove } from "../../store/store";
import { useDispatch ,useSelector} from "react-redux";
import React, { useState } from "react";

const InputFromEdit = () => {
  // setChange
  const [user, setuser] = useState({ name: "", ville: "" });
  const dispatch = useDispatch();
  const store = useSelector((state) => state.edit_id);
  console.log(store)
  const HandChange = (event) => {
    const { name, value } = event.target;
    setuser({ ...user, [name]: value });
  };

  return (
    <div className="InputFromEdit">
      <h2>Edit user</h2>
      <div className="form">
        <div>
          <h3>Name</h3>{" "}
          <input
      
          defaultValue={store.name}
            type="text"
            placeholder="Name"
            name="name"
            onChange={HandChange}
          />
        </div>
        <div>
          <h3>Ville</h3>{" "}
          <input
            type="text"
            placeholder="Ville"
            
            defaultValue={store.ville}
            name="ville"
            onChange={HandChange}
          />
        </div>
        <div>
          <button
            className="btn"
            onClick={() => {
              dispatch(Edit(user));
              dispatch(monter(true));
              dispatch(disREmove(false));
            }}
          >
            update
          </button>
          <button
            className="btn1"
            onClick={() => {
              dispatch(monter(true));
              dispatch(disREmove(false));
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputFromEdit;
