import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import _ from 'lodash'
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { creatcmt } from '../../services/apiServices';
const ModalCmmt = (props) => {
  const { show, setShow ,showbinhluan} = props
  const params = useParams();
  const quizId = params.id;
  const navigate = useNavigate();
  console.log('check paramse', params)
  const handleClose = () => {
    setShow(false)
  };

  const [comment, setcomment] = useState("")
  

  console.log("tat ca cmt ",showbinhluan.status_id,showbinhluan.user_id  )

 

  const handlcmt= async () => {

    let data = await creatcmt(showbinhluan.user_id,showbinhluan.status_id,comment)

    if (data && data.EC === 0) {
      handleClose();
    }   
  }


  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bình luận</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>
      
            <Form.Group className="mb-3" >
              <Form.Label>Nội dung bình luận</Form.Label>
              <Form.Control value={comment} as="textarea" rows={3}
                onChange={(event) => setcomment(event.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handlcmt} >
            Đăng bài
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCmmt;