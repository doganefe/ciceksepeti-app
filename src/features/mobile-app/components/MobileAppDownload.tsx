import React from "react";
import "./MobileAppDownload.scss";
import appStoreSvg from "../../../assets/app-store.svg";
import googlePlay from "../../../assets/play-store.svg";
import type { MobileAppDownloadProps } from "../types/mobile-app-download.types";

const MobileAppDownload: React.FC<MobileAppDownloadProps> = ({
  title,
  subtitle,
  qrCodeImage,
  phoneImage,
}) => {
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
              <img src={qrCodeImage} alt="QR Code" />
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
