const menuData = {
    food: [
        {
            name: "オムライス",
            description: "ふわとろの黄金色に輝く卵で包んだチキンライスに、当店特製のケチャップソースをたっぷり。誰もが笑顔になる定番の洋食です。",
            price: "¥1,500 (税込)",
            image: "images/オムライス.jpg"
        },
        {
            name: "ハンバーグ",
            description: "手ごねにこだわったジューシーなハンバーグに、赤ワインでじっくり煮込んだ芳醇なデミグラスソースを贅沢にかけました。",
            price: "¥1,200 (税込)",
            image: "images/ハンバーグ.jpg"
        },
        {
            name: "パスタ",
            description: "フレッシュなトマトソースをベースに、ニンニクと唐辛子でキレのある辛さをプラス。本格派のシェフが作るアラビアータです。",
            price: "¥1,800 (税込)",
            image: "images/パスタ.jpg"
        },
        {
            name: "ナポリタン",
            description: "タマネギやピーマン、ソーセージを特製の濃厚ケチャップソースで炒めた、どこか懐かしい王道のナポリタンです。",
            price: "¥1,650 (税込)",
            image: "images/ナポリタン.jpg"
        },
        {
            name: "グラタン",
            description: "創業以来変わらない濃厚な自家製ホワイトソースと香ばしい焼き目のチーズがたまらない、寒い季節にぴったりの逸品です。",
            price: "¥1,650 (税込)",
            image: "images/グラタン.jpg"
        },
        {
            name: "ビーフシチュー",
            description: "厳選した牛肉をホロホロになるまでじっくりと煮込み、野菜の旨味が凝縮された奥深い味わいの濃厚シチューです。",
            price: "¥1,650 (税込)",
            image: "images/ビーフシチュー.jpg"
        },
        {
            name: "ハヤシライス",
            description: "柔らかい牛肉と甘みたっぷりのタマネギを特製ソースで煮込んだ、シェフ渾身の自慢の一皿です。",
            price: "¥1,650 (税込)",
            image: "images/ハヤシライス.jpg"
        },
    ],

    drink: [
        {
            name: "オレンジジュース",
            description: "絞りたてのフレッシュなオレンジをそのままに。ビタミンCたっぷりです。",
            price: "¥450 (税込)",
            image: "images/オレンジジュース.jpg"
        },
        {
            name: "ジンジャエール",
            description: "自家製シロップを使った、爽快なのどごしのジンジャエールです。",
            price: "¥500 (税込)",
            image: "images/ジンジャエール.jpg"
        }
    ],

    soup: [
        {
            name: "コーンポタージュ",
            description: "粒々のコーンの甘さが広がる、クリーミーで心も温まる一皿。セットメニューへの追加も可能です。",
            price: "¥500 (税込)",
            image: "images/ポタージュ.jpg"
        }
    ],

    dessert: [
        {
            name: "いちごかき氷",
            description: "ふわふわの氷に濃厚な自家製いちごシロップと練乳をかけた夏季限定の甘味です。",
            price: "¥700 (税込)",
            image: "images/かき氷.jpg"
        },
        {
            name: "いちごかき氷",
            description: "ふわふわの氷に濃厚な自家製いちごシロップと練乳をかけた夏季限定の甘味です。",
            price: "¥700 (税込)",
            image: "images/かき氷.jpg"
        },
        {
            name: "いちごかき氷",
            description: "ふわふわの氷に濃厚な自家製いちごシロップと練乳をかけた夏季限定の甘味です。",
            price: "¥700 (税込)",
            image: "images/かき氷.jpg"
        }
    ]
};

function createMenuItemHTML(item, index) {
    const reverseClass = (index % 2 !== 0) ? ' menu-item--reverse' : '';

    const titleAndPriceHTML = `
        <div class="menu-price-line">
            <h4 class="menu-name">${item.name}</h4>
            <span class="menu-price">${item.price}</span>
        </div>
    `;

    return `
        <div class="menu-item${reverseClass}">
            <div class="menu-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="menu-details">
                ${titleAndPriceHTML}
                <p class="menu-description">${item.description}</p>
            </div>
        </div>
    `;
}

function renderMenu() {
    const foodContainer = document.getElementById('featured-food-container');
    if (foodContainer) {
        menuData.food.forEach((item, index) => {
            foodContainer.innerHTML += createMenuItemHTML(item, index);
        });
    }

    const drinkContainer = document.getElementById('featured-drink-container');
    if (drinkContainer) {
        menuData.drink.forEach((item, index) => {
            drinkContainer.innerHTML += createMenuItemHTML(item, index);
        });
    }

    const soupContainer = document.getElementById('featured-soup-container');
    if (soupContainer) {
        menuData.soup.forEach((item, index) => {
            soupContainer.innerHTML += createMenuItemHTML(item, index);
        });
    }

    const dessertContainer = document.getElementById('featured-dessert-container');
    if (dessertContainer) {
        menuData.dessert.forEach((item, index) => {
            dessertContainer.innerHTML += createMenuItemHTML(item, index);
        });
    }
}

document.addEventListener('DOMContentLoaded', renderMenu);