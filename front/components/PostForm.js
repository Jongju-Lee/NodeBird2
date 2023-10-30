import { Button, Form, Input } from "antd";
import React, { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addPost } from "../reducers/post";

const StyledForm = styled(Form)`
  margin: 10px 0 20px;
`;

const StyledButton = styled(Button)`
  float: right;
`;

const PostForm = () => {
  const dispatch = useDispatch();
  const { imagePaths } = useSelector((state) => state.post);
  const imageInput = useRef();
  const [text, setText] = useState("");
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);
  const onSubmit = useCallback(() => {
    dispatch(addPost);
    setText("");
  }, []);
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  return (
    <StyledForm encType="multipart/form-data" onFinish={onSubmit}>
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="어떤 신기한 일이 있었나요?"
      />
      <div>
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <StyledButton type="primary" htmlType="submit">
          짹짹
        </StyledButton>
      </div>
      <div>
        {imagePaths.map((v) => (
          <div key={v} style={{ display: "inline-block" }}>
            <img src={v} style={{ width: "200px" }} alt={v} />
            <div>
              <Button>제거</Button>
            </div>
          </div>
        ))}
      </div>
    </StyledForm>
  );
};

export default PostForm;
