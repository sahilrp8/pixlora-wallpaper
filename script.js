const wallpapers = [
  { image: "wallpapers/1.jpg", title: "Sita-Ram", category: "Ram" },
  { image: "wallpapers/2.jpg", title: "Sita-Ram", category: "Ram" },
  { image: "wallpapers/3.jpg", title: "Sita-Ram", category: "Ram" },
  { image: "wallpapers/4.jpg", title: "Sita-Ram", category: "Ram" },
  { image: "wallpapers/5.jpg", title: "Radha-Krishna", category: "krishna" },
  { image: "wallpapers/6.jpg", title: "Radha-Krishna", category: "krishna" },
  { image: "wallpapers/7.jpg", title: "Radha-Krishna", category: "krishna" },
  { image: "wallpapers/8.jpg", title: "Radha-Krishna", category: "krishna" },
  { image: "wallpapers/9.jpg", title: "Radha-Krishna", category: "krishna" },
  { image: "wallpapers/10.jpg", title: "Radha-Krishna", category: "krishna" },
  { image: "wallpapers/11.jpg", title: "Radha-Krishna", category: "krishna" },
  { image: "wallpapers/12.jpg", title: "Radha-Krishna", category: "krishna" },
  { image: "wallpapers/13.jpg", title: "Radha-Krishna", category: "krishna" },
  { image: "wallpapers/14.jpg", title: "Radha-Krishna", category: "krishna" },
  
  { image: "wallpapers/16.jpg", title: "BajrangBali", category: "BajrangBali" },
  { image: "wallpapers/17.jpg", title: "BajrangBali", category: "BajrangBali" },
  { image: "wallpapers/18.jpg", title: "BajrangBali", category: "BajrangBali" },
  { image: "wallpapers/19.jpg", title: "BajrangBali", category: "BajrangBali" },
  { image: "wallpapers/20.jpg", title: "BajrangBali", category: "BajrangBali" },
  { image: "wallpapers/21.jpg", title: "BajrangBali", category: "BajrangBali" },
  { image: "wallpapers/22.jpg", title: "BajrangBali", category: "BajrangBali" },
  { image: "wallpapers/23.jpg", title: "BajrangBali", category: "BajrangBali" }
  // { image: "wallpapers/wall2.jpg", title: "Cyber City", category: "cyberpunk" },
  // { image: "wallpapers/wall4.jpg", title: "Dark AMOLED", category: "amoled" },
  // { image: "wallpapers/wall5.jpg", title: "Minimal Lines", category: "minimal" }
];

const gallery = document.getElementById("gallery");
const sidebar = document.getElementById("sidebar");

function displayWallpapers(list) {

  gallery.innerHTML = "";

  list.forEach(w => {

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${w.image}" loading="lazy">
        <div class="card-body">
        <div class="card-title">${w.title}</div>
        <div class="card-tag">${w.category}</div>
        <a href="${w.image}" download class="download-btn">Download</a>
        </div>
        `;

    gallery.appendChild(card);

  });

}

function filterCategory(cat) {

  if (cat === "all") {
    displayWallpapers(wallpapers);
  } else {
    const filtered = wallpapers.filter(w => w.category === cat);
    displayWallpapers(filtered);
  }

  /* MOBILE par sidebar auto close */
  if (window.innerWidth <= 768) {
    sidebar.classList.remove("active");
  }

}

function toggleSidebar() {
  sidebar.classList.toggle("active");
}

displayWallpapers(wallpapers);
