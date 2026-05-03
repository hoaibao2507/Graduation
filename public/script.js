// Bắn pháo giấy chúc mừng khi vừa load trang xong
window.onload = function() {
    var duration = 3 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      // Bắn pháo từ 2 bên màn hình
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
};
// --- ĐOẠN CODE LẤY TÊN KHÁCH MỜI TỪ URL ---

// 1. Kiểm tra xem trên link có tham số "?invite=" không
const urlParams = new URLSearchParams(window.location.search);
const guestName = urlParams.get('invite'); // Đổi 'guest' thành 'invite'

// 2. Nếu có tên trên link, thay thế vào HTML
if (guestName) {
    // decodeURIComponent giúp đọc đúng tiếng Việt có dấu
    document.getElementById('guest-name').innerText = decodeURIComponent(guestName);
}