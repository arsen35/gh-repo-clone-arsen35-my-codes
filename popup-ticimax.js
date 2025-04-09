<style>
  /* Dikey tetikleyici buton */
  #popup-toggle-btn {
    position: fixed;
    top: 40%;
    left: 0;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    background-color: black;
    color: white;
    padding: 10px 8px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    z-index: 9998;
  }

  #popup-toggle-btn:hover {
    background-color: #333;
  }

  /* Popup kutusu */
  #opportunity-popup {
    position: fixed;
    left: 0;
    bottom: 50px;
    width: 200px;
    background-color: white;
    color: black;
    z-index: 9999;
    cursor: pointer;
    overflow: hidden;
    transition: transform 0.3s ease;
    text-align: center;
    display: none;
    flex-direction: column;
    font-family: 'Arial', sans-serif;
    padding-bottom: 10px;
    border: none;
  }

  #opportunity-popup:hover {
    transform: translateY(-5px);
  }

  #opportunity-popup .product-image {
    width: 100%;
    margin-bottom: 10px;
  }

  #opportunity-popup .product-title {
    font-size: 14px;
    font-weight: bold;
    margin: 0 10px 10px 10px;
    line-height: 1.3;
    color: black;
  }

  #opportunity-popup .cta {
    font-size: 16px;
    background-color: black;
    color: white;
    padding: 8px 15px;
    display: inline-block;
    font-weight: bold;
    margin: 0 auto;
  }

  .pulse {
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }

  #close-opportunity {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 16px;
    color: black;
    background-color: rgba(255, 255, 255, 0.7);
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
    opacity: 0.7;
    z-index: 10;
  }

  #close-opportunity:hover {
    opacity: 1;
  }
</style>

<!-- Dikey Buton -->
<div id="popup-toggle-btn">Tıkla Avantajı Yakala</div>

<!-- Popup Kutusu -->
<div id="opportunity-popup">
  <span id="close-opportunity">&times;</span>
  <img class="product-image" src="https://static.ticimax.cloud/cdn-cgi/image/width=-,quality=85/66001/uploads/urunresimleri/buyuk/factor360-22-parca-arac-yikama-detayli--20dcb.jpg">
  <div class="product-title">Factor360 22 Parça Araç Yıkama & Detaylı Bakım Seti</div>
  <div class="cta pulse">ACELE ET</div>
</div>

<!-- JS -->
<script>
  (function() {
    const popup = document.getElementById('opportunity-popup');
    const toggleBtn = document.getElementById('popup-toggle-btn');
    const closeBtn = document.getElementById('close-opportunity');

    toggleBtn.addEventListener('click', function(e) {
      popup.style.display = 'flex';
      toggleBtn.style.display = 'none';
      e.stopPropagation();
    });

    closeBtn.addEventListener('click', function(e) {
      popup.style.display = 'none';
      toggleBtn.style.display = 'block';
      e.stopPropagation();
    });

    popup.addEventListener('click', function(e) {
      if (e.target.id !== 'close-opportunity') {
        window.location.href = 'https://www.tulparstore.com/factor360-22-parca-arac-yikama-detayli-bakim-seti-profesyonel-oto-temizlik-parlatma-koruma-paketi-avantajli-fiyat';
      }
    });
  })();
</script>
