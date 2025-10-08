import "./Campaign.scss";
import { campaign1, campaign2, campaign3 } from "../../../assets";

const CAMPAIGN_LIST = [
  {
    image: campaign1,
    title: "75 TL Üzerine Teslimat Ücreti Bizden",
    description: "Detaylı Bilgi",
    bgColor: "#FFEAE8",
  },
  {
    image: campaign2,
    title: "Hediye Kategorisi için Sepette %15 İndirim",
    description: "Hediye Ürünleri",
    bgColor: "#E8F1FF",
  },
  {
    image: campaign3,
    title: "Kırtasiye Kategorisi için Sepette %15 İndirim",
    description: "Detaylı Bilgi",
    bgColor: "#E2F7E1",
  },
];

function Campaign() {
  return (
    <div className="campaign-list container">
      {CAMPAIGN_LIST.map((campaign) => (
        <div
          className="campaign-item"
          style={{ backgroundColor: campaign.bgColor }}
        >
          <div className="campaign-image">
            <img src={campaign.image} alt="campaign" />
          </div>
          <div className="campaign-content">
            <h3>{campaign.title}</h3>
            <button>{campaign.description}</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Campaign;
