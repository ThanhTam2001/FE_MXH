import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cmt } from "../../../services/apiServices";
import { useSelector } from "react-redux";
import Headertop from "../../Headertop";

const Showcmt = () => {
  const params = useParams();
  const Account = useSelector((state) => state.accountThanh.Account);
  const img1 = "http://localhost:8080";
  const qui = params.id;
  console.log(params);
  const [user, setusert] = useState([]);
  useEffect(() => {
    fetaa();
  }, [qui]);

  const fetaa = async () => {
    let data = await cmt(qui);
    if (data && data.EC === 0) {
      setusert(data.content);
    }
  };

  return (
    <div>
      <Headertop />
      <div className="container">
        <div className="ridge test">
          <div>
            {user &&
              user.length > 0 &&
              user.map((item, index) => {
                console.log(">>> check item :", item);
                return (
                  <>
                    <div key={index} className="taskss">
                      <img
                        style={{ height: 30, width: 30, borderRadius: 20 }}
                        src={`${img1}${Account.Avater}`}
                      />
                      <div className="Cmmt_User">
                        <span>{item.user.account}</span>
                        <p>{item.comment}</p>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
          <div className="status_icon">
            <div className="status__icon1">
              <span>Thích</span>
            </div>
            <div className="status__icon1">
              <span>Bình Luận</span>
            </div>
            <div className="status__icon1">
              <span>Chia sẻ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcmt;
