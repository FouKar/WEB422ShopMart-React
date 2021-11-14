import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter
      bgColor="success"
      className="text-white text-center text-lg-left"
    >
      <MDBContainer className="p-4">
        <MDBRow>
          <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">ShopMart Electronics</h5>

            <p>
              At Shopmart, we carry all of the latest electronics, at the lowest
              prices. Browse from our large selection of PCs, TVs, gaming
              hardware and accessories. We have just what you need.
            </p>
          </MDBCol>
          <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Our Warranty</h5>

            <p>
              At Shopmart, all your products will be backed by a warranty for 24
              months guaranteed. Shop with confidence, worry-free.
              <br />
              <br />
              <h5 className="text-uppercase">24hr Canada-Wide Shipping </h5>
              <p>
                At ShopMart, we will ship out your products within 24hrs of
                placing the order, for orders made in Canada.
                <br />
              </p>
            </p>
          </MDBCol>

          <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Pages</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Categories
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Registration
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer className="p-4 pb-0">
        <form action="">
          <MDBRow>
            <MDBCol size="auto" className="mb-4 mb-md-0">
              <p className="pt-2">
                <strong>Sign up for our newsletter</strong>
              </p>
            </MDBCol>

            <MDBCol md="5" size="12" className="mb-4 mb-md-0">
              <MDBInput
                type="text"
                id="form5Example2"
                placeholder="Email address"
              />
            </MDBCol>

            <MDBCol size="auto" className="mb-4 mb-md-0">
              <MDBBtn>Subscribe</MDBBtn>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-white" href="https://shopmart.com/">
          shopmart.com
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
