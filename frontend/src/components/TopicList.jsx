import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { topicsData, fetchPhotosByTopic } = props;

  const topicListData = topicsData.map((topics) =>
    <TopicListItem key={topics.id} {...topics} fetchPhotosByTopic={fetchPhotosByTopic} />)

  return (
    <div className="top-nav-bar__topic-list">
      {topicListData}
    </div>
  );
};

export default TopicList;
