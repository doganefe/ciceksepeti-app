import React from "react";
import "./Footer.scss";
import {
  FOOTER_SECTIONS,
  FOOTER_SOCIAL_MEDIA,
  FOOTER_TEXTS,
  HEADER_CONFIG,
} from "../../../shared/constants";
import { fbIcon, xIcon, instagramIcon, youtubeIcon } from "../../../assets";

const Footer: React.FC = () => {
  const logo = HEADER_CONFIG.logoImage;
  const socialMedia = FOOTER_SOCIAL_MEDIA;
  const sections = FOOTER_SECTIONS;
  const privacyText = FOOTER_TEXTS.privacyText;
  const privacyLink = FOOTER_TEXTS.privacyLink;
  const description = FOOTER_TEXTS.description;
  const copyright = FOOTER_TEXTS.copyright;
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo} alt="ÇiçekSepeti" />
          </div>

          <div className="social-media">
            {socialMedia.facebook && (
              <a href={socialMedia.facebook} className="social-link">
                <img src={fbIcon} alt="Facebook" />
              </a>
            )}
            {socialMedia.twitter && (
              <a href={socialMedia.twitter} className="social-link">
                <img src={xIcon} alt="Twitter" />
              </a>
            )}
            {socialMedia.instagram && (
              <a href={socialMedia.instagram} className="social-link">
                <img src={instagramIcon} alt="Instagram" />
              </a>
            )}
            {socialMedia.youtube && (
              <a href={socialMedia.youtube} className="social-link">
                <img src={youtubeIcon} alt="YouTube" />
              </a>
            )}
          </div>

          <div className="privacy-text">
            <p>
              {privacyText}
              <a href={privacyLink}>buradan</a>
            </p>
          </div>
        </div>

        <div className="footer-sections">
          {sections.map((section, index) => (
            <div key={index} className="footer-section">
              <h3>{section.title}</h3>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-description">
        <p>{description}</p>
      </div>

      <div className="footer-copyright">
        <p>{copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
