function toggleDropdown() {
    const menu = document.getElementById('dropdownMenu');
    menu.classList.toggle('hidden');
  }
  
  // Close dropdown if clicked outside
  document.addEventListener('click', function(event) {
    const menu = document.getElementById('dropdownMenu');
    const button = event.target.closest('button');
    
    if (!button && !menu.contains(event.target)) {
      menu.classList.add('hidden');
    }
  });