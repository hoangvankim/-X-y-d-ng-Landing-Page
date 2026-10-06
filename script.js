$(function () {
  // Đóng menu mobile sau khi bấm link.
  $(".navbar-nav .nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Demo xử lý form: chỉ kiểm tra dữ liệu phía trình duyệt, không gửi lên server.
  $("#consultForm").on("submit", function (event) {
    event.preventDefault();

    const form = this;
    const fullname = $("#fullname").val().trim();
    const phone = $("#phone").val().trim();
    const email = $("#email").val().trim();
    const status = $("#status").val();

    if (!fullname || !phone || !email || !status) {
      alert("Vui lòng điền đầy đủ thông tin trước khi gửi.");
      return;
    }

    if (!email.includes("@")) {
      alert("Email chưa đúng định dạng.");
      return;
    }

    $("#formMessage").removeClass("d-none");
    form.reset();

    $("html, body").animate({
      scrollTop: $("#formMessage").offset().top - 120
    }, 500);
  });
});
