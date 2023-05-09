import { Image } from 'primereact/image';
import Dropdown from 'react-bootstrap/Dropdown';
import { useSelector } from "react-redux";
const Avatar = (props) => {
    const {user} = props
    // console.log("Check usser ham con ",user )
  
    const img1 = 'http://localhost:8080'
    const Account = useSelector((state) => state.accountThanh.Account);
    return(
        
        <div className='bg'>
            <div className=' bg_user'>
                    <div className='bt-bg'>
                    </div>
                    <img className='bg_img' src={`${img1}${user.background}`} />
                </div>
        <div className='img_acatar'>
       
        <Image src={`${img1}${user.avatar}`} alt="Image" width="250" preview />
        {/* <img className='bg_img' src={`${img1}${user.avatar}`} /> */}
         <span>{user.first_name} {user.last_name}  </span>

            
        
     </div>
      </div>
    )
}

export default Avatar