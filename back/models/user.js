module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      // MySQL에는 users로 테이블 생성
      // id는 기본적으로 들어있음 1, 2, 3, 4... 순서대로 올라감.
      email: {
        type: DataTypes.STRING(30), // 자주 쓰이는것 STRING, TEXT(긴글), BOOLEAN, INTEGER, FLOAT, DATETIME
        allowNull: false, // false: 필수, true: 필수아님,
        unique: true, // 고유한 값.
      },
      nickname: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      charset: "utf8", // utf8 입력해야 한글 사용 가능.
      collate: "utf8_general_ci", // 한글 저장
    }
  );
  User.associate = (db) => {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.Post, { through: "Like", as: "Liked" });
    db.User.belongsToMany(db.User, {
      through: "Follow",
      as: "Followers",
      foreignKey: "FollowingId",
    });
    db.User.belongsToMany(db.User, {
      through: "Follow",
      as: "wiilo",
      foreignKey: "FollowingId",
    });
  };
  return User;
};
