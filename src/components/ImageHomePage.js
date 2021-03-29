import React from 'react';
import styles from '../styles/components/HomeImage.module.css'

function ImageHomePage() {
  return (
    <div className={styles.container}>
      <img src='icons/home.svg' alt='ImgHome' />
    </div>
  )
}

export default ImageHomePage;