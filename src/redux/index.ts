// import { useAppDisaptch } from './../hooks/useAppDisaptch';
import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./reducers/userSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import  ProductSlice  from "./reducers/productSlice";

export const store = configureStore({
  reducer: {
    useSlice: UserSlice,
    product: ProductSlice
  },
});

export const useAppDisaptch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
