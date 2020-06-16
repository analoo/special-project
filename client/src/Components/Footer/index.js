import React from "react";

function Footer() {
  return (
    <footer className="footer bg-light-purple my-auto py-2 fixed-bottom">
        <div className="container">
            <div className="d-md-flex flex-row">
                <div className="col text-center">
                    <h1 className="bg-white dark-purple p-3 my-4 rounded">foot<span className="purple">steps</span></h1>
                </div>
                <div className="col text-center">
                    <h5 className="mb-3 font-weight-bold">LINKS</h5>
                    <div className="mb-2">
                        <a href="/" className="dark-purple">FAQ</a><br/>
                    </div>
                    <div className="mb-2">
                        <a href="/" className="dark-purple">Help</a><br/>
                    </div>
                    <div className="mb-2">
                        <a href="/" className="dark-purple">Support</a>
                    </div>
                </div>
                <div className="col text-center">
                    <h5 className="mb-3 font-weight-bold">SOCIAL</h5>
                    <div className="mb-2">
                        <a href="/" className="dark-purple"><i className="fab fa-facebook-square"></i> Facebook</a><br/>
                    </div>
                    <div className="mb-2">
                        <a href="/" className="dark-purple"><i className="fab fa-linkedin"></i> Linkedin</a><br/>
                    </div>
                    <div className="mb-2">
                        <a href="/" className="dark-purple"><i className="fab fa-instagram"></i> Instagram</a>
                    </div>
                </div>
                <div className="col text-center">
                    <h5 className="mb-3 font-weight-bold">COMPANY</h5>
                    <div className="mb-2">
                        <a href="/" className="dark-purple">Blog</a><br/>
                    </div>
                    <div className="mb-2">
                        <a href="/" className="dark-purple">About</a><br/>
                    </div>
                    <div className="mb-2">
                        <a href="/" className="dark-purple">Contact</a>
                    </div>
                </div>
            </div>
            <div class="footer-copyright text-center py-3 dark-purple">© 2020 Copyright
            </div>
        </div>
        
    </footer>

  );
}

export default Footer;
