import React from "react";
import Head from "next/head";

// components
import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  const followingList = [
    { nickname: "이종주" },
    { nickname: "Wow" },
    { nickname: "nodeBird official" },
  ];
  const followerList = [
    { nickname: "how" },
    { nickname: "Long" },
    { nickname: "노드버드" },
  ];

  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
