import React from "react";
import classes from "./FooterNav.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { action } from "../../../store/newNoteVisible";
function FooterNav(props) {
  const toggleNoteHandler = () => {
    props.toggleNote();
  };
  const dispatch = useDispatch();
  const profileHandler = () => {
    console.log("profile handler");
    dispatch(action.showProfile());
  };
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <Link to="/">
          <h2>Home</h2>
        </Link>
      </div>
      <div className={classes.addBtn} onClick={toggleNoteHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
          <path d="M22.6 34.05h3.1v-8.3h8.35v-3.1H25.7v-8.7h-3.1v8.7h-8.65v3.1h8.65ZM24 44.3q-4.2 0-7.9-1.6t-6.45-4.35Q6.9 35.6 5.3 31.9 3.7 28.2 3.7 24q0-4.25 1.6-7.95t4.35-6.425Q12.4 6.9 16.1 5.3T24 3.7q4.25 0 7.95 1.6t6.425 4.325Q41.1 12.35 42.7 16.05q1.6 3.7 1.6 7.95 0 4.2-1.6 7.9t-4.325 6.45Q35.65 41.1 31.95 42.7q-3.7 1.6-7.95 1.6Zm.05-3.4q7 0 11.925-4.95Q40.9 31 40.9 23.95q0-7-4.925-11.925Q31.05 7.1 24 7.1q-7 0-11.95 4.925Q7.1 16.95 7.1 24q0 7 4.95 11.95 4.95 4.95 12 4.95ZM24 24Z" />
        </svg>
      </div>
      <div className={classes.profile} onClick={profileHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
          <path d="M11.15 35.1q3.15-2.15 6.225-3.325Q20.45 30.6 24 30.6t6.675 1.175Q33.8 32.95 36.9 35.1q2.2-2.7 3.1-5.4.9-2.7.9-5.7 0-7.2-4.85-12.05Q31.2 7.1 24 7.1q-7.2 0-12.05 4.85Q7.1 16.8 7.1 24q0 3 .925 5.7t3.125 5.4ZM24 25.6q-2.95 0-4.925-2-1.975-2-1.975-4.95 0-2.9 2-4.9 2-2 4.9-2 2.95 0 4.925 2 1.975 2 1.975 4.95 0 2.9-2 4.9-2 2-4.9 2Zm0 18.7q-4.15 0-7.85-1.6-3.7-1.6-6.475-4.375Q6.9 35.55 5.3 31.875 3.7 28.2 3.7 24t1.6-7.875q1.6-3.675 4.375-6.45Q12.45 6.9 16.125 5.3 19.8 3.7 24 3.7t7.875 1.6q3.675 1.6 6.45 4.375 2.775 2.775 4.375 6.45Q44.3 19.8 44.3 24q0 4.15-1.6 7.85-1.6 3.7-4.375 6.475-2.775 2.775-6.45 4.375Q28.2 44.3 24 44.3Zm0-3.4q2.7 0 5.275-.775T34.4 37.4q-2.55-1.8-5.125-2.725T24 33.75q-2.7 0-5.25.925T13.6 37.4q2.55 1.95 5.125 2.725Q21.3 40.9 24 40.9Zm0-18.45q1.65 0 2.725-1.05 1.075-1.05 1.075-2.75 0-1.65-1.075-2.7Q25.65 14.9 24 14.9q-1.65 0-2.725 1.05Q20.2 17 20.2 18.65q0 1.7 1.075 2.75T24 22.45Zm0-3.8Zm0 18.7Z" />
        </svg>
      </div>
    </div>
  );
}

export default FooterNav;
