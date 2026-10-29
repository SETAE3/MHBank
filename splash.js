/* Loading screen: put <script src="splash.js"></script> right after <body> on every page. Needs LOGOIMGA.png */
(function () {
  var css = '#splash{position:fixed;inset:0;z-index:9999;background:radial-gradient(circle at 50% 38%,#0B45C9,#033198 58%,#021F66);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:"Kantumruy Pro",sans-serif;transition:opacity .6s ease,visibility .6s}' +
    '#splash.out{opacity:0;visibility:hidden}' +
    '.sp-logo{position:relative;width:132px;height:132px;display:grid;place-items:center;animation:spIn .9s cubic-bezier(.2,.8,.2,1) both}' +
    '.sp-logo img{width:112px;height:112px;border-radius:50%;background:#fff;object-fit:cover;position:relative;z-index:1}' +
    '.sp-logo:before,.sp-logo:after{content:"";position:absolute;inset:0;border-radius:50%;border:2px solid rgba(255,255,255,.55);animation:spRing 2s ease-out infinite}' +
    '.sp-logo:after{animation-delay:1s}' +
    '.sp-kh{margin-top:26px;font-size:30px;font-weight:600;animation:spUp .8s .35s both}' +
    '.sp-en{margin-top:4px;font-size:15px;font-weight:300;letter-spacing:.04em;opacity:.9;animation:spUp .8s .5s both}' +
    '.sp-bar{margin-top:34px;width:180px;height:4px;border-radius:4px;background:rgba(255,255,255,.22);overflow:hidden;animation:spUp .8s .65s both}' +
    '.sp-bar i{display:block;height:100%;width:40%;border-radius:4px;background:#fff;animation:spSlide 1.2s ease-in-out infinite}' +
    '@keyframes spIn{from{opacity:0;transform:scale(.6)}to{opacity:1;transform:none}}' +
    '@keyframes spRing{from{transform:scale(1);opacity:.8}to{transform:scale(1.7);opacity:0}}' +
    '@keyframes spUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}' +
    '@keyframes spSlide{0%{transform:translateX(-110%)}100%{transform:translateX(280%)}}' +
    '@media(prefers-reduced-motion:reduce){#splash *,#splash *:before,#splash *:after{animation:none!important}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  var d = document.createElement('div'); d.id = 'splash';
  d.innerHTML = '<div class="sp-logo"><img src="LOGOIMGA.png" alt=""></div><div class="sp-kh">ធនាគារ មហានគរ</div><div class="sp-en">Mohanokor Bank of Cambodia Co., Ltd.</div><div class="sp-bar"><i></i></div>';
  document.body.appendChild(d);
  document.body.style.overflow = 'hidden';
  var t0 = Date.now(), done = false;
  function finish() {
    if (done) return; done = true;
    setTimeout(function () {
      d.classList.add('out'); document.body.classList.add('go'); document.body.style.overflow = '';
      setTimeout(function () { d.remove(); }, 700);
    }, Math.max(0, 2200 - (Date.now() - t0)));
  }
  window.addEventListener('bank-auth', finish);   // both the main site and pay.html fire this once Firebase is ready
  setTimeout(finish, 5000);                       // never get stuck
})();
