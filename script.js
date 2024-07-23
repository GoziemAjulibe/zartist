
document.querySelector(".tab1").addEventListener("mouseover", function() {
    if (!this.classList.contains("selected")) {
        this.classList.add("hover");
    }
});

document.querySelector(".tab1").addEventListener("mouseout", function() {
    this.classList.remove("hover");
});

document.querySelector(".tab1").addEventListener("click", function() {
    this.classList.add("selected");
    document.querySelector(".tab2").classList.remove("selected");
    document.getElementById("content1").classList.add("content-active");
});

document.querySelector(".tab2").addEventListener("mouseover", function() {
    if (!this.classList.contains("selected")) {
        this.classList.add("hover");
    }
});

document.querySelector(".tab2").addEventListener("mouseout", function() {
    this.classList.remove("hover");
});

document.querySelector(".tab2").addEventListener("click", function() {
    this.classList.add("selected");
    document.querySelector(".tab1").classList.remove("selected");
    document.getElementById("content2").classList.add("content-active");
    document.getElementById("content1").classList.remove("content-active");
});


