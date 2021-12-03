const formRegister = document.getElementById('form-signup') || '';
const formLogin = document.getElementById('form-login') || '';
let message = {};

const register = e => {
  e.preventDefault();

  const email = formRegister.elements['email'].value;
  const password = formRegister.elements['password'].value;
  const repeat = formRegister.elements['repeat'].value;

  if (email && password && repeat) {
    if (repeat !== password) {
      message = { message: 'pastikan anda mengulangi password dengan benar!' };
    } else {
      const dbRegister = JSON.parse(localStorage.getItem('register')) || [];
      const registerData = {
        id: Math.floor(Math.random() * 100000),
        email,
        password,
      };

      dbRegister.push(registerData);
      localStorage.setItem('register', JSON.stringify(dbRegister));

      message = {
        message:
          'selamat data kamu ter-input, tunggu hingga kami mengaktifkan akun anda',
      };
    }
  } else {
    message = { message: 'pastikan semua data telah diisi' };
  }
  console.log('message', message);
};

const login = e => {
  e.preventDefault();

  console.log('halo');
};
