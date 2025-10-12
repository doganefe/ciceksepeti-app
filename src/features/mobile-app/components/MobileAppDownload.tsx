// generated-with-AI (revised)
// Self-contained component - imports config directly instead of receiving as props
import React from "react";
import "./MobileAppDownload.scss";
import appStoreSvg from "../../../assets/app-store.svg";
import googlePlay from "../../../assets/play-store.svg";
import { MOBILE_APP_CONFIG } from "../constants";

const MobileAppDownload: React.FC = () => {
  const { title, subtitle, qrCodeImage, qrCodeImage2x, phoneImage } =
    MOBILE_APP_CONFIG;
  return (
    <div className="mobile-app-download">
      <div className="download-content container">
        <div className="download-content-child">
          <img
            className="phone-image"
            src={phoneImage}
            alt="Mobile App Preview"
          />
          <div />
        </div>

        <div className="download-content-child">
          <div className="qr-code-container">
            <div className="qr-code">
              <img
                src={qrCodeImage}
                srcSet={`${qrCodeImage} 1x, ${qrCodeImage2x} 2x`}
                alt="QR Code"
              />
            </div>
            <div className="qr-code-description">
              <h2>{title}</h2>
              <p>{subtitle}</p>
            </div>
          </div>

          <div className="download-buttons">
            <img src={googlePlay} alt="Google Play" />
            <img src={appStoreSvg} alt="App Store" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppDownload;
