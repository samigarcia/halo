const moreOptions = document.querySelector("#bmore");
const bShowMobiblelink = document.querySelector("#bmenu");
const mobibleMenu = document.querySelector(".links");
const moreMenu = document.querySelector(".more .menu");


bShowMobiblelink.addEventListener("click", (e) => {
    e.preventDefault();
    mobibleMenu.classList.toggle("show");
});

moreOptions.addEventListener("click", (e) => {
    e.preventDefault();
    moreMenu.classList.toggle("show");
});

// LOGICA DE LOS VideoSource
const videos = [{
        id: "b80eLC0lHc4",
    },
    {
        id: "PyMlV5_HRWk",
    },
    {
        id: "rFh2i4AlPD4",
    },
    {
        id: "fT_yjcwrrjQ",
    },
    {
        id: "-DfSD_xDNsc",
    }
];

const sliderContainer = document.querySelector("#sider");
const currentContainer = document.querySelector("#current");
const videosContainer = document.querySelector("#videos-container");
const bNext = document.querySelector("#next");
const bPrev = document.querySelector("#prev");
let current = 0;

bNext.addEventListener("click", (e) => {
    let changed = current;
    current = current + 1 < videos.length ? current + 1 : current;
    renderCurrentVideo(videos[current].id);
});

bPrev.addEventListener("click", (e) => {
    current = current - 1 >= 0 ? current - 1 : current;
    renderCurrentVideo(videos[current].id);
});

renderCurrentVideo(videos[current].id);
renderVideos();

function renderCurrentVideo(id) {
    currentContainer.innerHTML = `<iframe width="100%" height="400" src="https://www.youtube.com/embed/${id}" title="HALO Tráiler Español Latino 2 (Nuevo, 2022)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}

function renderVideos() {
    const html = videos.map((video, index) => {
        return `
        <div class="item">
            <a href="#" data-id="${index}">
                <img src = "https://img.youtube.com/vi/${video.id}/mqdefault.jpg" />
                <span class = "material-symbols-outlined" >
                    play_arrow 
                </span>
            </a>
        </div>`;
    });
    videosContainer.innerHTML = html.join("");

    document.querySelectorAll(".item a").forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const id = +item.getAttribute("data-id");
            current = id;
            renderCurrentVideo(videos[current].id);
        })
    })

}