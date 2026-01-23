const SERVICE_ID = "sotuken2";
const API_KEY = "qZO8fzI0JKmQh7ZLhXioaDwY7kJZ2lDdUf6w";

async function fetchNews() {
  const url = `https://${SERVICE_ID}.microcms.io/api/v1/news`;

  try {
    const response = await fetch(url, {
      headers: {
        'X-API-KEY': API_KEY
      }
    });
    const data = await response.json();

    const newsList = document.getElementById('news-list');
    data.contents.forEach(item => {
      const li = document.createElement('li');
      const date = new Date(item.createdAt).toLocaleDateString('ja-JP');

      li.innerHTML = `<strong>${date}</strong> <span>${item.content}</span>`;

      newsList.appendChild(li);
    });
    if (newsList && newsList.children.length === 0) {
      const ann = document.querySelector('.announcements-section');
      if (ann) ann.style.display = 'none';
    }
  } catch (error) {
    console.error('お知らせの取得に失敗しました:', error);
    document.getElementById('news-list').innerHTML = '<li>お知らせの取得に失敗しました。</li>';
  }
}

fetchNews();