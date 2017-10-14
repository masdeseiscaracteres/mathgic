//
//  Use a closure to hide the local variables from the
//  global namespace
//
(function () {

//
//  The onchange event handler that typesets the
//  math entered by the user
//
window.UpdateMath = function (TeX) {
    //set the MathOutput HTML
    document.getElementById("MathOutput").innerHTML = TeX;
    //reprocess the MathOutput Element
    MathJax.Hub.Queue(["Typeset",MathJax.Hub,"MathOutput"]);
 
}
})();