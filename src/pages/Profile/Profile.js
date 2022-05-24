import React from 'react';
import style from "../../assets/scss/profile.module.scss";
import Button from '../../ui/button/Button';


const Profile = () => {
  return (
    <div className={style.container}>
      <div className={style.box__avatar__text}>
        <div className={style.avatar} >
        <img src={require("../../assets/images/profileAvatar.png")} alt="Profile Avatar" class="mb-3"/>
          <Button label={'Change avatar'} className={'btn-primary btn-sm'} />
      </div>
      <div className={style.text}>
        <p>First Name</p>
        <p>Last Name</p>
        <p>Score</p>
        <p>Place in the ranking</p>
      </div>
      </div>
       <div className={style.btn__change__pass}>
        <Button label={'Change password'} className={'btn-primary btn-sm'} />
      </div>
    </div>
  )
}

export default Profile