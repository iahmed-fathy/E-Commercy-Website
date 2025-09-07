import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CheckoutState = {
  quantities: Record<string, number>;
  shipping: number;
};

const initialState: CheckoutState = {
  quantities: {},
  shipping: 0,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setQuantities: (state, action: PayloadAction<Record<string, number>>) => {
      state.quantities = action.payload;
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; value: number }>
    ) => {
      state.quantities[action.payload.id] = Math.max(1, action.payload.value);
    },
    setShipping: (state, action: PayloadAction<number>) => {
      state.shipping = action.payload;
    },
  },
});

export const { setQuantities, updateQuantity, setShipping } =
  checkoutSlice.actions;

export const selectQuantities = (state: any) => state.checkout.quantities;
export const selectShipping = (state: any) => state.checkout.shipping;

export default checkoutSlice.reducer;
