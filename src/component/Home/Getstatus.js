import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getstatus } from "../../services/apiServices";
import { AiOutlineGlobal } from "react-icons/ai";
import React from "react";
import { MultiStateCheckbox } from "primereact/multistatecheckbox";
import { useNavigate } from "react-router-dom";
const Getstatus = (props) => {
  const [value, setValue] = useState("public");
  const options = [
    { value: "public", icon: "pi pi-globe" },

    { value: "private", icon: "pi pi-lock" },
  ];

  const img1 = "http://localhost:8080";
  const { listdangtin } = props;

  const navigate = useNavigate();
  return (
    <>
      {listdangtin &&
        listdangtin.length > 0 &&
        listdangtin.map((item, index) => {
          console.log(">>> check item  tam love:", item);
          return (
            <div key={index} className="content_status">
              <div className="status-all">
                <div className="" key={item.id}>
                  <div className="status">
                    <div className="status-title">
                      <div className="status-tilte1">
                        <img src={`${img1}${item.user.avatar}`} />
                        <Link to={String(item.user.user_id)}>
                          {item.user.first_name}
                          {item.user.last_name}
                        </Link>
                      </div>
                    </div>
                    <div className="status-conten">
                      <h2>{item.content}</h2>
                    </div>
                    <div className="status--icon">
                      <div className="status--icon1">
                        <span>Thích</span>
                      </div>
                      <div
                        onClick={() => navigate(`/cmt/${item.status_id}`)}
                        className="status--icon1"
                      >
                        <span>Bình Luận</span>
                      </div>
                      <div className="status--icon1">
                        <span>Chia sẻ</span>
                      </div>
                    </div>
                    <div className="ip_cmmt">
                      <img
                        style={{ height: 40, width: 40, borderRadius: 30 }}
                        src={`${img1}${item.user.avatar}`}
                      />
                      <input onClick={() => props.handleClickbinhluan(item)} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Getstatus;
