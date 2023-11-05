module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      // MySQL에는 posts로 테이블 생성
      // id는 기본적으로 들어있음 1, 2, 3, 4... 순서대로 올라감.
      content: {
        type: DataTypes.Text,
        allowNull: false,
      },
    },
    {
      charset: "utf8mb4", // utf8 입력해야 한글 사용 가능.
      collate: "utf8mb4_general_ci", // mb4 넣어줘야 이모티콘 사용 가능
    }
  );
  Post.associate = (db) => {
    db.Post.belongsTo(db.User);
    db.Post.belongsToMany(db.Hashtag);
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
    db.Post.belongsToMany(db.User, { through: "Like", as: "Likers" }); // through의 value값이 중간테이블 이름이다.
    db.Post.belongsTo(db.Post, { as: "Retweet" });
  };
  return Post;
};
// 2023 11월 6일
// 시퀄라이즈 관계 설정하기 (10분쯤부터 다시보기)
