import React from "react";
import UserSection from "/components/dynamiccomponent/UserSection";

const Users = ({ users }) => {
  // console.log(users);
  return (
    <>
      <div>
        <h1>Github users</h1>
      </div>
      <UserSection userData={users} />
    </>
  );
};

export default Users;

export const getStaticProps = async () => {
  const { API_KEY } = process.env;
  const res = await fetch(API_KEY);
  const users = await res.json();
  return {
    props: {
      users,
    },
  };
};
