//All the ingredients or the side will begin with a capital letter and if it contains with more than word, each word must start with a capital letter

const dishes = [
    //Chicken
    {
        name: 'Fahita',
        ingredients: ["Chicken", "Avocado", "Mayyonaise", "Bread"],
        side: ["Potato", "Soda", "Toom"],
        estimatedMinPrice: 10,
        estimatedMaxPrice: 15,
        src: "https://i.ibb.co/KmcmV1X/fajita.jpg"
    },
    {
        name: 'Farrouj',
        ingredients: ["Chicken"],
        side: ["Soda", "Potato", "Garlic", "Toom", "Kabis, Other Drinks", "Hamod", "Lemon"],
        estimatedMinPrice: 8,
        estimatedMaxPrice: 12,
        src: "https://i.ibb.co/m5cpFqb/Farrouj.jpg"
    },
    {
        name: 'Shawarma',
        ingredients: ["Chicken", "Flayfleh Helwe"],
        side: ["Soda", "Potato", "Toom", "Other Drinks"],
        estimatedMinPrice: 8,
        estimatedMaxPrice: 15,
        src: "https://i.ibb.co/C2xzXfc/shawarma-Chicken.jpg"
    },
    {
        name: 'Chicken',
        ingredients: ["Chicken", "Chicken Breasts"],
        side: ["Potato", "Soda", "Other Drinks", "Toom"],
        estimatedMinPrice: 9,
        estimatedMaxPrice: 15,
        src: "https://i.ibb.co/XXPL8F6/chickenn.jpg"
    },
    {
        name: 'Chicken Burger',
        ingredients: ["Burger Bread", "Chicken", "Mayyonaise", "Tomato", "Basal", "Jebne", "Khas"],
        side: ["Potato", "Soda", "Other Drinks"],
        estimatedMinPrice: 8,
        estimatedMaxPrice: 15,
        src: "https://i.ibb.co/KjHmTvw/chicken-Burger.jpg"
    },
    {
        name: 'Tawouk',
        ingredients: ["Chicken"],
        side: ["Potato", "Soda", "Other Drinks" , "Toom"],
        estimatedMinPrice: 8,
        estimatedMaxPrice: 15,
        src: "https://i.ibb.co/mRDssKZ/Tawouk.jpg"
    },
    {
        name: 'Chicken Avocado',
        ingredients: ["Chicken", "Avocado", "Cream", "Shmandar", "Rice"],
        side: ["Soda", "Other Drinks", "Fattoush", "Potato"],
        estimatedMinPrice: 13,
        estimatedMaxPrice: 20,
        src: "https://i.ibb.co/qWFGPd1/chicken-Avo.jpg"
    },
    {
        name: 'Chicken Cream',
        ingredients: ["Chicken", "Cream", "Rice", "Potato"],
        side: ["Soda", "Other Drinks"],
        estimatedMinPrice: 10,
        estimatedMaxPrice: 15,
        src: "https://i.ibb.co/WDBFgRs/chicken-Cream.jpg"
    },
    {
        name: 'Chicken Mushroom',
        ingredients: ["Chicken", "Cream", "Rice", "Mushroom"],
        side: ["Soda", "Other Drinks"],
        estimatedMinPrice: 13,
        estimatedMaxPrice: 16,
        src: "https://i.ibb.co/LZGRf50/chicken-Mushroom.jpg"
    },
    {
        name: 'Sfine',
        ingredients: ["Chicken", "Rice"],
        side: ["Soda", "Other Drinks", "Potato"],
        estimatedMinPrice: 9,
        estimatedMaxPrice: 15,
        src: "https://i.ibb.co/Dtr9ywy/sfine.jpg"
    },
    {
        name: 'Chicken Wings',
        ingredients: ["Chicken"],
        side: ["Potato", "Soda", "Other Drinks", "Toom"],
        estimatedMinPrice: 7,
        estimatedMaxPrice: 15,
        src: "https://i.ibb.co/LQ8WwVf/chicken-Wings.jpg"
    },
    {
        name: 'Crispey',
        ingredients: ["Chicken"],
        side: ["Potato", "Toom", "Soda", "Mayyonaise", "Mayyonaise Salad"],
        estimatedMinPrice: 10,
        estimatedMaxPrice: 17,
        src: "https://i.ibb.co/FKDFz7N/Crispey.jpg"
    },
    {
        name: 'Escalope',
        ingredients: ["Chicken"],
        side: ["Potato", "Mayyonaise", "Mayyonaise Salad", "Toom", "Soda", "Other Drinks"],
        estimatedMinPrice: 9,
        estimatedMaxPrice: 15,
        src: "https://i.ibb.co/59nxxL7/escalope.jpg"
    },
    {
        name: 'Cordon Bleu',
        ingredients: ["Chicken", "Jebne"],
        side: ["Soda", "Other Drinks", "Potato"],
        estimatedMinPrice: 12,
        estimatedMaxPrice: 15,
        src: "https://i.ibb.co/kKv5mJj/cordon-Bleu.jpg"
    },
    {
        name: 'Chicken Nuggets',
        ingredients: ["Chicken"],
        side: ["Mayyonaise Salad", "Potato", "Soda", "Other Drinks"],
        estimatedMinPrice: 10,
        estimatedMaxPrice: 12,
        src: "https://i.ibb.co/0KBnQsj/Chicken-Nuggets.jpg"
    },
    {
        name: 'Riz Bi Tawouk',
        ingredients: ["Chicken", "Rice"],
        side: ["Laban", "Soda", "Other Drinks"],
        estimatedMinPrice: 8,
        estimatedMaxPrice: 10,
        src: "https://i.ibb.co/yP6Q6sq/riz-BTawouk.jpg"
    },
    {
        name: 'Dolo3 w Riz',
        ingredients: ["Chicken", "Hamod", "Rice"],
        side: ["Soda", "Other Drinks"],
        estimatedMinPrice: 7,
        estimatedMaxPrice: 10,
        src: "https://i.ibb.co/D9qWBKg/dolo3-WRiz.jpg"
    },


    //LAHME


    {
        name: 'Kifta Mishwiye',
        ingredients: ["Lahme"],
        side: ["Hommos", "Soda", "Other Drinks", "Potato"],
        estimatedMinPrice: 8,
        estimatedMaxPrice: 10,
        src: "https://i.ibb.co/HYY8SQd/kifta-Meshwiye.jpg"
    },
    {
        name: 'Kifta Bl Sayniye',
        ingredients: ["Lahme", "Tomato", "Basal", "Rice", "Potato"],
        side: ["Other Drinks", "Bread"],
        estimatedMinPrice: 9,
        estimatedMaxPrice: 11,
        src: "https://i.ibb.co/QC3txPp/kifta-Bl-Sayniye.jpg"
    },
    {
        name: 'Kifta w Dibis',
        ingredients: ["Lahme", "Dibis", "Rice"],
        side: ["Potato", "Soda", "Other Drinks"],
        estimatedMinPrice: 8,
        estimatedMaxPrice: 10,
        src: "https://i.ibb.co/R0BHHG3/kifta-WDibis.jpg"
    },
    {
        name: 'Makanek',
        ingredients: ["Lahme"],
        side: ["Potato", "Soda", "Other Drinks"],
        estimatedMinPrice: 8,
        estimatedMaxPrice: 11,
        src: "https://i.ibb.co/8jNpqpC/Makanek.jpg"
    },
    {
        name: 'Biftek',
        ingredients: ["Lahme", "Toom"],
        side: ["Potato", "Soda"],
        estimatedMinPrice: 9,
        estimatedMaxPrice: 11,
        src: "https://i.ibb.co/3CWxprt/biftek.jpg"
    },
    {
        name: 'Hamburger',
        ingredients: ["Lahme", "Basal", "Tomato", "Mayyonaise", "Khas", "Jebne"],
        side: ["Potato", "Soda", "Other Drinks"],
        estimatedMinPrice: 10,
        estimatedMaxPrice: 13,
        src: "https://i.ibb.co/9NMycfq/hamburger.jpg"
    },
    {
        name: 'Shawarma Lahme',
        ingredients: ["Lahme", "Flayfleh"],
        side: ["Potato", "Toom", "Soda", "Other Drinks"],
        estimatedMinPrice: 10,
        estimatedMaxPrice: 13,
        src: "https://i.ibb.co/fMJZFsY/beef-Shawarma.jpg"
    },
    {
        name: 'Lahme B3ajin',
        ingredients: ["Lahme"],
        side: ["Soda", "Hommos", "Potato", "Other Drinks"],
        estimatedMinPrice: 9,
        estimatedMaxPrice: 11,
        src: "https://i.ibb.co/7KW9Wsp/lahm-Baajin.jpg"
    },
    {
        name: 'Lahme She2af',
        ingredients: ["Lahme"],
        side: ["Potato", "Soda", "Toom", "Other Drinks"],
        estimatedMinPrice: 10,
        estimatedMaxPrice: 13,
        src: "https://i.ibb.co/bJpLBQy/lahme-Shi2af.jpg"
    },
    {
        name: 'Kibe Mishwiye',
        ingredients: ["Lahme"],
        side: ["Fijel", "Potato", "Soda", "Other Drinks"],
        estimatedMinPrice: 8,
        estimatedMaxPrice: 11,
        src: "ttps://i.ibb.co/SvPXN6Z/kibe-Meshwiye.jpg"
    },
    {
        name: 'Kibbe B laban',
        ingredients: ["Lahme", "Laban", "Toom", "Rice"],
        side: ["Other Drinks"],
        estimatedMinPrice: 9,
        estimatedMaxPrice: 12,
        src: "https://i.ibb.co/h2yqMkY/kibe-BLaban.jpg"
    },
    {
        name: 'Hommos Mad2o2',
        ingredients: ["Hommos", "Lahme", "Zet"],
        side: ["Potato", "Fattoush", "Salata", "Soda", "Other Drinks"],
        estimatedMinPrice: 7,
        estimatedMaxPrice: 10,
        src: "https://i.ibb.co/16VCmh3/hommos.jpg"
    },
    {
        name: 'Sambosek',
        ingredients: ["Lahme", "Jebne"],
        side: ["Potato", "Soda", "Other Drinks", "Fattoush", "Salata"],
        estimatedMinPrice: 7,
        estimatedMaxPrice: 10,
        src: "https://i.ibb.co/7XHMsZK/sambosek.jpg"
    },
    {
        name: 'Bachamel',
        ingredients: ["Lahme", "Jebne", "Maacarona", "Dura", "Tomato"],
        side: ["Other Drinks"],
        estimatedMinPrice: 7,
        estimatedMaxPrice: 10,
        src: "https://i.ibb.co/bKHJ1dL/Bachamel.jpg"
    },
    {
        name: 'Batata 3a Bed',
        ingredients: ["Potato", "Eggs"],
        side: ["Laban", "Khyar Bi Laban"],
        estimatedMinPrice: 5,
        estimatedMaxPrice: 8,
        src: "https://i.ibb.co/PznGPtL/batata3a-Bed.jpg"
    },
    {
        name: 'Batata 3a Lahme',
        ingredients: ["Lahme", "Potato", "Basal"],
        side: ["Laban", "Khyar Bi Laban", "Other Drinks"],
        estimatedMinPrice: 5,
        estimatedMaxPrice: 8,
        src: "https://i.ibb.co/HnXWn3z/batata3a-Lahme.jpg"
    },
    {
        name: 'Koosa Bi Laban',
        ingredients: ["Koosa", "Laban", "Rice"],
        side: ["Other Drinks"],
        estimatedMinPrice: 6,
        estimatedMaxPrice: 9,
        src: "https://i.ibb.co/RbH2LPP/kosa-Bi-Laban.jpg"
    },
    {
        name: 'Koosa Bi Banadora',
        ingredients: ["Koosa", "Tomato", "Rice"],
        side: [],
        estimatedMinPrice: 6,
        estimatedMaxPrice: 9,
        src: "https://i.ibb.co/zmSPPj1/kousa-Banadora.jpg"
    },
    {
        name: 'Maacarona Bi Laban',
        ingredients: ["Maacarona", "Laban", "Toom"],
        side: ["Potato", "Soda", "Other Drinks"],
        estimatedMinPrice: 6,
        estimatedMaxPrice: 9,
        src: "https://i.ibb.co/LxwhQbc/maacarona-Laban.jpg"
    },
    {
        name: 'Maacarona Bi Banadora',
        ingredients: ["Maacarona", "Tomato", "Jebne", "Dura"],
        side: ["Other Drinks"],
        estimatedMinPrice: 6,
        estimatedMaxPrice: 9,
        src: "https://i.ibb.co/9Yg8tmv/maacarona-Banadora.jpg"
    },
    {
        name: 'Fettuccine',
        ingredients: ["Maacarona", "Cream", "Mushroom"],
        side: ["Other Drinks"],
        estimatedMinPrice: 7,
        estimatedMaxPrice: 10,
        src: "https://i.ibb.co/HCsfWDh/Fettuccine-Alfredo.jpg"
    },
    {
        name: 'Batata Maslo2a',
        ingredients: ["Potato", "Basal", "Zet", "Flayfleh"],
        side: [],
        estimatedMinPrice: 3,
        estimatedMaxPrice: 5,
        src: "https://i.ibb.co/WHw4fRC/batata-Maslo2a.jpg"
    },
    {
        name: 'Khyariye',
        ingredients: ["Koosa", "Laban", "Rice", "Lahme"],
        side: ["Other Drinks"],
        estimatedMinPrice: 6,
        estimatedMaxPrice: 9,
        src: "https://i.ibb.co/bPBXFn9/khyariye.jpg"
    },
    {
        name: 'Shishbarak',
        ingredients: ["Lahme", "Rice"],
        side: ["Other Drinks", "Soda"],
        estimatedMinPrice: 7,
        estimatedMaxPrice: 9,
        src: "https://i.ibb.co/ZWYDzHm/shishbarak.jpg"
    },
    {
        name: 'Pizza',
        ingredients: ["Jebne", "Pepperoni", "Flayfleh", "Zaytoon", "Tomato"],
        side: ["Potato", "Soda", "Other Drinks"],
        estimatedMinPrice: 8,
        estimatedMaxPrice: 11,
        src: "https://i.ibb.co/S5HdyS5/pizza.jpg"
    },
    {
        name: 'Fasolya',
        ingredients: ["Tomato", "Lahme", "Rice"],
        side: [],
        estimatedMinPrice: 7,
        estimatedMaxPrice: 9,
        src: "https://i.ibb.co/wcPsw75/fasolya.jpg"
    },
    {
        name: 'Kibbet Raheb',
        ingredients: ["Potato", "Zbib", "Basal", "Flayfleh"],
        side: ["Other Drinks"],
        estimatedMinPrice: 5,
        estimatedMaxPrice: 7,
        src: "https://i.ibb.co/0tXWhZR/kibbet-Raheb.jpg"
    },
    {
        name: 'Batenjen',
        ingredients: ["Laban"],
        side: ["Other Drinks"],
        estimatedMinPrice: 7,
        estimatedMaxPrice: 10,
        src: "https://i.ibb.co/sq6L5JC/batenjen-Laban.jpg"
    },
    {
        name: 'Fish',
        ingredients: ["Rice", "Hamod"],
        side: ["Other Drinks"],
        estimatedMinPrice: 10,
        estimatedMaxPrice: 15,
        src: "https://i.ibb.co/GRvm8Px/fish.jpg"
    },
    {
        name: 'Siyediye',
        ingredients: ["T7ine", "Hamod", "Rice", "Tuna"],
        side: ["Soda", "Other Drinks"],
        estimatedMinPrice: 9,
        estimatedMaxPrice: 12,
        src: "https://i.ibb.co/ccfKPpW/siyediye.jpg"
    },
    {
        name: 'Tuna',
        ingredients: ["Tuna", "Hamod", "Zet", "Dura"],
        side: ["Bread"],
        estimatedMinPrice: 5,
        estimatedMaxPrice: 8,
        src: "https://i.ibb.co/Tky5LsJ/tuna.jpg"
    },
    {
        name: 'Hommos w Fool',
        ingredients: ["Hommos", "Fool", "Zet", "Hamod", "Tomato"],
        side: ["Bread", "Soda", "Other Drinks"],
        estimatedMinPrice: 5,
        estimatedMaxPrice: 8,
        src: "https://i.ibb.co/hBKYCHH/hommos-Wfool.jpg"
    },
    {
        name: 'Fatteh',
        ingredients: ["Hommos", "Laban", "Bread"],
        side: ["Soda", "Other Drinks", "Potato"],
        estimatedMinPrice: 6,
        estimatedMaxPrice: 8,
        src: "https://i.ibb.co/VxQRSv4/fatteh.jpg"
    },
    {
        name: 'Salatet Maacarona',
        ingredients: ["Maacarona", "Khas", "Avocado", "Rimmen", "Hamod", "Zet", "Dura", "Mayyonaise"],
        side: ["Other Drinks"],
        estimatedMinPrice: 6,
        estimatedMaxPrice: 8,
        src: "https://i.ibb.co/BrLRTF9/salatet-Maacarona.jpg"
    },
    {
        name: 'Batata Bi Kizebra',
        ingredients: ["Potato", "Kizebra", "Hamod", "Rice"],
        side: ["Other Drinks"],
        estimatedMinPrice: 7,
        estimatedMaxPrice: 9,
        src: "https://i.ibb.co/TWMdk0L/Batata-Bi-Kizebra.jpg"
    },
    {
        name: 'Kosa Bi Bachamel',
        ingredients: ["Koosa", "Jebne", "Rice"],
        side: ["Other Drinks"],
        estimatedMinPrice: 8,
        estimatedMaxPrice: 10,
        src: "https://i.ibb.co/yVMh39S/kouse-Bacahamel.jpg"
    },
    {
        name: 'Bazella w Riz',
        ingredients: ["Rice", "Khodar", "Lahme"],
        side: ["Other Drinks"],
        estimatedMinPrice: 5,
        estimatedMaxPrice: 8,
        src: "https://i.ibb.co/6bX1pWc/bazella-WRiz.jpg"
    },
    {
        name: 'Riz Bi Khodar',
        ingredients: ["Rice", "Zbib", "Khodar", "Chicken"],
        side: ["Other Drinks", "Laban"],
        estimatedMinPrice: 7,
        estimatedMaxPrice: 9,
        src: "https://i.ibb.co/w4RH7JX/Riz-Khodar.jpg"
    },
    
];

export default dishes;