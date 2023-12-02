import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Contact.css";
import { FiMail } from "react-icons/fi";
import { BsTelephoneFill } from "react-icons/bs";
import compLine from "../Images/compLine.png";

export default function Contact() {
  return (
    <>
      <div id="contact_parent">
        <div class="col-md-4 wow fadeInDown cont_map" data-wow-delay="200ms">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3518.670943541108!2d76.80228785036532!3d28.126056282535068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d49db6bf5b8f5%3A0x2afd37fb013ca6d4!2sCELLUS%20TECH%20INDIA%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1578663789150!5m2!1sen!2sin"
            loading="lazy"
          ></iframe>
        </div>

        {/* <div className="gmnoprint" data-control-width="40" data-control-height="81" style={{ position: 'absolute', left: '0px', top: '0px' }}>
        <div draggable="false" style={{ userSelect: 'none', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 4px -1px', borderRadius: '2px', cursor: 'pointer', backgroundColor: 'rgb(255, 255, 255)', width: '40px', height: '81px' }}>
          <button
            draggable="false"
            aria-label="Zoom in"
            title="Zoom in"
            type="button"
            className="gm-control-active"
            style={{
              background: 'none',
              display: 'block',
              border: '0px',
              margin: '0px',
              padding: '0px',
              textTransform: 'none',
              appearance: 'none',
              position: 'relative',
              cursor: 'pointer',
              userSelect: 'none',
              overflow: 'hidden',
              width: '40px',
              height: '40px',
              top: '0px',
              left: '0px'
            }}
          >
            <img
              src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M18%207h-7V0H7v7H0v4h7v7h4v-7h7z%22/%3E%3C/svg%3E"
              alt=""
              style={{ height: '18px', width: '18px' }}
            />
            <img
              src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M18%207h-7V0H7v7H0v4h7v7h4v-7h7z%22/%3E%3C/svg%3E"
              alt=""
              style={{ height: '18px', width: '18px' }}
            />
            <img
              src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M18%207h-7V0H7v7H0v4h7v7h4v-7h7z%22/%3E%3C/svg%3E"
              alt=""
              style={{ height: '18px', width: '18px' }}
            />
            <img
              src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23d1d1d1%22%20d%3D%22M18%207h-7V0H7v7H0v4h7v7h4v-7h7z%22/%3E%3C/svg%3E"
              alt=""
              style={{ height: '18px', width: '18px' }}
            />
          </button>
          <div style={{ position: 'relative', overflow: 'hidden', width: '30px', height: '1px', margin: '0px 5px', backgroundColor: 'rgb(230, 230, 230)', top: '0px' }}></div>
          <button
            draggable="false"
            aria-label="Zoom out"
            title="Zoom out"
            type="button"
            className="gm-control-active"
            style={{
              background: 'none',
              display: 'block',
              border: '0px',
              margin: '0px',
              padding: '0px',
              textTransform: 'none',
              appearance: 'none',
              position: 'relative',
              cursor: 'pointer',
              userSelect: 'none',
              overflow: 'hidden',
              width: '40px',
              height: '40px',
              top: '0px',
              left: '0px'
            }}
          >
            <img
              src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%207h18v4H0V7z%22/%3E%3C/svg%3E"
              alt=""
              style={{ height: '18px', width: '18px' }}
            />
            <img
              src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%207h18v4H0V7z%22/%3E%3C/svg%3E"
              alt=""
              style={{ height: '18px', width: '18px' }}
            />
            <img
              src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%207h18v4H0V7z%22/%3E%3C/svg%3E"
              alt=""
              style={{ height: '18px', width: '18px' }}
            />
            <img
              src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23d1d1d1%22%20d%3D%22M0%207h18v4H0V7z%22/%3E%3C/svg%3E"
              alt=""
              style={{ height: '18px', width: '18px' }}
            />
          </button>
        </div>
      </div> */}

        <div className="contact_details">
          <h3>Contact Info</h3>
          <img src={compLine} style={{ width: "17rem" }} />
          <br />
          <div class="space"></div>
          <p style={{ color: "black" }}>
            <i class="fa fa-building-o fa-fw pull-left fa-2x"></i>Cellus Tech
            India Pvt. Ltd.
            <br />
            <br />
            <strong>Corp. Office(Factory)</strong>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            H1-326, RIICO Industrial area, Khuskhera,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Bhiwadi, Distt.- Alwar(Rajasthan)-301707 (IN)
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <BsTelephoneFill style={{ marginRight: "1em" }} />
            +91 1493-452877
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
          
          <hr />
          <strong>Regd. Office</strong>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          365, Rohnat, Bhiwani, Haryana-127035 (IN)
          <br />
          <hr />
          <strong>R&D Centre</strong>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Office No: B2, Raghubir Market,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Near
          Canara Bank, Tapukara, Bhiwadi,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Distt:
          Alwar, Rajasthan-301707 (IN)
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <BsTelephoneFill style={{ marginRight: "1em" }} />
            +91 1493-472877
          <p></p>
          <div class="space"></div>
          <p style={{ color: "black" }}>
            {/* <i class="fa fa-envelope-o fa-fw pull-left fa-2x"></i> */}
            <FiMail style={{ marginRight: "1em" }} />
            info@cellustechindia.com
          </p>
          <div class="space"></div>
          <p style={{ color: "black" }}>
            {/* <i class="fa fa-phone fa-fw pull-left fa-2x"></i> */}
            <BsTelephoneFill style={{ marginRight: "1em" }} />
            {/* +91 1493-452877 */}
            +91 9468375467
            <br />
          </p>
          <p style={{ color: "black" }}>
            {/* <i class="fa fa-phone fa-fw pull-left fa-2x"></i> */}
            <BsTelephoneFill style={{ marginRight: "1em" }} />
            +91 9416922877            
            <br />
           </p>
           {/* <p>
            <BsTelephoneFill style={{ marginRight: "1em" }} />
            +91 1493-472877
            +91 9468375467
          </p> */}
        </div>
      </div>
    </>
  );
}
