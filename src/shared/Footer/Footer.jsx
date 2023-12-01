import Container from "../../components/Container/Container";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="bg-base-200">
      <Container>
        <div className="footer p-10 mt-24  text-base-content">
          <aside>
            <Logo/>
            <p>
              ElyState 2023
              <br />
              All Right Reserved ©️
            </p>
          </aside>
          <nav>
            <header className="footer-title">Services</header>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
