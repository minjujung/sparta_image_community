import React, { useEffect, useState } from "react";
import { Badge } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";

import { realtime } from "../shared/firebase";
import { useSelector } from "react-redux";

const NotiBadge = (props) => {
  const [is_read, setIsRead] = useState(true);
  const user_id = useSelector((state) => state.user.user.uid);
  //알림 버튼을 누르고 페이지에 들어갔을 때
  //알림 뱃지가 꺼질 수 있는 함수
  const notiCheck = () => {
    const notiDB = realtime.ref(`noti/${user_id}`);
    notiDB.update({ read: true });
    props._onClick();
  };

  useEffect(() => {
    const notiDB = realtime.ref(`noti/${user_id}`);

    // 값이 바뀌었을 때 어떤 동작을 하고 싶은지 여기서 정의
    notiDB.on("value", (snapshot) => {
      if (snapshot.val()) {
        setIsRead(snapshot.val().read);
      }
    });

    return () => notiDB.off();
  }, []);

  return (
    <>
      <Badge
        color="secondary"
        variant="dot"
        invisible={is_read}
        onClick={notiCheck}
      >
        <NotificationsIcon />
      </Badge>
    </>
  );
};

NotiBadge.defaultPropsv = {
  _onClick: () => {},
};

export default NotiBadge;
