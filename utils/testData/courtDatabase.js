import image from "../../public/img/playgroundItemImage.png";

const courtsDataBase = [
  {
    id: 1,
    address: "вул. Тернопільська, 13а, Львів",
    latitude: 49.8145018,
    longitude: 24.0386201,
    rating: 4.5,
    district: "Сихівський",
    color: "yellow",
    type: "Спортивний",
    destination: ["футбольний", "тенісний", "гімнастичний"],
    size: 1630,
    covering: "Штучна трава",
    access: "Безкоштовний",
    opening: "00:00-24:00",
    lighting: true,
    additional:
      "огорожа, ворота, тенісний стіл, вуличні тренажери, смітники, лавки",
    image,
  },
  {
    id: 2,
    address: "вул. Чорноморська, 12, Львів",
    latitude: 49.845597,
    longitude: 24.030876,
    rating: 4,
    district: "Галицький",
    color: "red",
    type: "Дитячо-спортивний",
    destination: ["футбольний", "дитячий"],
    size: 1375,
    covering: "Штучна трава",
    access: "Безкоштовний",
    opening: "00:00-24:00",
    lighting: true,
    additional: "дитячі елементи; огорожа, ворота",
    image,
  },
  {
    id: 3,
    address: "вул. В.Винниченка, 4 (вул. Підвальна, 4), Львів",
    latitude: 49.843953,
    longitude: 24.0348511,
    rating: 4,
    district: "Галицький",
    color: "red",
    type: "Дитячо-спортивний",
    destination: ["гімнастичний", "дитячий"],
    size: 3105,
    covering: "Пластикове",
    access: "Безкоштовний",
    opening: "00:00-24:00",
    lighting: true,
    additional:
      "дитячі ігрові комплекси, елементи стрітворкауту, огорожа, смітники, лавки ",
    image,
  },
  {
    id: 4,
    address: "вул. Кирила і Мефодія, 27, Львів",
    latitude: 49.83141,
    longitude: 24.030441,
    rating: 2,
    district: "Галицький",
    color: "red",
    type: "Спортивний",
    destination: ["баскетбольний"],
    size: 730,
    covering: "Асфальт",
    access: "Безкоштовний",
    opening: "00:00-24:00",
    lighting: false,
    additional: "баскетбольні щити",
    image,
  },
  {
    id: 5,
    address: "вул. Замкова-Смерекова, Львів",
    latitude: 49.848258,
    longitude: 24.030256,
    rating: 2,
    district: "Галицький",
    color: "red",
    type: "Спортивний",
    destination: ["гімнастичний", "баскетбольний", "футбольний", "тенісний"],
    size: 2662,
    covering: "Трава",
    access: "Безкоштовний",
    opening: "00:00-24:00",
    lighting: false,
    additional:
      "вуличні тренажери, турніки, лавки, смітники, баскетб. щити, фут. ворота, тенісний стіл",
    image,
  },
  {
    id: 6,
    address: "вул. М.Вовчка, 3, Львів",
    latitude: 49.8393573,
    longitude: 24.0073893,
    rating: 3.5,
    district: "Залізничний",
    color: "lilac",
    type: "Спортивний",
    destination: ["гімнастичний", "баскетбольний", "футбольний", "тенісний"],
    size: 1367,
    covering: "Поліуританове",
    access: "Безкоштовний",
    opening: "00:00-24:00",
    lighting: false,
    additional:
      "вуличні тренажери, турніки, лавки, смітники, баскетб. щити, фут. ворота, тенісний стіл",
    image,
  },
  {
    id: 7,
    address: "вул. Й.Сліпого, 33, Львів",
    latitude: 49.828809,
    longitude: 24.041377,
    rating: 3.5,
    district: "Личаківський",
    color: "orange",
    type: "Спортивний",
    destination: [],
    size: 4795,
    covering: "",
    access: "Безкоштовний",
    opening: "00:00-24:00",
    lighting: false,
    additional: "",
    image,
  },
  {
    id: 8,
    address: "вул. В.Антоновича, 49-53, Львів",
    latitude: 49.8314948,
    longitude: 24.0012811,
    rating: 3,
    district: "Франківський",
    color: "blue",
    type: "Спортивний",
    destination: ["гімнастичний", "баскетбольний", "тенісний"],
    size: 810,
    covering: "",
    access: "Безкоштовний",
    opening: "00:00-24:00",
    lighting: false,
    additional:
      "турніки, атлетичний комплекс, лавки, смітники, тенісні  столи, баскетбольні щити, огорожа, футбольні ворота",
    image,
  },
  {
    id: 9,
    address: "вул. Музики-Керамічна, Львів",
    latitude: 49.815052,
    longitude: 23.998003,
    rating: 3,
    district: "Франківський",
    color: "blue",
    type: "Дитячо-спортивний",
    destination: ["дитячий", "баскетбольний", "тенісний"],
    size: 750,
    covering: "",
    access: "Безкоштовний",
    opening: "00:00-24:00",
    lighting: false,
    additional:
      "Дитячі ігрові комплекси, лавки, тенісні столи, баскет-больні щити",
    image,
  },
  {
    id: 10,
    address: "вул. Тролейбусна, 2, Львів",
    latitude: 49.80895,
    longitude: 24.006556,
    rating: 0,
    district: "Франківський",
    color: "blue",
    type: "Дитячо-спортивний",
    destination: ["дитячий", "баскетбольний", "гандбольний", "гімнастичний"],
    size: 1520,
    covering: "Поліуританове",
    access: "Безкоштовний",
    opening: "00:00-24:00",
    lighting: false,
    additional:
      "Дитячі ігрові комплекси, лавки, смітники, ворота гандбольні, турніки, баскетбольні щити",
    image,
  },
  {
    id: 11,
    address: "вул. П. Орлика, 5-б, Львів",
    latitude: 49.8775803,
    longitude: 24.0338251,
    rating: 4.5,
    district: "Шевченківський",
    color: "green",
    type: "Спортивний",
    destination: ["футбольний", "гімнастичний", "теніс"],
    size: 970,
    covering: "Поліуританове",
    access: "Безкоштовний",
    opening: "00:00-24:00",
    lighting: false,
    additional: "тренажери, футбольне поле",
    image,
  },
  {
    id: 12,
    address: "вул. Кастелівка, 8, Львів",
    latitude: 49.8309121,
    longitude: 24.0127593,
    rating: 3,
    district: "Франківський",
    color: "blue",
    type: "Спортивний",
    destination: ["футбольний", "гімнастичний", "теніс"],
    size: 11558,
    covering: "Поліуританове",
    access: "Безкоштовний",
    opening: "00:00-24:00",
    lighting: false,
    additional: "",
    image,
  },
];

export default { courtsDataBase };
