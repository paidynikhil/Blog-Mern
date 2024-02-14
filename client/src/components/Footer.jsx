import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsInstagram, BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500 ">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1 ">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Nikhil&apos;s Blog
                </span>
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="/contacts"
                  // target="_blank"
                  rel="noopener noreferrer"
                >
                  Contacts
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  //target="_blank"
                  rel="noopener noreferrer"
                >
                  About Me
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.github.com/paidynikhil"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link href="https://www.linkedin.com/in/paidy-nikhil-4b7027243">
                  Linkedin
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Nikhil's blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              target="_blank"
              href="https://wa.me/qr/GJPTOBAVE6BNO1"
              icon={BsWhatsapp}
            />
            <Footer.Icon
              target="_blank"
              href="https://www.instagram.com/_nikhil_318?utm_source=qr&igsh=ZzZ4OHltNHY1aWUw"
              icon={BsInstagram}
            />
            <Footer.Icon
              target="_blank"
              href="https://github.com/paidynikhil"
              icon={BsGithub}
            />
            <Footer.Icon
              target="_blank"
              href="https://www.linkedin.com/in/paidy-nikhil-4b7027243"
              icon={BsLinkedin}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
