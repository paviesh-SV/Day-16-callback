//JS script for countdown and output the text
window.onload = function () {
    let count = document.getElementById("count");
    let text = document.getElementById("text");
    text.style.visibility = "hidden";

    count.innerHTML = 10;
    setTimeout(function () {
      count.innerHTML = 9;

      setTimeout(function () {
        count.innerHTML = 8;

        setTimeout(function () {
          count.innerHTML = 7;

          setTimeout(function () {
            count.innerHTML = 6;

            setTimeout(function () {
              count.innerHTML = 5;

              setTimeout(function () {
                count.innerHTML = 4;

                setTimeout(function () {
                  count.innerHTML = 3;

                  setTimeout(function () {
                    count.innerHTML = 2;

                    setTimeout(function () {
                      count.innerHTML = 1;

                      setTimeout(function () {

                        count.style.visibility = "hidden";
                        text.style.visibility = "visible";

                      }, 1000);

                    }, 1000);

                  }, 1000);

                }, 1000);

              }, 1000);

            }, 1000);

          }, 1000);

        }, 1000);

      }, 1000);

    }, 1000);

  };