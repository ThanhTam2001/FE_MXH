import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import axios from "axios";
import '../Model/Modelavatar.scss'
const Modelavatar = (props) => {
  const { show, setShow } = props;

  const Account = useSelector((state) => state.accountThanh.Account);
  const handleClose = () => {
    setShow(false);
    setprevieImage("");
    setuser_id(Account.User_id);
  };

  const [user_id, setuser_id] = useState("");

  const [previeImage, setprevieImage] = useState("");
  const handleuploadima = (event) => {
    setprevieImage(URL.createObjectURL(event.target.files[0]));
  };

  const hanndSubmitCreate = async () => {
    const fromdata = new FormData();
    const fileField = document.querySelector('input[type="file"]');

    fromdata.append("id", user_id);
    fromdata.append("image", fileField.files[0]);
    let data = await axios.post(
      "http://localhost:8080/api/postimage/v1/postava",
      fromdata
    );
    console.log("la sap day ta", data);
    await props.fetch();
    handleClose();
  };

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
      Launch demo modal
    </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thay đổi ảnh đại diện</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="pic_avatarid">
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label> ID</Form.Label>
              <Form.Control
                placeholder="id"
                value={user_id}
                onChange={(event) => setuser_id(event.target.value)}
              />
            </Form.Group>
            </div>
           
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Hình ảnh</Form.Label>
              <Form.Control
                type="file"
                onChange={(event) => handleuploadima(event)}
              />
            </Form.Group>
            <div>
              {previeImage ? (
                <img style={{ width: 200, height: 200 }} src={previeImage} />
              ) : (
                <span>Hình ảnh</span>
              )}
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={hanndSubmitCreate}>
            Thay đổi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modelavatar;
