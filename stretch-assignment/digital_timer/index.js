document.querySelector("body").style.background = "#c6baff";
document.querySelector("body").style.flexDirection = "column";

const timer = (function() {
  var mtcounter = 0, //Creates all variables
  stcounter = 0,
  socounter = 0,
  mhcounter = 0,
  st = document.querySelector("#secondTens"),
  so = document.querySelector("#secondOnes"),
  mh = document.querySelector("#msHundreds"),
  mt = document.querySelector("#msTens");

  st.textContent = stcounter;//Sets text of element to counter
  so.textContent = socounter;
  mh.textContent = mhcounter;
  mt.textContent = mtcounter;
  
  function changeColor(){//Changes text color
      st.style.color = "red";
      so.style.color = "red";
      mh.style.color = "red";
      mt.style.color = "red";
  }

  function time() {//Creates timer
    if (stcounter !== 1) {
      mtcounter++;
      mt.textContent = mtcounter;

      if (mt.textContent === "9") {
        mtcounter = -1;
        mhcounter++;
        mh.textContent = mhcounter;

        if (mh.textContent === "9") {
          mhcounter = -1;
          socounter++;
          so.textContent = socounter;

          if (so.textContent === "10") {
            socounter = 0;
            so.textContent = 0;
            stcounter ++;
            st.textContent = stcounter;
            mhcounter = 0;
            mh.textContent = 0;
            mtcounter = 0;
            mt.textContent = 0;     
            changeColor();     
          }
        }
      }
    }
  }

    setInterval(time, 10); // Starts interval
})();
