import FLOWER1 from "../../Images/Flower1.jpg";
import FLOWER2 from "../../Images/Flower2.jpg";
import FLOWER3 from "../../Images/Flower3.jpg";
import FLOWER4 from "../../Images/Flower4.jpg";
import FLOWER5 from "../../Images/Flower5.jpg";
import FLOWER6 from "../../Images/Flower6.jpg";

export const initialState = {
  checked: [],
  images: [
    { id: 1, src: FLOWER1, matched: false },
    { id: 2, src: FLOWER2, matched: false },
    { id: 3, src: FLOWER4, matched: false },
    { id: 4, src: FLOWER5, matched: false },
    { id: 5, src: FLOWER3, matched: false },
    { id: 6, src: FLOWER6, matched: false },
    { id: 7, src: FLOWER5, matched: false },
    { id: 8, src: FLOWER1, matched: false },
    { id: 9, src: FLOWER3, matched: false },
    { id: 11, src: FLOWER4, matched: false },
    { id: 12, src: FLOWER2, matched: false },
    { id: 13, src: FLOWER6, matched: false },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "setCheck":
      return {
        ...state,
        checked: [...state.checked, action.payload],
      };
    case "match":
      return {
        ...state,
        images: state.images.map((i) =>
          i.src == action.payload ? { src: action.payload, matched: true } : i
        ),
      };
    case "clear":
      return {
        ...state,
        checked: [],
      };

    default:
      return state;
  }
};
