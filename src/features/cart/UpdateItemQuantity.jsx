import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQty, increaseItemQty } from "./cartSlice";

const UpdateItemQuantity = ({id, quantity}) => {
    const dispatch = useDispatch()
  return (
    <div className="flex gap-2 items-center md:gap-3">
        <Button type="round" onClick={() => dispatch(decreaseItemQty(id))}>-</Button>
        <span className="text-sm font-medium">{quantity}</span>
        <Button type="round" onClick={() => dispatch(increaseItemQty(id))}>+</Button>
      
    </div>
  )
}

export default UpdateItemQuantity;
