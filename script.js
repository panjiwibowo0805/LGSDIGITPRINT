// ------------------------------
// Konten halaman sebagai template
// ------------------------------

const pages = {
    home: `
        <section class="about fade-in">
            <h1>SOLUTION<br><span>FOR YOUR MARKETING</span></h1>
            <h2>About Me</h2>
            <p>LOGOS DIGITAL PRINT adalah perusahaan yang bergerak di bidang Digital Marketing dan Branding Strategy yang berkomitmen membantu bisnis berkembang dan beradaptasi di era digital.</p>
            <p>Kami percaya bahwa kekuatan teknologi dan kreativitas dapat mengubah cara brand berinteraksi dengan audiens serta menciptakan nilai berkelanjutan bagi perusahaan.</p>
            <div class="printer"><img src="images/printlgs.png" alt="Printer"></div>
        </section>
    `,
    layanan: `
        <section class="layanan fade-in">
            <h2>Layanan</h2>
            <ul>
                <li><button class="glow" onclick="loadPage('jersey')">Jersey</button></li>
                <li><button class="glow" onclick="loadPage('Mmt')">Mmt</button></li>
                <li><button class="glow" onclick="loadPage('Sticker')">Sticker</button></li>
                <li><button class="glow"onclick="loadPage('Kaos')">Kaos</button></li>
            </ul>
        </section>
    `,
    jersey: `
        <section class="jersey fade-in">
            <img src="images/price list.png" alt="Price List Jersey">
            <img src="images/price list stelan.png" alt="Price List Jersey">
        </section>
    `,
     Mmt: `
        <section class="Mmt fade-in">
            <img src="images/price list.png" alt="Price List Mmt">
        </section>
    `,
    Sticker: `
        <section class="Sticker fade-in">
            <img src="images/price list.png" alt="Price List Sticker">
        </section>
    `,
    Kaos: `
        <section class="Sticker fade-in">
            <img src="images/price list.png" alt="Price List Sticker">
        </section>
    `
};

// ------------------------------
// Fungsi transisi antar halaman
// ------------------------------

const content = document.getElementById("content");

// Fungsi ganti halaman dengan animasi
function loadPage(page) {
    if (!pages[page]) return;
    content.classList.add("fade-out");

    setTimeout(() => {
        content.innerHTML = pages[page];
        content.classList.remove("fade-out");
        content.classList.add("fade-in");
        window.scrollTo(0, 0);
    }, 400);
}

// ------------------------------
// Saat pertama kali dibuka
// ------------------------------
window.onload = () => {
    loadPage("home");
};
