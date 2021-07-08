import logo from "../assets/img/header-logo.png";

const Header = () => {
  const view = `
        <span class="header-home-img"><img src="${logo}" alt="Logo Gobierno"></span>
        <span><a href="#">Ir a Gov.co</a></span>
    `;
  return view;
};

export default Header;