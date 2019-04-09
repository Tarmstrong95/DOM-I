document.querySelector("body").style.background = "#c6baff";
document.querySelector("body").style.flexDirection = "column";

const timer = (function() {
  var mtcounter = 0;
  var stcounter = 0;
  var socounter = 0;
  var mhcounter = 0;

  var st = document.querySelector("#secondTens");
  var so = document.querySelector("#secondOnes");
  var mh = document.querySelector("#msHundreds");
  var mt = document.querySelector("#msTens");

  st.textContent = stcounter;
  so.textContent = socounter;
  mh.textContent = mhcounter;
  mt.textContent = mtcounter;
  function changeColor(){
      st.style.color = "red";
      so.style.color = "red";
      mh.style.color = "red";
      mt.style.color = "red";
  }

  function time() {
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
            stcounter ++;
            st.textContent = stcounter;
            so.textContent = 0;
            mh.textContent = 0;
            mt.textContent = 0;     
            changeColor();     
          }
        }
      }
    }
  }

    setInterval(time, 10);
})();
