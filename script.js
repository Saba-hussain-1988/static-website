//js code to make color box enable or disable
let color_theme = document.querySelector('#color-theme'),
colorIcon = document.querySelector('#color-theme #color-icon');

colorIcon?.addEventListener("click", ()=>{
    color_theme?.classList.toggle("open");
})



let buttons = document.querySelectorAll(".btn");
for (let button of buttons) {
    button.addEventListener("click", (e) => {
        let target = e.target;
        let open = document.querySelector(".open");
        if (open) open.classList.remove("open");
        document.querySelector(".active")?.classList.remove("active");
        target.classList.add("active");

        // Code to switch colors
        let root = document.querySelector(":root"),
            dataColor = target.getAttribute("data-color"),
            color = dataColor.split(" ");

        // Update CSS variables with colors
        root.style.setProperty("--second-color", color[0]);
        root.style.setProperty("--text-color", color[1]);
        root.style.setProperty("--nav-main", color[2]);
        root.style.setProperty("--switchers-main", color[3]);
        root.style.setProperty("--bg-color", color[4]);

        console.log(color);
    });
}


// toggle for side bar
document.getElementById("menu-button").addEventListener("click", function () {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("show");
  });
  