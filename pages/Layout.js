import NabBarStyled from "../components/NavBarStyled";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <NabBarStyled></NabBarStyled>
      <div className="inner-layout">{children}</div>
    </div>
  );
}
