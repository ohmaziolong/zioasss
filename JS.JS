function toggleInfo() {
    const info = document.querySelector('.additional-info');
    const btn = document.querySelector('.toggle-btn');

    // Chuyển đổi trạng thái hiển thị của thông tin bổ sung
    info.classList.toggle('show');

    // Thay đổi nội dung nút "Xem thêm thông tin" thành "Thu gọn" hoặc "Xem thêm"
    if (info.classList.contains('show')) {
        btn.textContent = "Thu gọn thông tin";
    } else {
        btn.textContent = "Xem thêm thông tin";
    }
}
window.addEventListener('scroll', function() {
    const content = document.querySelector('.content');
    const contentPosition = content.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (contentPosition < screenPosition) {
        content.classList.add('visible');
    }
});