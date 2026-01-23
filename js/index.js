const featuredMenuData = [
    {
        name: "オムライス",
        description: "ふわとろ卵とケチャップを使ったオムライス",
        price: "¥1,500 (税込)",
        image: "images/オムライス.jpg"
    },
    {
        name: "ハンバーグ",
        description: "ジューシーな肉汁が溢れる自家製ハンバーグに、濃厚なデミグラスソースをたっぷりかけました。",
        price: "¥1,200 (税込)",
        image: "images/ハンバーグ.jpg"
    },
    {
        name: "パスタ",
            description: "ニンニクと唐辛子をオリーブオイルでじっくり炒めた、シンプルな中にも奥深い味わいのアラビアータです。",
            price: "¥1,800 (税込)",
            image: "images/パスタ.jpg"
    }
];

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    if (!slides.length) return;
    if (n >= slides.length) { slideIndex = 0; }
    else if (n < 0) { slideIndex = slides.length - 1; }
    else { slideIndex = n; }
    slides.forEach(slide => slide.classList.remove('active'));
    slides[slideIndex].classList.add('active');
}

function next() { showSlide(slideIndex + 1); }
function prev() { showSlide(slideIndex - 1); }

window.next = next;
window.prev = prev;


function renderNews() {
}

function renderFeaturedMenu() {
    const container = document.getElementById('featured-menu-container');
    if (container) {
        featuredMenuData.forEach((item, index) => {

            const html = `
                <div class="featured-item">
                    <div class="item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="item-details">
                        <h4>${item.name}</h4>
                        <span class="item-price">${item.price}</span>
                        <p>${item.description}</p>
                    </div>
                </div>
            `;
            container.innerHTML += html;
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (slides.length > 0) {
        showSlide(0);
        setInterval(() => next(), 3000);
    }

    renderFeaturedMenu();
});