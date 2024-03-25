import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getorders = createAsyncThunk("getorders", async () => {
    try {
      const res = await axios.get("http://localhost:3000/orders");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });

  export const getorder = createAsyncThunk("getorder", async (id) => {
    try {
      const res = await axios.get(`http://localhost:3000/orders/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });

  export const updateorder = createAsyncThunk("updateorder", async (args) => {
    const {id,body} = args
    try {
      const res = await axios.put(`http://localhost:3000/orders/${id}`,body);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });

  export const addorder = createAsyncThunk("addorder", async (body) => {
    try {
      const res = await axios.post(`http://localhost:3000/orders`,body);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });
  export const deleteorder = createAsyncThunk("deleteorder",  async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/orders/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  });

  
  

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    order: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getorders.fulfilled, (state, action) => {
      state.orders = action.payload;
    });

    builder.addCase(getorder.fulfilled, (state, action) => {
      state.order = action.payload;
    });
    builder.addCase(updateorder.fulfilled, (state, action) => {
        state.orders = action.payload;
      });
      builder.addCase(addorder.fulfilled, (state, action) => {
        state.orders = action.payload;
      });
      builder.addCase(deleteorder.fulfilled, (state, action) => {
        state.orders = action.payload;
      });
  },
});
export default orderSlice.reducer;
