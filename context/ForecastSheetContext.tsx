import { createContext, ReactNode, useContext } from "react";
import { SharedValue, useSharedValue } from "react-native-reanimated";

interface ForecastSheetContextProps {
  children: ReactNode;
}

export const ForecastSheetContext = createContext<SharedValue<number> | null>(
  null
);
 
export const ForecastSheetProvider = ({
  children,
}: ForecastSheetContextProps) => {
  const animatedPosition = useSharedValue(0);

  return (
    <ForecastSheetContext.Provider value={animatedPosition}>
      {children}
    </ForecastSheetContext.Provider>
  );
};

export const useForecastSheetPosition = (): SharedValue<number> => {
  const context = useContext(ForecastSheetContext);
  if (context === null) throw new Error("we need a position to work with");
  return context;
};
