import React from "react";

function Footer() {
  return (


    <footer className="footer bg-light-purple my-auto py-2 fixed-bottom" style={{clear: "both"}}>
        <div className="container">
            <div className="d-md-flex flex-row">
                <div className="col text-center">
                    <h1 className="bg-white dark-purple p-3 my-4 rounded">Foot<span className="purple">steps</span></h1>
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
            {/* <span>Hello</span> */}
        </div>
        
    </footer>

    // <footer className="bg-light-purple static bottom-0">
    //   <div className="container mx-auto px-4 pt-10 pb-6">
    //     <div className="flex flex-wrap">
    //       <div className="w-full md:w-1/4 text-center md:text-left">
    //         <h1 className="bg-white dark-purple p-6 mb-4 rounded">Foot<span className="purple">steps</span></h1>
    //       </div>
    //       <div className="w-full md:w-1/4 text-center md:text-left popppins">
    //         <h5 className="uppercase mb-3 font-bold">Links</h5>
    //         <ul className="mb-4">
    //           <li className="mt-2">
    //             <a href="/" className="hover:underline text-teal-600 hover:text-gray-600">FAQ</a>
    //           </li>
    //           <li className="mt-2">
    //             <a href="/" className="hover:underline text-teal-600 hover:text-gray-600">Help</a>
    //           </li>
    //           <li className="mt-2">
    //             <a href="/" className="hover:underline text-teal-600 hover:text-gray-600">Support</a>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="w-full md:w-1/4 text-center md:text-left popppins">
    //         <h5 className="uppercase mb-3 font-bold">Social</h5>
    //         <ul className="mb-4">
    //           <li className="mt-2">
    //             <a href="/" className="hover:underline text-teal-600 hover:text-gray-600"><i className="fab fa-facebook-square"></i> Facebook</a>
    //           </li>
    //           <li className="mt-2">
    //             <a href="/" className="hover:underline text-teal-600 hover:text-gray-600"><i className="fab fa-linkedin"></i> Linkedin</a>
    //           </li>
    //           <li className="mt-2">
    //             <a href="/" className="hover:underline text-teal-600 hover:text-gray-600"><i className="fab fa-instagram"></i> Instagram</a>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="w-full md:w-1/4 text-center md:text-left popppins">
    //         <h5 className="uppercase mb-3 font-bold">Company</h5>
    //         <ul className="mb-4">
    //           <li className="mt-2">
    //             <a href="/" className="hover:underline text-teal-600 hover:text-gray-600">Blog</a>
    //           </li>
    //           <li className="mt-2">
    //             <a href="/" className="hover:underline text-teal-600 hover:text-gray-600">About</a>
    //           </li>
    //           <li className="mt-2">
    //             <a href="/" className="hover:underline text-teal-600 hover:text-gray-600">Contact</a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </footer>

  );
}

export default Footer;
