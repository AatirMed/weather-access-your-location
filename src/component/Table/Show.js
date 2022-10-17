import { monter, EditID, Remove, disREmove } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import React, { Fragment } from "react";

const Show = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <h2>View users</h2>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>Ville</th>
            <th className="action">Actions</th>
          </tr>
        </thead>
        <tbody>
          {store.users.map((ele) => {
            return (
              <tr key={ele.id}>
                <td>{ele.name}</td>
                <td>{ele.ville}</td>
                <td className="action">
                  <button
                    disabled={store.disabled}
                    className="btn_remove"
                    onClick={() => dispatch(Remove(ele.id))}
                  >
                    X
                  </button>
                  <button
                    className="btn"
                    onClick={() => {
                      dispatch(monter(false));
                      dispatch(EditID({...ele}));
                      dispatch(disREmove(true));

                    }}
                  >
                    edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Show;
