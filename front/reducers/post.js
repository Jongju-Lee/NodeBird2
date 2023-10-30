export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "이종주",
      },
      content: "첫번째 게시글 #해시태그 #익스프레스.",
      Images: [
        {
          src: "https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726",
        },
        {
          src: "https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg",
        },
        {
          src: "https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "nero",
          },
          content: "우와 개정판이 나왔군요~",
        },
        {
          User: {
            nickname: "hero",
          },
          content: "얼른 사고 싶어요~",
        },
      ],
    },
  ],
  imagePaths: [], // image 업로드 할때 image경로 이곳에
  postAdded: false, // 게시글 추가가 완료되었을때 true로 바뀜
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "더미데이터 입니다.",
  User: {
    id: 1,
    nickname: "jeje7",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;