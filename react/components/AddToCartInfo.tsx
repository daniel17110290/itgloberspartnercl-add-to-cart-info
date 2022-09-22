import React from "react";
import { useProduct } from "vtex.product-context"
import { useOrderForm } from "vtex.order-manager/OrderForm"
import ButtonGroup from "./ButtonGroup";
import { generateBlockClass } from "@vtex/css-handles";
import styles from "./styles.css"


const AddToCartInfo = ({ blockClass }: { blockClass: string }) => {
  const container = generateBlockClass(styles.container, blockClass)
  const container__item = generateBlockClass(styles.container__item, blockClass)
  const productInfo = useProduct()
  const { orderForm: {
    items,
    totalizers
  } } = useOrderForm()
  console.log("este producto tiene esta info:", productInfo)
  console.log("estos son mis totales:", totalizers[0])
  return (
    <div className={container}>
      {items.map((item: any, index: number) => {
        console.log("estos son los item", item)
        return (
          <div key={index} className={container__item}>
            <div >
              <img className={styles.image} src={item.imageUrls.at1x} />
            </div>
            <div>
              <p>{item.name}</p>
              <p>{item.id}</p>
              <p className={styles.price}>$ {item.price}</p>
              <p>Cant: {item.quantity}</p>
            </div>
          </div>
        )
      })}
      <div>
        <p>Tienes {items.length} items en tu compra</p>
        <p>Total: {totalizers[0]?.value}</p>
      </div>
      <ButtonGroup />
    </div>
  )
}

export default AddToCartInfo