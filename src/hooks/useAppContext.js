import { useContext } from "react";
import { Context } from "../context";

export default function useAppContext() {
  const context = useContext(Context);

  if(!context) throw new Error("Context topilmadi")

  return context;
} 
