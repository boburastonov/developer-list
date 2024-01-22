import React, { useState } from "react";
import classes from "./box.module.css";
import MockData from "./Mockdata";
import userImg from "./Assets/userImg.jpg";

export default function Box() {

  const [list, setList] = useState(MockData)
  const removeBox = (id) => {
    const newList = list.filter((item) => item.userId !== id);
    setList(newList);
  }

  return MockData.map((item) => (
      <div key={item.userId} className={classes.Box} onMouseEnter={() => console.log('hello')} onMouseLeave={() => console.log('bye')}>
        <div className={classes.Overlay}>
          <button onClick={() => removeBox(item.userId)} className={classes.RemoveBtn}>Remove User</button>
        </div>
        <div className={classes.UserListTop}>
          <img className={classes.UserImg} src={userImg} alt={item.firstName} />
          <div className={classes.Name}>
          <h1 className={classes.UserNickName}>{item.nickName}</h1>
          <p className={classes.UserName}>{item.firstName}</p>
          </div>
        </div>
        <ul className={classes.UserInfoList}>
          <li className={classes.UserInfoItem}>
            <p className={classes.Left}>COMPANY</p>
            <p className={classes.Right}>{item.company}</p>
          </li>
          <li className={classes.UserInfoItem}>
            <p className={classes.Left}>EMAIL</p>
            <p className={classes.Right}>{item.email}</p>
          </li>
          <li className={classes.UserInfoItem}>
            <p className={classes.Left}>PHONE</p>
            <p className={classes.Right}>{item.phone}</p>
          </li>
          <li className={classes.UserInfoItem}>
            <p className={classes.Left}>WEBSITE</p>
            <p className={classes.Right}>{item.website}</p>
          </li>
        </ul>
      </div>
  ));
}
