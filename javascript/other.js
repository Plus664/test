function startScan() {
  const qrScanner = new Html5Qrcode("reader");
  qrScanner.start(
    { facingMode: "environment" },
    {
      fps: 10,
      qrbox: 250
    },
    (decodedText) => {
      try {
        const url = newURL(decodedText);
        if(url.pathname.includes("result.html")) {
          location.href = decodedText;
        } else {
          alert("無効なQRコードです");
        }
      } catch {
        alert("読み取れませんでした");
      }
      qrScanner.stop();
    },
    (errorMessage)  => {
      alert(errorMessage);
    }
  );
}

$(function() {
    $('.hamburger').click(function() {
        $('.menu').toggleClass('open');

        $(this).toggleClass('active');
    });
});