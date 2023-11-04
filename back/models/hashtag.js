module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define(
    "Hashtag",
    {
      // MySQL에는 hashtags로 테이블 생성
      // id는 기본적으로 들어있음 1, 2, 3, 4... 순서대로 올라감.
      name: {},
    },
    {
      charset: "utf8mb4", // utf8 입력해야 한글 사용 가능.
      collate: "utf8mb4_general_ci", // mb4 넣어줘야 이모티콘 사용 가능
    }
  );
  Hashtag.associate = (db) => {};
  return Hashtag;
};
