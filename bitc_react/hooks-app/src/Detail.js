import React, { useState, useRef, useEffect } from "react";
import emptyimg from "./img/empty_heart.png";
import fillimg from "./img/fill_heart.png";

const Detail = () => {
  const [like, setLike] = useState(0);
  const [count, setCount] = useState(2);
  const [nowImg, setNowImg] = useState(emptyimg);
  const img = useRef();

  useEffect(() => {
    console.log("use");
    img.current.src = nowImg;
  }, [like]);

  const fill = () => {
    setLike(like + 1);
    setNowImg(fillimg);
  };

  return (
    <div>
      <div>
        <img onClick={fill} ref={img} />
      </div>
      <div>좋아요{like}</div>
      <div>댓글수{count}</div>
      <div>댓글1</div>
      <div>댓글2</div>
    </div>
  );
};

export default Detail;
