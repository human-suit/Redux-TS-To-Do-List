import { RootState } from "../../store/rootReduser";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
