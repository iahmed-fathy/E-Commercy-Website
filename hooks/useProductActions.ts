import {
  addToCart,
  addToFavorites,
  removeFromCart,
  removeFromFavorites,
} from "@/features/products/productsSlice";
import { useDispatch } from "react-redux";

export default function (productId: string) {
  const dispatch = useDispatch();

  const handleAddToFavorites = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToFavorites(productId));
  };

  const handleRemoveFromFavorites = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(removeFromFavorites(productId));
  };

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(productId));
  };

  const handleRemoveFromCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(removeFromCart(productId));
  };

  return {
    handleAddToFavorites,
    handleRemoveFromFavorites,
    handleAddToCart,
    handleRemoveFromCart,
  };
}
