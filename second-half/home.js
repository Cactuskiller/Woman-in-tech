$(document).ready(function () {
  $(".slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: $(".slick-prev"),
    nextArrow: $(".slick-next"),
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("cardModal");
  var modalImage = modal.querySelector(".modal-image");
  var modalGroup = modal.querySelector(".modal-group");
  var modalTopic = modal.querySelector(".modal-topic");
  var modalDuration = modal.querySelector(".modal-duration");
  var modalStudents = modal.querySelector(".modal-students");
  var modaldtel = modal.querySelector(".dtel");
  var closeModal = modal.querySelector(".close");

  // الحصول على جميع الأزرار "See More"
  var seeMoreButtons = document.querySelectorAll(".see-more");

  // اضف event listener لكل زر
  seeMoreButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // إظهار المودال
      modal.style.display = "block";

      // تحديث محتوى المودال بناءً على البيانات المأخوذة من الزر
      var group = this.getAttribute("data-group");
      var topic = this.getAttribute("data-topic");
      var duration = this.getAttribute("data-duration");
      var students = this.getAttribute("data-students");
      var dtel = this.getAttribute("dtel");

      modalGroup.textContent = group;
      modalTopic.textContent = topic;
      modalDuration.textContent = "Duration: " + duration;
      modalStudents.textContent = "Students: " + students;
      modaldtel.textContent = dtel;

      // إظهار صورة الكارت (يمكن تعديل هذه حسب الحاجة)
      var cardImage = this.closest(".card").querySelector("img").src;
      modalImage.src = cardImage;
      modalImage.style.display = "block";
    });
  });

  // إغلاق المودال عند النقر على الزر X
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // إغلاق المودال عند النقر خارج المودال
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});

// جلب الـ navbar
var navbar = document.querySelector(".Nav_Bar");
var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  // إذا تم التمرير لأسفل، يتم إخفاء الـ navbar، وإذا تم التمرير لأعلى يظهر
  if (prevScrollpos > currentScrollPos) {
    navbar.classList.remove("hidden"); // إظهار الـ Nav_Bar
  } else {
    navbar.classList.add("hidden"); // إخفاء الـ Nav_Bar
  }
  prevScrollpos = currentScrollPos;
};

// إظهار الـ Nav_Bar عند وضع المؤشر عليه
navbar.addEventListener("mouseenter", function () {
  navbar.classList.remove("hidden");
});

// إخفاء الـ Nav_Bar عند إزالة المؤشر
navbar.addEventListener("mouseleave", function () {
  if (window.pageYOffset > 0) {
    // فقط إذا تم التمرير
    navbar.classList.add("hidden");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // جلب الـ Nav_Bar
  var navbar = document.getElementById("Nav_Bar");

  // جلب القسم الثاني أو الصفحة الثانية
  var secondSection = document.getElementById("second-section");

  // التحقق من التمرير وتغيير لون الـ navbar عند الوصول للقسم الثاني
  window.addEventListener("scroll", function () {
    var secondSectionOffsetTop = secondSection.offsetTop;
    var scrollPosition = window.pageYOffset;

    // إذا كان المستخدم قد وصل أو تجاوز القسم الثاني
    if (scrollPosition >= secondSectionOffsetTop - 200) {
      navbar.classList.add("scrolled"); // تغيير اللون
    } else {
      navbar.classList.remove("scrolled"); // إعادة اللون الأصلي
    }
  });
});
