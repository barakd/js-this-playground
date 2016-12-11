const originalLog = console.log;
const visualConsole = document.getElementById('console');
const counterVisual = document.getElementById('counterValue');
const windowcounterVisual = document.getElementById('windowCount');

function log(msg){
 visualConsole.innerHTML += '</br>' + msg;
}

function clearLog(){
  visualConsole.innerHTML= '';
}

window.onerror = function(message, source, lineno, colno, error) { 
   visualConsole.innerHTML += '<div class="error">' + message + '</div>';

}


function render(force){
  if(counterVisual.innerHTML != counter.count || force){
      counterVisual.innerHTML = counter.count;
      counterVisual.classList.add('highlight');
      setTimeout(() => counterVisual.classList.remove('highlight'), 1000)
  }
  if(windowcounterVisual.innerHTML != window.count || force){
      windowcounterVisual.innerHTML = window.count;

    windowcounterVisual.classList.add('highlight');
      setTimeout(() => windowcounterVisual.classList.remove('highlight'), 1000)
  }
}