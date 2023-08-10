import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { topicsData } = props;
  const topicListData = topicsData.map((topics) =>
    <TopicListItem key={topicsData.id} {...topics} />)
  return (
    <div className="top-nav-bar__topic-list">
      {topicListData}
    </div>
  );
};
export default TopicList;
