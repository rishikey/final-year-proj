

export default function Functionn() {
  /* console.log(Functionn) */

  /* window.onload= function() { */
   /*  console.log("function called!!"); */

    var input = document.getElementById("myInput");
    var ul = document.getElementById("myUL");
    /* console.log(ul)

    console.log(input) */

    input.addEventListener("keyup", function() {
      var filter = input.value.toUpperCase();
      var li = ul.getElementsByTagName("li");
      /* console.log(li) */

      for (var i = 0; i < li.length; i++) {
        var a = li[i].getElementsByTagName("a")[0];
        /* console.log(a) */
        var txtValue = a.textContent || a.innerText;
        /* console.log(txtValue) */

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
    });
  /* }; */
}

