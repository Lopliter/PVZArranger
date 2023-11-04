function closeWindow() {
    window.close(); // 关闭当前网页
}
function printGarden(scenes){
    switch (scenes){
        case 0:
            var gardenTable = document.getElementById("garden");
            var gardenImg = document.getElementById("background");
            gardenImg.src = "images/day.png";
    }
}