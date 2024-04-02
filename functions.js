document.getElementById('toggle-menu').addEventListener('click', function() {
  var elemento = document.getElementById('menu-items');
  
  if (elemento.classList.contains('flex')) {
    elemento.classList.remove('flex');
    elemento.classList.add('hidden');
  } else {
    elemento.classList.remove('hidden');
    elemento.classList.add('flex');
  }
})