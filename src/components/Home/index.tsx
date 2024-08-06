import { useEffect } from "react";
import { fetchUser } from "../../redux/reducers/userCreate";
import { useAppDisaptch, useAppSelector } from "../../redux";
import UserCard from "../UserCard";

const Home = () => {
  const dispatch = useAppDisaptch();
  const { user } = useAppSelector((s) => s.useSlice);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  console.log(user, "User");

  return (
    <div>
      <div className="container">
        <center>
          <h1>HOME</h1>
          {
            user.map((el) => <UserCard el={el} key={el.id}/>)
          }
        </center>
      </div>
    </div>
  );
};

export default Home;
