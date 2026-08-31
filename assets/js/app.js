(() => {
  const loginForm = document.querySelector('#loginForm');
  const usernameInput = document.querySelector('#username');
  const passwordInput = document.querySelector('#password');
  const loginTip = document.querySelector('#loginTip');

  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();

      if (!username || !password) {
        loginTip.textContent = '请输入账号和密码。';
        return;
      }

      localStorage.setItem('demoLoggedIn', 'true');
      localStorage.setItem('demoUsername', username);
      window.location.href = 'index.html';
    });
  }

  const isHome = document.body.classList.contains('app-page');
  if (isHome) {
    const loggedIn = localStorage.getItem('demoLoggedIn') === 'true';
    if (!loggedIn) {
      window.location.replace('login.html');
      return;
    }

    const username = localStorage.getItem('demoUsername') || '用户';
    const displayUsername = document.querySelector('#displayUsername');
    const welcomeUsername = document.querySelector('#welcomeUsername');
    const avatar = document.querySelector('.avatar');
    if (displayUsername) displayUsername.textContent = username;
    if (welcomeUsername) welcomeUsername.textContent = username;
    if (avatar) avatar.textContent = username.slice(0, 1).toUpperCase();

    const logoutButton = document.querySelector('#logoutButton');
    if (logoutButton) {
      logoutButton.addEventListener('click', () => {
        localStorage.removeItem('demoLoggedIn');
        localStorage.removeItem('demoUsername');
        window.location.href = 'login.html';
      });
    }

    const sidebar = document.querySelector('#sidebar');
    const sidebarMask = document.querySelector('#sidebarMask');
    const menuButton = document.querySelector('#menuButton');

    const closeSidebar = () => {
      sidebar?.classList.remove('open');
      sidebarMask?.classList.remove('show');
    };

    menuButton?.addEventListener('click', () => {
      sidebar?.classList.toggle('open');
      sidebarMask?.classList.toggle('show');
    });
    sidebarMask?.addEventListener('click', closeSidebar);
    document.querySelectorAll('.nav-item').forEach((item) => {
      item.addEventListener('click', closeSidebar);
    });
  }
})();
