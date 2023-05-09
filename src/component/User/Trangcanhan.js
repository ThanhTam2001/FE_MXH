import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getUser1 } from "../../services/apiServices";
import Button from "react-bootstrap/Button";
import { Image } from "primereact/image";
import Avatar from "./Avatar";
import Modelavatar from "../Model/Modelavatar";
import Modelback from "../Model/Modeback";
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { List, Menu } from "antd";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getstatus } from "../../services/apiServices";
import Getstatus from "../Home/Getstatus";
import Home from "../Home/Home";
import {
  HomeOutlined,
  GroupOutlined,
  UnorderedListOutlined,
  UserOutlined,
  PoweroffOutlined,
} from "@ant-design/icons/lib/icons";
import Demo from "./Demo";


const Trangcanhan = () => {
  const [listdangtin, setlistdangtin] = useState([]);
  const Account = useSelector((state) => state.accountThanh.Account);
  const [user, setuser] = useState([]);
  const [avatar1, setavatar1] = useState(false);
  const [avatar2, setavatar2] = useState(false);
  const params = useParams();
  const location = useLocation();
  const quizId = params.id;
  console.log(quizId);

  const img1 = "http://localhost:8080";
  console.log(location);
  useEffect(() => {
    fetch();
  }, [quizId]);

  const fetch = async () => {
    let data = await getUser1(quizId);
    if (data && data.EC === 0) {
      // console.log("Trang cá nhân :", data.content);
      setuser(data.content);
    }
    console.log(">>>Check status: ", data);
  };

  useEffect(() => {
    fetchListdangtin();
  }, []);

  const fetchListdangtin = async () => {
    let data = await getstatus();

    if (data && data.EC === 0) {
      console.log(data);
      setlistdangtin(data.content);
    }
  };
  const navigate = useNavigate();

  return (
    <div >
      <div className="container User ">
        <div>
          <Avatar user={user} />
          <Modelavatar show={avatar1} setShow={setavatar1} fetch={fetch} />

          <Modelback show={avatar2} setShow={setavatar2} fetch={fetch} />

          <div>
            <div className="bt-bg">
              <Button onClick={() => setavatar2(true)} variant="light">
                Chỉnh sửa ảnh bìa
              </Button>
            </div>
            <div className="bt-bg1">
              <Button onClick={() => setavatar1(true)} variant="primary">
                Chỉnh sửa ảnh đại diện
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="SideMenu_CaNhan">
        <Menu
          onClick={({ key }) => {
            if (key === "signout") {
              // sign out
            } else {
              navigate(key);
            }
          }}
          items={[
            { label: "Home", key: "/", icon: <HomeOutlined /> },
            {
              label: "Group",
              key: "/group",
              icon: <GroupOutlined />,
            },
            {
              label: "Admin",
              key: "/admin",
              icon: <UnorderedListOutlined />,
            },
            { label: "Profile", key: "/7", icon: <UserOutlined /> },
            {
              label: "Signout ",
              key: "/signout",
              icon: <PoweroffOutlined />,
              danger: true,
            },
          ]}
        ></Menu>

        <div>
          <Routes>
            <Route path="/" element={<div></div>}></Route>
            <Route path="/Group" element={<div>Group</div>}></Route>
            <Route path="/UserList" element={<div>UserList</div>}></Route>
            <Route path="/Profile" element={<div>Profile</div>}></Route>
            <Route path="/Singout" element={<div>Singout</div>}></Route>
          </Routes>
        </div>
      </div>

      <div className="my">
        <Row className="pic_left">
          <div className="pic">
            <h3>Ảnh</h3>
            <div className="pic_me">
              <Image
                src={`${img1}${user.avatar}`}
                alt="Image"
                width="250"
                preview
              />
            </div>
          </div>
        </Row>

        <Row className=" pic_left1 ">
          <div className="friend">
            <h3>Bạn bè</h3>
            <div className="pic_friends">
              <Image
                src={`${img1}${user.avatar}`}
                alt="Image"
                width="250"
                preview
              />
            </div>
          </div>
        </Row>
      </div>

      <Col className="List_Status">
        <Home />
        <Getstatus listdangtin={listdangtin} />
      </Col>
    </div>
  );
};

export default Trangcanhan;
