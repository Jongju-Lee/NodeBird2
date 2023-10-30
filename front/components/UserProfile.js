import React, { useCallback } from "react";
import { Avatar, Button, Card } from "antd";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { logoutAction } from "../reducers/user";

const StyledButton = styled(Button)`
  display: block;
  margin: 15px auto 0;
`;

const UserProfile = () => {
  const dispatch = useDispatch();
  const onLogOut = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />0
        </div>,
        <div key="followings">
          팔로잉
          <br />0
        </div>,
        <div key="followers">
          팔로워
          <br />0
        </div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>종주</Avatar>}
        title="jeje7"
        description="NodeBird에 오신것을 환영합니다."
      />
      <StyledButton onClick={onLogOut}>로그아웃</StyledButton>
    </Card>
  );
};

export default UserProfile;
