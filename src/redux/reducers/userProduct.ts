import axios from "axios";
import { getProduct } from "./productSlice";
export const getItProduct = () => async (useAppDisaptch:any) => {
  try {
    const res = await axios.get<IProduct[]>(
      `https://fakestoreapi.com/products`
    );
    useAppDisaptch(getProduct(res.data));
  } catch (error: any) {
    useAppDisaptch(error.message);
  }
};
