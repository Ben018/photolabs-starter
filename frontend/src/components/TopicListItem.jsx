import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { fetchPhotosByTopic } = props;

  const clickHandler = () => {
    fetchPhotosByTopic(props.id)
  };

  return (
    <div className="topic-list__item" onClick={clickHandler}>
      <span>
        {props.title}
      </span>
    </div>
  )
};

export default TopicListItem;