module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    "Image",
    {
      // MySQL에는 images로 테이블 생성
      // id는 기본적으로 들어있음 1, 2, 3, 4... 순서대로 올라감.
      src: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
    },
    {
      charset: "utf8", // utf8 입력해야 한글 사용 가능.
      collate: "utf8_general_ci", // mb4 넣어줘야 이모티콘 사용 가능
    }
  );
  Image.associate = (db) => {
    db.Image.belongsTo(db.Post);
  };
  return Image;
};
