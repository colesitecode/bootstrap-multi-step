// MACHINE SCRIPT
var header = document.getElementById("machine-menu");
var btns = header.getElementsByClassName("machine");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}


// SERVICE SCRIPT
// var header = document.getElementById("service-type");
// var btns = header.getElementsByClassName("service");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   });
// }





// WARNING SCRIPT
let alert_close_icons = document.querySelectorAll('.alert>.close');
if (alert_close_icons) {
    alert_close_icons.forEach((alert_close_icon) => {
        alert_close_icon.addEventListener('click', function () {
            this.closest('.alert').classList.add('close');

            this.closest('.alert').addEventListener('transitionend', function (event) {
                if (event.propertyName == 'transform') {
                    this.remove();
                }
            });
        });
    });
}