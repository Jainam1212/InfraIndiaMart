document.addEventListener("DOMContentLoaded", function () {
    console.log('infun');
    const buttons = document.querySelectorAll("#inquiry");
    console.log(buttons);
    buttons.forEach((button)=>{
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent the default anchor link behavior
            const target = document.getElementById("welcome_section");
            console.log(target)
            target.scrollIntoView({ behavior: "smooth" });
      });
    })
});
