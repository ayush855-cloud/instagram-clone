import React from "react";

const Stories = () => {
  const [state, setState] = React.useState([
    { id: 1, image: "/images/boy1.jpg", name: "ayush432" },
    { id: 2, image: "/images/girl1.jpg", name: "piyush32" },
    { id: 3, image: "/images/boy2.jpg", name: "rohit42" },
    { id: 4, image: "/images/girl2.jpg", name: "ritika2" },
    { id: 5, image: "/images/boy3.jpg", name: "utkarsh432" },
    { id: 6, image: "/images/girl3.jpg", name: "priyanshi" },
    { id: 7, image: "/images/girl4.jpg", name: "shivam" },
    { id: 8, image: "/images/girl5.jpg", name: "mahadevan4" },
    { id: 9, image: "/images/boy4.jpg", name: "rishabh4" },
  ]);
  return (
    <div className="stories">
      {state.map((user) => (
        <div className="stories__info" key={user.id}>
          <div className="stories__img">
            <span>
              <img src={user.image} alt="user" />
            </span>
          </div>
          <div className="stories__name">{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Stories;
