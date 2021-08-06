document.getElementById("slider").oninput = function (e) {
    var value = document.getElementById("value");
    value.innerHTML = e.target.value;
    console.log(e.target.value);

    var holder = document.getElementById("buttonholder");
    while (holder.firstChild) {
        holder.removeChild(holder.firstChild);
    }

    for (let i = 1; i <= e.target.value; i++) {
        var btn = document.createElement("BUTTON");   // Create a <button> element
        btn.innerHTML = i;
        btn.className = "button";
        btn.value = i;
        btn.addEventListener("click", function () {
            console.log("I am button:", btn.value);
        });
        holder.appendChild(btn);
    }


    var buttons = document.getElementsByClassName("button")
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            console.log("I am button:", buttons[i].value);

        })
    }
};

