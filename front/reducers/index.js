const initialState = {
  name: "jongju",
  age: 34,
  password: "dhsfkdls18!",
};

const changeNickname = {
  type: "CHANGE_NICKNAME",
  data: "boogicho",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_NICKNAME":
      return {
        ...state,
        name: action.data,
      };
  }
};

// 리덕스 실제 구현하기 처음부터 다시 시청

export default rootReducer;
