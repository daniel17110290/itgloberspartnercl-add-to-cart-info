import React from "react"
import styles from "./styles.css"

const ButtonGroup = () => {
  return (
    <>
      <div>
        <a className={styles.ref} href="/checkout/#/cart">CHECK OUT</a>
      </div>
      <div>
        <button className={styles.button} onClick={() => window.location.href = '/construccion'}>CONTINUA COMPRANDO</button>
      </div>
    </>
  )
}

export default ButtonGroup