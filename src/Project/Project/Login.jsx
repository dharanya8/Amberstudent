import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { FaFacebook, FaApple, FaEnvelope, FaChevronDown } from "react-icons/fa";
import "./../Project/LoginModel.css";

function LoginModal() {
  const [show, setShow] = useState(true);
  const [mobile, setMobile] = useState("");
  const [open, setOpen] = useState(false);

  // ✅ Two separate focus states
  const [isCodeFocused, setIsCodeFocused] = useState(false);
  const [isMobileFocused, setIsMobileFocused] = useState(false);

   const [selectedCode, setSelectedCode] = useState({
    code: "+91",
    country: "India",
  });


  const countries = [
    { code: "+44", country: "United Kingdom" },
    { code: "+91", country: "India" },
    { code: "+61", country: "Australia" },
    { code: "+1", country: "United States" },
    { code: "+81", country: "Japan" },
    { code: "+49", country: "Germany" },
    { code: "+33", country: "France" },
    { code: "+971", country: "UAE" },
    { code: "+65", country: "Singapore" },
    { code: "+86", country: "China" },
    { code: "+27", country: "South Africa" },
    { code: "+55", country: "Brazil" },
    { code: "+39", country: "Italy" },
    { code: "+34", country: "Spain" },
    { code: "+52", country: "Mexico" },
  ];

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Open Login
      </Button>

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Body className="p-4 position-relative">
          {/* ❌ Close Modal */}
          <IoClose
            size={26}
            style={{
              position: "absolute",
              top: "15px",
              right: "15px",
              cursor: "pointer",
              color: "#555",
            }}
            onClick={() => setShow(false)}
          />

          <h5 className="mb-4 text-center fw-bold">Login to Amber</h5>

          {/* 📱 Code + Mobile Input */}
          <div className="input-row">
            {/* Country Code Dropdown */}
            <div className="floating-label small-input position-relative">
              <div
                className={`code-input ${isCodeFocused ? "focused" : ""}`}
                onClick={() => {
                  setOpen((prev) => !prev);
                  setIsCodeFocused(true);
                }}
                onBlur={() => setIsCodeFocused(false)}
              >
                <input
                  type="text"
                  id="code"
                  value={selectedCode.code}
                  readOnly
                  required
                />

                {/* Floating label behavior */}
                <label
                  htmlFor="code"
                  className={
                    isCodeFocused || selectedCode.code ? "float" : ""
                  }
                >
                  Code <span className="text-danger">*</span>
                </label>

                {/* Down arrow if no code */}
                {!selectedCode.code && (
                  <FaChevronDown className={`arrow ${open ? "open" : ""}`} />
                )}

                {/* Remove icon if selected */}
                {selectedCode.code && (
                  <MdClose
                    size={18}
                    className="remove-icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCode({ code: "", country: "" });
                    }}
                  />
                )}
              </div>

              {/* Scrollable dropdown */}
              {open && (
                <div className="drop-list">
                  {countries.map((item, index) => (
                    <div
                      key={index}
                      className="drop-item"
                      onClick={() => {
                        setSelectedCode(item);
                        setOpen(false);
                        setIsCodeFocused(false);
                      }}
                    >
                      <strong>{item.code}</strong> — {item.country}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Number Input */}
            <div className="floating-label flex-grow-1">
              <input
                type="tel"
                id="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                onFocus={() => setIsMobileFocused(true)}
                onBlur={() => setIsMobileFocused(false)}
                required
              />
              <label
                htmlFor="mobile"
                className={isMobileFocused || mobile ? "float" : ""}
              >
                Mobile Number <span className="text-danger">*</span>
              </label>
            </div>
          </div>

          {/* Continue Button */}
          <Button
            variant="danger"
            className="w-100 py-2 mt-3"
            disabled={!mobile || !selectedCode.code}
          >
            Continue
          </Button>

          <div className="text-center my-3 text-secondary">or log in using</div>

          {/* Social Buttons */}
          <div className="d-flex flex-column gap-2">
            <Button
              variant="outline-secondary"
              className="d-flex align-items-center justify-content-center gap-2"
            >
              <FaEnvelope /> Continue with Email
            </Button>

            <Button
              variant="outline-primary"
              className="d-flex align-items-center justify-content-center gap-2"
              onClick={() =>
                (window.location.href = "https://www.facebook.com/login")
              }
            >
              <FaFacebook /> Continue with Facebook
            </Button>

            <Button
              variant="outline-dark"
              className="d-flex align-items-center justify-content-center gap-2"
              onClick={() =>
                (window.location.href = "https://appleid.apple.com/sign-in")
              }
            >
              <FaApple /> Continue with Apple
            </Button>
          </div>

          <p className="small text-center mt-3 text-muted">
            By signing in, you agree to our{" "}
            <a href="#">Privacy Policy</a> and{" "}
            <a href="#">Terms & Conditions</a>.
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginModal;
