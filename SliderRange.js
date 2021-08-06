(function slider() {
    var sliderRange = document.getElementById("sliderRange");
    var sliderVal = document.getElementById("sliderVal");
    sliderVal.innerHTML = sliderRange.value;
    sliderRange.oninput = function () {
        sliderVal.innerHTML = this.value;
    }
})();