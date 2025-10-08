import "./Campaign.scss";

const CAMPAIGN_LIST = [
  {
    image: "/src/assets/campaign1.png",
    title: "75 TL Üzerine Teslimat Ücreti Bizden",
    description: "Detaylı Bilgi",
    bgColor: "#FFEAE8",
  },
  {
    image: "/src/assets/campaign2.png",
    title: "Hediye Kategorisi için Sepette %15 İndirim",
    description: "Hediye Ürünleri",
    bgColor: "#E8F1FF",
  },
  {
    image: "/src/assets/campaign3.png",
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
