import { parseISO, formatDistance } from "date-fns";

import React from "react";

const TimeAgo = ({ timestamp }) => {
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistance(date, new Date());
    timeAgo = `${timePeriod} ago`;
  }
  return <span title={timestamp}>&nbsp;{timeAgo}</span>;
};

export default TimeAgo;
