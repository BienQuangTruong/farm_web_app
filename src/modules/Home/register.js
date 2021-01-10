import React from 'react';
import { Button } from '@material-ui/core';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import styles from './styles.less';

const RegisterReferral = () => {
  return (
    <div className={styles.containerReward}>
      <div className={styles.information}>
        <div className={styles.left}>
          <img height={400} src='/banner-invite.png' />
        </div>
        <div className={styles.right}>
          <div className={styles.content}>
            <div className={styles.title}>
              <div className={styles.left}>
                <CardGiftcardIcon style={{ color: 'green',fontSize: 40 }}/>
              </div>
              <div className={styles.right}>
                <p>Tham gia System platform bằng cách tạo tài khoản và sử dụng các dịch vụ để nhận phần thưởng từ chương trình giới thiệu</p>
              </div>
            </div>
            <h4>MỜI BẠN BÈ VÀ NHẬN PHẦN THƯỞNG</h4>
            <p>Mời bạn bè tham gia và sử dụng dịch vụ của <span style={{ fontWeight:'bold'}}>System</span> để mình và bạn bè cùng được nhận thưởng.</p>
            <div className={styles.login}>
              <Button variant="contained" color="primary" style={{ fontSize: 16, marginRight: 20 }}>Đăng ký và nhận phần thưởng của bạn</Button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.instruction}>
        <div className={styles.content}>
          <h4 className={styles.title}>NÓ HOẠT ĐỘNG NHƯ THẾ NÀO ?</h4>
          <div className={styles.card}>
            <div className={styles.left}>
              <p>1</p>
            </div>
            <div className={styles.right}>
              <h4>Giới Thiệu</h4>
              <p>Giới thiệu với nhiều cách thức khác nhau, chẳng hạn như sử dụng Shortlink, Facebook, Linkedin, Zalo Email.</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.left}>
              <p>2</p>
            </div>
            <div className={styles.right}>
              <h4>Nhận Phần Thưởng</h4>
              <p>Nhận phần thưởng khi bạn mời bạn bè đăng ký tài khoản và mua dịch vụ của.</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.left}>
              <p>3</p>
            </div>
            <div className={styles.right}>
              <h4>Thanh Toán</h4>
              <p>Phần thưởng sẽ được thanh toán bằng tiền mặt và chuyển qua ngân hàng.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterReferral;