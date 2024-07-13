document.getElementById('search').addEventListener('input', function() {
  let filter = this.value.toUpperCase();
  let items = document.querySelectorAll('.cables-items');
  
  items.forEach(function(item) {
    let text = item.querySelector('h3').textContent.toUpperCase();
    if (text.includes(filter)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
});