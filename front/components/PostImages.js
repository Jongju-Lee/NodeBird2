import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { PlusOutlined } from "@ant-design/icons";
import ImagesZoom from "./ImagesZoom";

const StyledDiv = styled.div`
  display: inline-block;
  width: 50%;
  text-align: center;
  vertical-align: middle;
`;

const PostImages = ({ images }) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false);

  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);
  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  }, []);

  if (images.length === 1) {
    return (
      <>
        <img
          role="presentation"
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  if (images.length === 2) {
    return (
      <>
        <img
          role="presentation"
          style={{ display: "inline-block", width: "50%" }}
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        />
        <img
          role="presentation"
          style={{ display: "inline-block", width: "50%" }}
          src={images[1].src}
          alt={images[1].src}
          onClick={onZoom}
        />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  return (
    <>
      <div>
        <img
          role="presentation"
          style={{ display: "inline-block", width: "50%" }}
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        />
        <StyledDiv role="presentation" onClick={onZoom}>
          <PlusOutlined />
          <br />
          {images.length - 1}
          개의 사진 더보기
        </StyledDiv>
      </div>
      {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
    </>
  );
};

PostImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default PostImages;
