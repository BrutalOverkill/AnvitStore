import "./globals.css";
import './fanta.css'
import Head from "./head";
import Link from "next/link";
import Cart from "@/components/Cart";
import EmailInput from "@/components/EmailInput";
import ProductsProvider from "@/context/ProductContext";

export const metadata = {
  title: "AnvitStore",
  description: "A super cool store for programmers and productivity fiends!",
};

export default function RootLayout({ children }) {
  return (
    <ProductsProvider>
      <html lang="en">
        <Head />
        <body >
          <div id="portal" />
          <div id="app" >
            <header>
              <div className="header-content">
                <Link href={'/'}>
                  <h1>Anvit&apos;sStore</h1>
                </Link>
                <h5 className="mid-text">- Cool stuff for cool people -</h5>
                <Cart />
              </div>
            </header>

            <main>
              {children}
            </main>
            <div className="hr" />

            <footer>
              <div className="email-container">
                <h5>Get a sneak peak at new additions to the store, special offers, and so much more.</h5>
                <EmailInput />
              </div>

              <div className="links-container">
                <div>
                  <h3>AnvitSingh</h3>
                  <Link target="_blank" href={'/'}>Anvit&apos; Hub</Link>
                  <Link target="_blank" href={'/'}>Roadmap</Link>
                </div>
                <div>
                  <h3>Store</h3>
                  <Link href={'/'}>Home</Link>
                  <Link href={'/cart'}>Cart</Link>
                </div>
                <div>
                  <h3>Support</h3>
                  <Link href={'/contact'}>Contact</Link>
                  <Link href={'/faq'}>FAQs</Link>
                </div>
              </div>

              <div className="socials">
                <p>© <a href="https://www.anvitdoestech.com" target="_blank">AnvitSingh</a> 2025<br />Built with NextJS 🔥</p>
                <div className="social-links">
                  <Link href={'https://github.com/BrutalOverkill/3_anvitstore'} target="_blank"><i className="fa-brands fa-github"></i></Link>
                  <Link href={'#'} target="_blank"><i className="fa-brands fa-youtube"></i></Link>
                  <Link href={'https://www.linkedin.com/in/anvit2501/'} target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
                </div>
              </div>
            </footer>
          </div>
        </body>
      </html>
    </ProductsProvider>
  );
}
