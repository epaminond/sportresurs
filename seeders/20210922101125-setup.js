module.exports = {
  up: async (queryInterface) => {
    const date = new Date();
    const purposes = [
      "баскетбольний",
      "футбольний",
      "волейбольний",
      "гімнастичний",
      "тенісний",
      "гандбольний",
      "дитячий",
    ];
    const areas = [
      {
        number: 2,
        address: "вул. Чорноморська, 12, Львів",
        latitude: 49.845597,
        longitude: 24.030876,
        rating: 4,
        district: "Галицький",
        type: "дитячо-спортивний",
        purposesList: ["футбольний", "дитячий"],
        size: 1375,
        coating: "Штучна трава",
        access: "безкоштовний",
        open_time: "00:00",
        close_time: "24:00",
        light: true,
        additional: "дитячі елементи; огорожа, ворота",
      },
      {
        number: 3,
        address: "вул. В.Винниченка, 4 (вул. Підвальна, 4), Львів",
        latitude: 49.843953,
        longitude: 24.0348511,
        rating: 4,
        district: "Галицький",
        type: "дитячо-спортивний",
        purposesList: ["дитячий", "гімнастичний"],
        size: 3105,
        coating: "Пластикове",
        access: "безкоштовний",
        open_time: "00:00",
        close_time: "24:00",
        light: true,
        additional:
          "дитячі ігрові комплекси, елементи стрітворкауту, огорожа, смітники, лавки ",
      },
      {
        number: 4,
        address: "вул. Кирила і Мефодія, 27, Львів",
        latitude: 49.83141,
        longitude: 24.030441,
        rating: 2,
        district: "Галицький",
        type: "спортивний",
        purposesList: ["баскетбольний"],
        size: 730,
        coating: "Асфальт",
        access: "безкоштовний",
        open_time: "00:00",
        close_time: "24:00",
        light: false,
        additional: "баскетбольні щити",
      },
      {
        number: 5,
        address: "вул. Замкова-Смерекова, Львів",
        latitude: 49.848258,
        longitude: 24.030256,
        rating: 2,
        district: "Галицький",
        type: "спортивний",
        purposesList: [
          "гімнастичний",
          "баскетбольний",
          "футбольний",
          "тенісний",
        ],
        size: 2662,
        coating: "Трава",
        access: "безкоштовний",
        open_time: "00:00",
        close_time: "24:00",
        light: false,
        additional:
          "вуличні тренажери, турніки, лавки, смітники, баскетб. щити, фут. ворота, тенісний стіл",
      },
      {
        number: 6,
        address: "вул. М.Вовчка, 3, Львів",
        latitude: 49.8393573,
        longitude: 24.0073893,
        rating: 3.5,
        district: "Залізничний",
        type: "спортивний",
        purposesList: [
          "гімнастичний",
          "баскетбольний",
          "футбольний",
          "тенісний",
        ],
        size: 1367,
        coating: "Поліуританове",
        access: "безкоштовний",
        open_time: "00:00",
        close_time: "24:00",
        light: false,
        additional:
          "вуличні тренажери, турніки, лавки, смітники, баскетб. щити, фут. ворота, тенісний стіл",
      },
      {
        number: 7,
        address: "вул. Й.Сліпого, 33, Львів",
        latitude: 49.828809,
        longitude: 24.041377,
        rating: 0,
        district: "Личаківський",
        type: "спортивний",
        purposesList: [""],
        size: 4795,
        coating: "-",
        access: "безкоштовний",
        open_time: "00:00",
        close_time: "24:00",
        light: false,
        additional: "",
      },
      {
        number: 8,
        address: "вул. В.Антоновича, 49-53, Львів",
        latitude: 49.8314948,
        longitude: 24.0012811,
        rating: 3,
        district: "Франківський",
        type: "спортивний",
        purposesList: ["гімнастичний", "баскетбольний", "тенісний"],
        size: 810,
        coating: "-",
        access: "безкоштовний",
        open_time: "00:00",
        close_time: "24:00",
        light: false,
        additional:
          "турніки, атлетичний комплекс, лавки, смітники, тенісні  столи, баскетбольні щити, огорожа, футбольні ворота",
      },
      {
        number: 9,
        address: "вул. Музики-Керамічна, Львів",
        latitude: 49.815052,
        longitude: 23.998003,
        rating: 3,
        district: "Франківський",
        type: "дитячо-спортивний",
        purposesList: ["дитячий", "баскетбольний", "тенісний"],
        size: 750,
        coating: "-",
        access: "безкоштовний",
        open_time: "00:00",
        close_time: "24:00",
        light: false,
        additional:
          "Дитячі ігрові комплекси, лавки, тенісні столи, баскет-больні щити",
      },
      {
        number: 10,
        address: "вул. Тролейбусна, 2, Львів",
        latitude: 49.80895,
        longitude: 24.006556,
        rating: 0,
        district: "Франківський",
        type: "дитячо-спортивний",
        purposesList: [
          "дитячий",
          "баскетбольний",
          "гандбольний",
          "гімнастичний",
        ],
        size: 1520,
        coating: "Поліуританове",
        access: "безкоштовний",
        open_time: "00:00",
        close_time: "24:00",
        light: false,
        additional:
          "Дитячі ігрові комплекси, лавки, смітники, ворота гандбольні, турніки, баскетбольні щити",
      },
      {
        number: 11,
        address: "вул. П. Орлика, 5-б, Львів",
        latitude: 49.8775803,
        longitude: 24.0338251,
        rating: 4.5,
        district: "Шевченківський",
        type: "спортивний",
        purposesList: ["футбольний", "тренажери", "корти"],
        size: 970,
        coating: "Поліуританове",
        access: "безкоштовний",
        open_time: "00:00",
        close_time: "24:00",
        light: false,
        additional: "тренажери, футбольне поле",
      },
      {
        number: 12,
        address: "вул. Кастелівка, 8, Львів",
        latitude: 49.8309121,
        longitude: 24.0127593,
        rating: 3,
        district: "Франківський",
        type: "спортивний",
        purposesList: ["баскетбольний", "корти", "регбі"],
        size: 11558,
        coating: "Поліуританове",
        access: "безкоштовний",
        open_time: "00:00",
        close_time: "24:00",
        light: false,
        additional: "",
      },
      {
        number: 13,
        address: "вул. Кошиця, 4, Львів",
        latitude: 49.8590307,
        longitude: 24.0162174,
        rating: 3,
        district: "Шевченківський",
        type: "спортивний",
        purposesList: ["футбольний", "гімнастичний"],
        size: 1035,
        coating: "Штучна трава",
        access: "безкоштовний",
        open_time: "00:00",
        close_time: "24:00",
        light: true,
        additional: "огорожа, ворота, вуличні тренажери, смітники, лавки",
      },
      {
        number: 14,
        address: "вул. В.Чорновола, 45, Львів",
        latitude: 49.8548932,
        longitude: 24.0215588,
        rating: 4,
        district: "Шевченківський",
        type: "спортивний",
        purposesList: ["тенісний", "басктебольний", "футбольний"],
        size: 1340,
        coating: "Штучне",
        access: "безкоштовний",
        open_time: "00:00",
        close_time: "24:00",
        light: false,
        additional:
          "огорожа, ворота, тенісні столи, баскетбольні щити, лавки, смітники",
      },
      {
        number: 15,
        address: "вул. Величковського, 30-а, Львів",
        latitude: 49.876094,
        longitude: 23.935533,
        rating: 3,
        district: "Шевченківський",
        type: "дитячо-спортивний",
        purposesList: ["дитячий", "гімнастичний"],
        size: 800,
        coating: "Резина",
        access: "безкоштовний",
        open_time: "00:00",
        close_time: "24:00",
        light: false,
        additional:
          "дитячі ігрові комплекси, лавки, смітники, вуличні тренажери",
      },
      {
        number: 16,
        address: "вул. І. Величковського, 10, Львів",
        latitude: 49.8777187,
        longitude: 23.9322979,
        rating: 3,
        district: "Шевченківський",
        type: "спортивний",
        purposesList: ["гімнастичний"],
        size: 920,
        coating: "Резина",
        access: "безкоштовний",
        open_time: "00:00",
        close_time: "24:00",
        light: false,
        additional: "гімнастичні комплекси, лавки, смітники",
      },
      {
        number: 17,
        address: "вул. Ковельська, 67, Львів",
        latitude: 49.8609484,
        longitude: 24.0596904,
        rating: 4,
        district: "Личаківський",
        type: "спортивний",
        purposesList: ["футбольний"],
        size: 3000,
        coating: "Штучна трава",
        access: "безкоштовний",
        open_time: "00:00",
        close_time: "24:00",
        light: false,
        additional: "фут. ворота, огорожа, покриття.",
      },
      {
        number: 18,
        address:
          "вул. І. Лаврівського - вул. Генерала Т.Чупринки (Білогорща), Львів",
        latitude: 49.8438564,
        longitude: 23.9257353,
        rating: 4,
        district: "Франківський",
        type: "дитячо-спортивний",
        purposesList: ["гімнастичний", "дитячий"],
        size: 13500,
        coating: "Трава",
        access: "безкоштовний",
        open_time: "00:00",
        close_time: "24:00",
        light: false,
        additional:
          "трав'яне покриття, зона воркаут, тренажери, дитячі елементи",
      },
      {
        number: 19,
        address: "вул. Медової Печери, 7-9, Львів",
        latitude: 49.8271552,
        longitude: 24.0762503,
        rating: 4,
        district: "Личаківський",
        type: "спортивний",
        purposesList: ["футбольний"],
        size: 1125,
        coating: "Штучне",
        access: "безкоштовний",
        open_time: "00:00",
        close_time: "24:00",
        light: false,
        additional: "",
      },
      {
        number: 20,
        address: "вул. Любінська, 93, Львів",
        latitude: 49.821867,
        longitude: 23.9737825,
        rating: 2,
        district: "Залізничний",
        type: "спортивний",
        purposesList: ["-"],
        size: 1000,
        coating: "Бетон (планується)",
        access: "безкоштовний",
        open_time: "00:00",
        close_time: "24:00",
        light: false,
        additional: "",
      },
      {
        number: 21,
        address: "вул. Жовківська, 57, Львів",
        latitude: 49.8592456,
        longitude: 24.0373429,
        rating: 4,
        district: "Шевченківський",
        type: "дитячо-спортивний",
        purposesList: ["гімнастичний", "дитячий"],
        size: 1250,
        coating: "Асфальт",
        access: "безкоштовний",
        open_time: "00:00",
        close_time: "24:00",
        light: false,
        additional: "вуличні тренажери, дитячі ігрові елементи",
      },
      {
        number: 22,
        address: "Вул. Тарасівська, 39-а, Львів",
        latitude: 49.8486102,
        longitude: 24.089675,
        rating: 0,
        district: "Личаківський",
        type: "спортивний",
        purposesList: ["-"],
        size: 9384,
        coating: "Трава",
        access: "безкоштовний",
        open_time: "00:00",
        close_time: "24:00",
        light: false,
        additional: "-",
      },
      {
        number: 23,
        address: "Вул. Тракт Глинянський, 147-а, Львів",
        latitude: 49.8431834,
        longitude: 24.0968493,
        rating: 4,
        district: "Личаківський",
        type: "дитячо-спортивний",
        purposesList: ["гімнастичний", "дитячий"],
        size: 2421,
        coating: "Поліуританове",
        access: "безкоштовний",
        open_time: "00:00",
        close_time: "24:00",
        light: false,
        additional: "стрітворкаут, дитячі ігрові елементи, смітники, лавки ",
      },
      {
        number: 24,
        address: "Вул. Величковського, 16-18, Львів",
        latitude: 49.8755482,
        longitude: 23.9360175,
        rating: 4,
        district: "Шевченківський",
        type: "дитячо-спортивний",
        purposesList: ["гімнастичний", "дитячий"],
        size: 4275,
        coating: "Штучна трава",
        access: "безкоштовний",
        open_time: "00:00",
        close_time: "24:00",
        light: false,
        additional: "",
      },
      {
        number: 25,
        address: "Вул. Довженка, 3, Львів",
        latitude: 49.7992545,
        longitude: 24.0524908,
        rating: 4,
        district: "Сихівський",
        type: "спортивний",
        purposesList: [
          "гімнастичний",
          "баскетбольний",
          "футбольний",
          "волейбольний",
        ],
        size: 1850,
        coating: "Пластикове",
        access: "безкоштовний",
        open_time: "00:00",
        close_time: "24:00",
        light: false,
        additional: "тренажери, стійки волейбольні та баскетбольні, ворота",
      },
      {
        number: 26,
        address: "Вул. Т. Шевченка, 360, Львів",
        latitude: 49.8689647,
        longitude: 23.9523311,
        rating: 4,
        district: "Шевченківський",
        type: "спортивний",
        purposesList: ["футбольний"],
        size: 1008,
        coating: "Штучна трава",
        access: "безкоштовний",
        open_time: "00:00",
        close_time: "24:00",
        light: false,
        additional: "футбольне поле",
      },
      {
        number: 27,
        address: "вул. Г. Хоткевича, 40-44, Львів",
        latitude: 49.7954733,
        longitude: 24.0428874,
        rating: 4,
        district: "Сихівський",
        type: "спортивний",
        purposesList: ["гімнастичний"],
        size: 615,
        coating: "-",
        access: "безкоштовний",
        open_time: "00:00",
        close_time: "24:00",
        light: false,
        additional: "вуличні тренажери, зона воркаут",
      },
      {
        number: 28,
        address: "вул. Сихівська, 8, Львів",
        latitude: 49.7957143,
        longitude: 24.0653989,
        rating: 3,
        district: "Сихівський",
        type: "спортивний",
        purposesList: ["гімнастичний"],
        size: 900,
        coating: "-",
        access: "безкоштовний",
        open_time: "00:00",
        close_time: "24:00",
        light: false,
        additional: "вуличні тренажери",
      },
      {
        number: 29,
        address: "вул. І. Виговського, 73, Львів",
        latitude: 49.8142381,
        longitude: 23.979609,
        rating: 2.5,
        district: "Залізничний",
        type: "дитячо-спортивний",
        purposesList: ["дитячий", "гімнастичний"],
        size: 1660,
        coating: "-",
        access: "безкоштовний",
        open_time: "00:00",
        close_time: "24:00",
        light: false,
        additional: "дитячі елементи, спортивні елементи",
      },
      {
        number: 30,
        address: "вул. Студентська, 6, Львів",
        latitude: 49.8299908,
        longitude: 24.0478723,
        rating: 0,
        district: "Личаківський",
        type: "спортивний",
        purposesList: ["футбольний"],
        size: 800,
        coating: "-",
        access: "безкоштовний",
        open_time: "00:00",
        close_time: "24:00",
        light: false,
        additional: "ворота",
      },
      {
        number: 31,
        address: "вул. Сихівська, 2, Львів",
        latitude: 49.7958056,
        longitude: 24.0659133,
        rating: 0,
        district: "Сихівський",
        type: "спортивний",
        purposesList: ["футбольний"],
        size: 779,
        coating: "-",
        access: "безкоштовний",
        open_time: "00:00",
        close_time: "24:00",
        light: false,
        additional: "ворота",
      },
    ];
    const purposeIds = await queryInterface.bulkInsert(
      "purposes",
      purposes.map((title) => ({ title })),
      {
        returning: ["id", "title"],
      }
    );
    const areasForInsert = areas.map(({ purposesList, ...area }) => ({
      ...area,
      created_at: date,
      updated_at: date,
    }));
    const areasIds = await queryInterface.bulkInsert("areas", areasForInsert, {
      returning: ["id", "number"],
    });
    const relationships = areasIds
      .flatMap(({ id, number }) => {
        const { purposesList } = areas.find((item) => item.number === number);
        return purposesList.map((purposeTitle) => {
          const purpose = purposeIds.find(
            (item) => item.title === purposeTitle
          );
          return {
            area_id: id,
            purpose_id: purpose?.id,
            created_at: date,
            updated_at: date,
          };
        });
      })
      .filter(({ purpose_id: purposeId }) => purposeId);
    await queryInterface.bulkInsert("purpose-area", relationships);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("purpose-area", null, {});
    await queryInterface.bulkDelete("purposes", null, {});
    await queryInterface.bulkDelete("areas", null, {});
  },
};
