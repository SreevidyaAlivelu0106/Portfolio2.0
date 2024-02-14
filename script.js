var Activities = ["walking through cities", "tweeting", "caffe hopping", "planning my next adventure", "picking up cooking"];
var colors = ["Fuchsia","ForestGreen","DarkOrange","DarkViolet","Maroon"];
var activityIndex = 0;
function introduction() {
    document.getElementById("intro").innerHTML = Activities[activityIndex];
    document.getElementById("intro").style.color = colors[activityIndex];
    if (activityIndex<4){
        activityIndex+=1;
    } else{
        activityIndex = 0;
    }
  }

  