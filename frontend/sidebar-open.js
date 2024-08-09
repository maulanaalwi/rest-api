function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar.classList.contains('open')) {
    sidebar.classList.remove('open');
    sidebar.classList.add('closed');
  } else {
    sidebar.classList.remove('closed');
    sidebar.classList.add('open');
  }
}

function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  dropdown.classList.toggle('hidden');
}
