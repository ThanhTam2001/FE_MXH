import Getstatus from "./Home/Getstatus";
import Headertop from "./Headertop";
import Left_Home from "./Home/Left_Home/Left_Home";
import Right_Home from "./Home/Right_Home/Right_Home";
import Lasaota from "./CreatePost/Lasaota";
const Header = () => {
  return (
    <div>
      <Headertop />
      <Left_Home></Left_Home>
      <div className="container home">
        <Lasaota />
      </div>

      <Right_Home></Right_Home>
      <Getstatus />
    </div>
  );
};
export default Header;
