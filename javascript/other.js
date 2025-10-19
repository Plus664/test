let hasScanned = false;

function startScan() {
  const qrScanner = new Html5Qrcode("reader");
  qrScanner.start(
    { facingMode: "environment" },
    {
      fps: 5,
      qrbox: 300
    },
    (decodedText) => {
      try {
        if(hasScanned) return;
        hasScanned = true;

        const url = newURL(decodedText);
        if(url.pathname.includes("result.html")) {
          location.href = decodedText;
        } else {
          alert("無効なQRコードです");
        }
      } catch {
        alert("読み取れませんでした");
      }

      setTimeout(() => {
        qrScanner.stop();
      }, 1000);
    },
    /*(errorMessage)  => {
      alert(errorMessage);
    }*/
  );
}

$(function() {
    $('.hamburger').click(function() {
        $('.menu').toggleClass('open');

        $(this).toggleClass('active');
    });

});


