(function () {
    'use strict';

    // ==========================================
    // A. KAZUSA 初期化
    // ==========================================
    function initKazusaGallery() {
        const IMGS = [
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dcdc7077de9/kazusa-001.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dcdc7c6c675/kazusa-002.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dcbaa10e04a/kazusa-003.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dcdc894337e/kazusa-004.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dcdc94553f4/kazusa-005.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dcdc9e74378/kazusa-006.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dcdca7d3b84/kazusa-007.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dcdcb12df46/kazusa-008.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dcdcbcc0710/kazusa-009.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dcdcc623b53/kazusa-010.jpg"
        ];

        var gallery  = document.getElementById('kazusaGallery');
        var track    = document.getElementById('kazusaTrack');
        var dotsEl   = document.getElementById('kazusaDots');
        var thumbsEl = document.getElementById('kazusaThumbs');
        var prevBtn  = document.getElementById('kazusaPrev');
        var nextBtn  = document.getElementById('kazusaNext');

        if (!gallery || !track || !dotsEl || !thumbsEl || !prevBtn || !nextBtn) return;
        if (gallery.dataset.ycInitialized === 'true') return;

        gallery.dataset.ycInitialized = 'true';

        var current = 0;

        dotsEl.innerHTML = '';
        thumbsEl.innerHTML = '';

        IMGS.forEach(function (src, i) {
            var btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'yc-gallery-dot' + (i === 0 ? ' is-active' : '');
            btn.addEventListener('click', function () { goTo(i); });
            dotsEl.appendChild(btn);

            var thumb = document.createElement('img');
            thumb.src = src;
            thumb.alt = 'KAZUSA ' + (i + 1);
            thumb.className = 'yc-gallery-thumb' + (i === 0 ? ' is-active' : '');
            thumb.addEventListener('click', function () { goTo(i); });
            thumbsEl.appendChild(thumb);
        });

        function goTo(n) {
            current = (n + IMGS.length) % IMGS.length;
            track.style.transform = 'translateX(' + (-current * 100) + '%)';

            dotsEl.querySelectorAll('.yc-gallery-dot').forEach(function (d, i) {
                d.classList.toggle('is-active', i === current);
            });

            thumbsEl.querySelectorAll('.yc-gallery-thumb').forEach(function (t, i) {
                t.classList.toggle('is-active', i === current);
            });

            if (thumbsEl.children[current]) {
                thumbsEl.children[current].scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        }

        prevBtn.addEventListener('click', function () { goTo(current - 1); });
        nextBtn.addEventListener('click', function () { goTo(current + 1); });

        var startX = 0;
        track.addEventListener('touchstart', function (e) {
            startX = e.touches[0].clientX;
        }, { passive: true });

        track.addEventListener('touchend', function (e) {
            var diff = startX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 40) {
                goTo(current + (diff > 0 ? 1 : -1));
            }
        });

        goTo(0);
    }

    // ==========================================
    // B. ページHTMLデータ
    // ==========================================
    const listPage = `
        <div class="yc-wrapper">
            <section class="yc-main-visual" style="text-align:center; padding: 60px 0 0;">
                <h1 style="font-size:20px; font-weight:300; letter-spacing:0.4em; color:#2F2E2E;">オリジナルフレーム</h1>
            </section>
            <div class="yc-grid-container">
                <section class="yc-model-section">
                    <div class="yc-model-img"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dc9efa7761c/frame01.png" alt="KAZUSA"></div>
                    <div class="yc-model-text">
                        <a href="/about?p=kazusa" class="yc-btn-detail"><h2>GRAVEL GRINDER<br>上総 KAZUSA</h2></a>
                        <p>林道やグラベルを楽しく遊べるグラベルグラインダー！</p>
                    </div>
                </section>
                <section class="yc-model-section">
                    <div class="yc-model-img"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dcab10eb1eb/frame02.png" alt="QUIET"></div>
                    <div class="yc-model-text">
                        <a href="/about?p=quiet-disc" class="yc-btn-detail"><h2>ALL ROAD BIKE QUIET Disc</h2></a><br>
                        <a href="/about?p=quiet-mud" class="yc-btn-detail"><h2>ALL ROAD BIKE QUIET Mud</h2></a>
                        <p>ロングライドもちょっとした悪路もガンガンこなすオールラウンダー！</p>
                    </div>
                </section>
                <section class="yc-model-section">
                    <div class="yc-model-img"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dc9f15a0189/frame03.png" alt="CUSTOM"></div>
                    <div class="yc-model-text">
                        <a href="/about?p=custom" class="yc-btn-detail"><h2>CUSTOM FRAME</h2></a>
                        <p>こういう自転車が欲しい！他社のモデルやYANAGIのスタンダードには収まらないものをご希望の方はこちら。</p>
                    </div>
                </section>
            </div>
        </div>
    `;

    const pages = {
        'kazusa': `
            <div class="yc-detail-wrapper">
                <div class="yc-back-nav"><a href="/about" class="yc-back-btn">← ALL FRAMES</a></div>
                <div class="yc-detail-head"><h1>GRAVEL GRINDER KAZUSA (上総)</h1></div>

                <div class="yc-gallery" id="kazusaGallery">
                    <div class="yc-gallery-main">
                        <div class="yc-gallery-main-track" id="kazusaTrack">
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dcdc7077de9/kazusa-001.jpg" alt="KAZUSA 01"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dcdc7c6c675/kazusa-002.jpg" alt="KAZUSA 02"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dcbaa10e04a/kazusa-003.jpg" alt="KAZUSA 03"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dcdc894337e/kazusa-004.jpg" alt="KAZUSA 04"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dcdc94553f4/kazusa-005.jpg" alt="KAZUSA 05"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dcdc9e74378/kazusa-006.jpg" alt="KAZUSA 06"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dcdca7d3b84/kazusa-007.jpg" alt="KAZUSA 07"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dcdcb12df46/kazusa-008.jpg" alt="KAZUSA 08"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dcdcbcc0710/kazusa-009.jpg" alt="KAZUSA 09"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dcdcc623b53/kazusa-010.jpg" alt="KAZUSA 10"></div>
                        </div>
                        <button class="yc-gallery-prev" id="kazusaPrev" type="button">&#10094;</button>
                        <button class="yc-gallery-next" id="kazusaNext" type="button">&#10095;</button>
                    </div>
                    <div class="yc-gallery-dots" id="kazusaDots"></div>
                    <div class="yc-gallery-thumbs" id="kazusaThumbs"></div>
                </div>

                <div class="yc-detail-main">
                    <div class="yc-description-col">
                        <h2>商品名：KAZUSA</h2>
                        <p>林道やグラベルを楽しく、アグレッシブに遊べるグラベルグラインダーです！</p>
                        <h3>◆ 650 x 47B ロードプラスタイヤ</h3>
                        <p>軽くエアボリュームがあり、良いタイヤが多く発売されているこの規格・タイヤ径で最高のパフォーマンスが出せるフレーム設計</p>
                        <h3>◆ 低いスタンドオーバーハイト</h3>
                        <p>下りで何かの拍子で足をつかなければいけない時、大事な股間にできるだけダメージを与えないように。<br>それからカーブで、ぐっと車体を倒しこんだ時に膝がトップチューブに当たらないようにトップチューブは強いスローピングになっています。<br>強力にグリップするロードプラスタイヤのポテンシャルを引き出すにはこのくらいトップチューブが低いほうが良いですね！</p>
                        <h3>◆ ロード系のハンドル</h3>
                        <p>MTBではなくあくまでロードバイクベース。ドロップハンドルで最適なフィーリングに設計</p>
                        <h3>◆ コロンバス ZONAパイプ</h3>
                        <p>ZONAはこれだけ大径でも固くなりすぎないしなやかなパイプです。適度にウィップなフレームはトラクションを向上させて様々なコーナリングで良い効果をもたらします。</p>
                        <h3>◆ ドロッパーポスト対応</h3>
                        <p>ボリュームのあるタイヤ、さらにサスペンションをつけた場合、林道での下りの速度は圧倒的に上がります。うまく重心・フォームを変化させるにはドロッパーポストは大変有効です。ドロッパーポスト内装に対応しています。</p>
                        <h3>◆ 長いフロントセンター</h3>
                        <p>この設計により、最高の下りの安定感・トレースのフィーリングの良さをもたらします</p>
                    </div>
                    <div class="yc-side-col">
                        <div style="background: #f9f9f9; padding: 30px; position: sticky; top: 20px;">
                            <h3 style="font-size:16px; color:#ED4700; margin-bottom:20px; font-weight:bold;">仕様</h3>
                            <table class="yc-spec-table">
                                <tr><td>使用パイプ</td><td>コロンブス ZONA</td></tr>
                                <tr><td>フロントフォーク</td><td>コロンブスカーボン</td></tr>
                                <tr><td>ブレーキ</td><td>ディスクブレーキ</td></tr>
                                <tr><td>最大タイヤ幅</td><td>650 x 50b, 27.5 x 2.0"</td></tr>
                            </table>
                            <div class="yc-price">価格：<span>285,000円</span>（税込￥313,500円）</div>
                            <a href="https://thebase.com/inquiry/yanagicycle-base-shop?" class="yc-btn yc-btn-orange">お問い合わせ</a>
                            <br>
                            <a href="https://drive.google.com/uc?export=download&id=ここにGoogleドライブのファイルID" class="yc-btn yc-btn-orange" target="_blank" style="margin-top:10px;">オーダーフォーム (DOCX)</a>
                        </div>
                    </div>
                </div>
            </div>
        `
    };

    // ==========================================
    // C. ルーター制御
    // ==========================================
    function router() {
        var root = document.getElementById('yc-router-root');
        if (!root) return;

        var params = new URLSearchParams(window.location.search);
        var pageKey = params.get('p');

        if (pageKey && pages[pageKey]) {
            root.innerHTML = pages[pageKey];
            if (pageKey === 'kazusa') initKazusaGallery();
        } else {
            root.innerHTML = listPage;
        }

        window.scrollTo(0, 0);
    }

    router();
    window.addEventListener('popstate', router);
})();
