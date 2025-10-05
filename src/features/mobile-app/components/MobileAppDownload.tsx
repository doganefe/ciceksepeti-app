import React from "react";
import "./MobileAppDownload.scss";
import type { MobileAppDownloadProps } from "../types/mobile-app-download.types";

const MobileAppDownload: React.FC<MobileAppDownloadProps> = ({
  title,
  subtitle,
  qrCodeImage,
  phoneImage,
  googlePlayLink,
  appStoreLink,
}) => {
  return (
    <div className="mobile-app-download">
      <div className="download-content container">
        <div className="phone-preview">
          <img src={phoneImage} alt="Mobile App Preview" />
        </div>

        <div className="download-info">
          <h2>{title}</h2>
          <p>{subtitle}</p>

          <div className="qr-code">
            <img src={qrCodeImage} alt="QR Code" />
          </div>

          <div className="download-buttons">
            {googlePlayLink && (
              <a href={googlePlayLink} className="download-btn google-play">
                <span>Google Play</span>
                <span>HEMEN AL</span>
              </a>
            )}

            {appStoreLink && (
              <a href={appStoreLink} className="download-btn app-store">
                <span>App Store</span>
                <span>App Store'dan</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppDownload;
