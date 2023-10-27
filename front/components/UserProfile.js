import React, { useCallback } from "react";
import { Avatar, Button, Card } from "antd";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled(Button)`
  display: block;
  margin: 15px auto 0;
`;

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
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

UserProfile.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default UserProfile;
