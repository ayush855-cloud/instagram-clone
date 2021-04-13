import React from "react";

const Stories = () => {
  const [state, setState] = React.useState([
    { id: 1, image: "https://static.wixstatic.com/media/2d23a2_5cf9cb610460400e9098aee6c0017e75.jpg/v1/fill/w_315,h_469,al_c,q_80,usm_0.66_1.00_0.01/2d23a2_5cf9cb610460400e9098aee6c0017e75.jpg", name: "ayush432" },
    { id: 2, image: "https://slism.com/wpsystem/wp-content/uploads/talk-to-random-people-005-positive-woman.jpg", name: "harshita32" },
    { id: 3, image: "https://ofad.org/files/daily-photo/recent-portraits-random-people-in-random-places_1.jpg", name: "rohit42" },
    { id: 4, image: "http://images4.fanpop.com/image/photos/16300000/Random-people-random-16382026-600-800.jpg", name: "ritika2" },
    { id: 5, image: "https://i.insider.com/5799f6efdd08954f578b4840?width=600&format=jpeg&auto=webp", name: "utkarsh432" },
    { id: 6, image: "http://images6.fanpop.com/image/photos/37300000/Random-Girl-people-37325426-236-354.jpg", name: "priyanshi" },
    { id: 7, image: "https://media.istockphoto.com/videos/searching-young-woman-finding-with-handmade-binoculars-video-id916928782?s=640x640", name: "shivam" },
    { id: 8, image: "https://dz9yg0snnohlc.cloudfront.net/new-the-enjoyable-art-of-learning-to-talk-to-random-people-2.png", name: "mahadevan4" },
    { id: 9, image: "https://i.insider.com/5799f6efdd08954f578b4840?width=600&format=jpeg&auto=webp", name: "rishabh4" },
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
