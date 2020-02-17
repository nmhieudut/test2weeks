const container = document.getElementById("container");
function makeIndex(rows,cols){
    for(let i = 0;i<cols;i++)
    {
        container.style.setProperty('--grid-rows', rows);
        container.style.setProperty('--grid-cols', cols);
        let index = document.createElement("div");
        index.innerText = (i + 1);
        container.appendChild(index).className = "grid-item-adv";
    }
}
function makeRows(rows, cols) {
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = Math.floor(Math.random() * (1000 - 1) + 1);
        container.appendChild(cell).className = "grid-item";
    };
};
window.onscroll = handleScroll;
function handleScroll(){
    var contentHeight = container.offsetHeight;
    var yOffset = window.pageYOffset;
    var y = yOffset + window.innerHeight;
    if(y >= contentHeight){
        container.innerHTML += "<div class='grid-item'></div>";
    }
};
document.customForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const rows = this.rows.value;
    const cells = this.columns.value;
    makeIndex(rows,cells);
    makeRows(rows, cells);
});



