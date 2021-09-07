import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-dark text-white mt-5 p-4 text-center">
        prithivi&copy; {new Date().getFullYear()}
        <br />
        
      </footer>
    );
  }
}

export default Footer;
