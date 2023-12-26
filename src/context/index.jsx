import CardProvider from "./card";

export default function MainContextProvider({ children }) {
  return <CardProvider>{children}</CardProvider>;
}
