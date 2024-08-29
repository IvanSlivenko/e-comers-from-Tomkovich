import React from 'react'


import styles from '../../styles/custome.css'

const Home = () => {
  return (
    <div >
      <h1 className={styles.custome_title} 
      style={{
                width:'100%',
                fontSize: "3.8rem",
                lineHeight: "1.5",
                marginBottom: " 2rem",
                marginLeft:'40%',
                marginRight:'auto',
                
              }}>
                Навчальний портал
              </h1>
      <h2 style={{
                width:'100%',
                fontSize: "2rem",
                lineHeight: "1.5",
                textAlign: "left"
                
              }}>
          Вчити себе самого – благородна справа,<br /> 
          ще більш благородна – вчити інших; <br />
          до речі, <br />
          останнє куди легше. <br />
        <span style={{ 
          width:"100%",
          fontSize: "1rem",
          paddingLeft: "85%"
          }}>Марк Твен</span>
           
      </h2>
    </div>
  )
}

export default Home