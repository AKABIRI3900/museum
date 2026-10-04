import { createContext, useCallback, useContext, useMemo, useState } from "react";
import BookingDialog from "./components/BookingDialog";

const BookingCtx = createContext(null);
export const useBooking = () => useContext(BookingCtx);

export function BookingProvider({ children }) {
  const [state, setState] = useState({ open: false, subject: "" });
  const open = useCallback((subject = "") => setState({ open: true, subject }), []);
  const close = useCallback(() => setState((s) => ({ ...s, open: false })), []);
  const value = useMemo(() => ({ open }), [open]);

  return (
    <BookingCtx.Provider value={value}>
      {children}
      <BookingDialog open={state.open} subject={state.subject} onClose={close} />
    </BookingCtx.Provider>
  );
}
