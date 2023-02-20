import { configureStore } from "@reduxjs/toolkit";

import Redux from "./Redux";

export const store = configureStore({
  reducer: {
    Redux,
  },
});
