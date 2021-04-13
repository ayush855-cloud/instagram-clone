import React from "react";
import { ContextProvider } from "../Global/Context";
const Sidebar = () => {
  const { loader, user } = React.useContext(ContextProvider);
  const username = !loader && user && user.displayName ? user.displayName : "";
  const [state] = React.useState([
    { id: 1, image: "https://slism.com/wpsystem/wp-content/uploads/talk-to-random-people-005-positive-woman.jpg", name: "utkarsh432" },
    { id: 2, image: "https://i.insider.com/5799f6efdd08954f578b4840?width=600&format=jpeg&auto=webp", name: "piyush32" },
    { id: 3, image: "https://dz9yg0snnohlc.cloudfront.net/new-the-enjoyable-art-of-learning-to-talk-to-random-people-2.png", name: "mahadevan4" },
  ]);
  return (
    <div className="sidebar">
      {!loader && user ? (
        <div className="sidebar__user">
          <div className="sidebar__user-avator">{username[0]}</div>
          <div className="sidebar__user-name">{username}</div>
        </div>
      ) : (
        ""
      )}
      <div className="sidebar__list">
        <h3>Suggestions for you</h3>
        {state.map((user) => (
          <div className="sidebar__list-user" key={user.id}>
            <div className="sidebar__list-a">
              <div className="sidebar__list-a-img">
                <img src={user.image} alt={user.image} />
              </div>
              <div className="sidebar__list-a-name">{user.name}</div>
            </div>
            <div className="sidebar__list-b">
              <a href="">Follow</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Sidebar;
