$(function(){
    
});

var $typer = $('.typer'),
    txt = $typer.data("text"),
    tot = txt.length,
    ch  = 0;

(function typeIt() {   
  if(ch > tot) return;
  $typer.text( txt.substring(0, ch++) );
  setTimeout(typeIt, ~~(Math.random()*(300-60+1)+60));
}());

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}
let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.skills__box');

for (let elm of elements) {
  observer.observe(elm);
}


