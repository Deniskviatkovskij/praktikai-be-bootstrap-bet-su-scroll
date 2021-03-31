let page = 1;
const getImages = async function() {
    const imageSources = [ // Put your image sources in this list
        './images/c.jpg',
        './images/a.jpg',
        './images/b.jpg',
        './images/f.jpg',
        './images/g.jpg',
        './images/d.jpg',
        './images/e.jpg',
        './images/h.jpg',
        './images/i.jpg',
        './images/k.jpg',
        './images/k.jpg',
        './images/l.jpg',
        './images/m.jpg',
        './images/n.jpg',
        './images/o.jpg',
        './images/p.jpg',
        './images/q.jpg',
        './images/r.jpg',
        './images/s.jpg',
        './images/t.jpg',
        './images/u.jpg',
        './images/v.jpg',
        './images/x.jpg',
        './images/z.jpg'

      ]
      imageSources.sort();
      
      for (let i = 0; i < 24; i++) { // Change this 5 to however many images you have (or use for ... in) 
          let ele = document.createElement("img");
          ele.setAttribute("src", imageSources[i]);
          ele.setAttribute("height", "384");
          ele.setAttribute("width", "512");
          document.getElementById("container").appendChild(ele);
        }
        page++;
        loading.classList.remove("show");
      };
  
function showLoading() {
  const loading = document.querySelector(".loading");

  loading.classList.add("show");
  // load more data
  setTimeout(getImages, 1000);
}

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (clientHeight + scrollTop >= scrollHeight - 5) {
    // show the loading animation
    showLoading();
  }
});

function initPage() {
  getImages();
}

initPage();