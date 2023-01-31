import React from "react";
import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import StoreItem from "../data/items.json";
import { formatCurrency } from "../utilities/formateCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = StoreItem.find((i) => i.id === id);
  if (item === null) return null;
  return (
    <Stack direction="horizontal" gap={3} className="d-flex align-items-center">
      <img
        src={item?.imgUrl}
        alt=""
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div className="">
          {item?.name}{" "}
          {quantity > 1 && <span className="text-muted">{quantity}x</span>}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {item?.price}
        </div>
      </div>
      <div>{ ((item?.price || 0) * quantity).toFixed(2)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(id)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
