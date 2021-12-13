const formRegister = document.getElementById('form-signup') || '';
const formLogin = document.getElementById('form-login') || '';
const formCourse = document.getElementById('form-course') || '';

const dbRegisterCourse =
  JSON.parse(localStorage.getItem('registration_course')) || [];
const dbRegister = JSON.parse(localStorage.getItem('register')) || [];
const user = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : '';

let message = {};

const register = e => {
  e.preventDefault();

  const username = formRegister.elements['username'].value;
  const password = formRegister.elements['password'].value;
  const repeat = formRegister.elements['repeat'].value;

  if (username && password && repeat) {
    if (repeat !== password) {
      message = {
        message: "double-check that you've entered the password correctly!",
      };
    } else {
      const registerData = {
        id: Math.floor(Math.random() * 100000),
        username,
        password,
        role: 'user',
      };

      dbRegister.push(registerData);
      localStorage.setItem('register', JSON.stringify(dbRegister));

      message = {
        message: 'Hooray, you have finished the signup process successfully.',
      };

      $('.toast').addClass('toast-success');

      setTimeout(() => {
        window.location.href = '../../pages/login.html';
      }, 5500);
    }
  } else {
    message = { message: 'Make sure all data has been filled' };
  }

  toast();
};

const login = e => {
  e.preventDefault();

  const username = formLogin.elements['username'].value;
  const password = formLogin.elements['password'].value;

  const login = dbRegister.find(user => {
    return user.username === username && user.password === password;
  });

  if (login) {
    localStorage.setItem('user', JSON.stringify(login));
    message = { message: "You've logged in successfully " };

    $('.toast').addClass('toast-success');

    setTimeout(() => {
      if (login.role === 'admin') {
        window.location.href = '../../pages/admin.html';
      } else {
        window.location.href = '../../index.html';
      }
    }, 5500);
  } else {
    localStorage.setItem('user', JSON.stringify([]));
    message = {
      message:
        "Check your username and password to make sure they're accurate. ",
    };
  }

  toast();
};

const joinCourse = e => {
  e.preventDefault();

  const course = formCourse.elements['course'].value;
  const name = formCourse.elements['name'].value;
  const gender = formCourse.elements['gender'].value;
  const email = formCourse.elements['email'].value;
  const phone = formCourse.elements['phone'].value;
  const country = formCourse.elements['country'].value;
  const language = formCourse.elements['language'].value;
  const address = formCourse.elements['address'].value;
  const { id, username, password } = user;

  if (
    course &&
    name &&
    gender &&
    email &&
    phone &&
    country &&
    language &&
    address
  ) {
    const data = {
      id: Math.floor(Math.random() * 10000000),
      id_user: id,
      username,
      password,
      course,
      name,
      gender,
      email,
      phone,
      country,
      language,
      address,
      status: 'pending',
    };

    dbRegisterCourse.push(data);
    localStorage.setItem(
      'registration_course',
      JSON.stringify(dbRegisterCourse)
    );

    message = {
      message: 'Thank you for taking the time to register. ',
    };

    $('.toast').addClass('toast-success');

    setTimeout(() => {
      window.location.href = '../../pages/course.html';
    }, 5500);
  } else {
    message = { message: 'Make sure all data has been filled' };
  }

  toast();
};

const toast = () => {
  $('.toast-text').text(message.message);
  $('.toast').removeClass('hide');
  $('.toast').addClass('show');

  setTimeout(() => {
    $('.toast').removeClass('show');
    $('.toast').addClass('hide');
  }, 5000);
};
