const title = document.querySelectorAll('[title]');
const description = document.getElementById('description');
const price = document.getElementById('price');
const star = document.getElementById('star');
const level = document.getElementById('level');
const overview = document.getElementById('overview');
const intended = document.getElementById('intended');
const schedule = document.getElementById('schedule');
const image = document.getElementById('image');

const id = +localStorage.getItem('courseId') || 1;

if (id !== 999) {
  const newCourse = dataCourse.find(item => item.id === id);

  if (window.location.pathname === '/pages/leadGeneration.html') {
    $('[name=course]').val(newCourse.title);
  }

  title[0].innerHTML = newCourse.title;
  title[1].innerHTML = newCourse.title;
  description.innerHTML = newCourse.description;
  star.innerHTML = `(${newCourse.star})`;
  level.innerHTML = newCourse.level;
  price.innerHTML = newCourse.price;
  image.src = newCourse.img;

  overview.innerHTML = newCourse.courseOverview
    .map(item => `<p class="description">${item}</p>`)
    .join('<br />');

  intended.innerHTML = newCourse.courseFor
    .map(item => `<li>${item}</li>`)
    .join('');

  schedule.innerHTML = newCourse.schedule
    .slice(0, 3)
    .map(
      (item, index) => `
          <tr>
            <td>${index + 1}</td>  
            <td>${item.module}</td>
            <td>${item.time}</td>
            <td>${item.mentor}</td>
          </tr>
        `
    )
    .join('');
} else {
  const detailPage = document.getElementsByClassName('course-detail-page')[0];
  const testimonial = document.getElementsByClassName('testimonial')[0];
  const rate = document.getElementsByClassName('rate')[0];

  detailPage.style.display = 'none';
  testimonial.style.display = 'none';
  rate.innerHTML = `<a href="./course.html"></button><button class="btn">See More Course</button></a>`;

  title[0].innerHTML =
    'This course is currently <span class="text-danger"> closed </span>';
  description.innerHTML = `This course has been closed because to a quota being reached, but don't worry, it will reopen later. `;
}

$(document).ready(function () {
  $('.tab').on('click', function (evt) {
    evt.preventDefault();
    $('.tab').removeClass('active');
    $(this).toggleClass('active');
    var sel = this.getAttribute('data-toggle-target');
    $('.tab-content').removeClass('active').filter(sel).addClass('active');
  });
});
