// Categories Constants
interface Category {
  id: string;
  name: string;
  isActive?: boolean;
  count?: number;
}

export const CATEGORIES: readonly Category[] = [
  { id: "1", name: "Tüm Kategoriler", isActive: true },
  { id: "2", name: "Elektronik" },
  { id: "3", name: "Ev ve Yaşam" },
  { id: "4", name: "Evcil Hayvan" },
  { id: "5", name: "Kitap" },
  { id: "6", name: "Oyuncak" },
  { id: "7", name: "Spor" },
  { id: "8", name: "Çiçek", count: 120 },
  { id: "9", name: "Hediye" },
  { id: "10", name: "Moda, Aksesuar" },
  { id: "11", name: "Ofis, Kırtasiye" },
  { id: "12", name: "Parfüm" },
  { id: "13", name: "Kişisel Bakım" },
  { id: "14", name: "Petshop" },
];
