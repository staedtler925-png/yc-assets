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

        var gallery = document.getElementById('kazusaGallery');
        var track = document.getElementById('kazusaTrack');
        var dotsEl = document.getElementById('kazusaDots');
        var thumbsEl = document.getElementById('kazusaThumbs');
        var prevBtn = document.getElementById('kazusaPrev');
        var nextBtn = document.getElementById('kazusaNext');

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
    // B-1. QUIET Disc 初期化
    // ==========================================
    function initQuietGallery() {
        const IMGS = [
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dce6be3dc14/quiet-disc-001.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dce6cb65f88/quiet-disc-002.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dce6d5a5d08/quiet-disc-003.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dce6deb8e42/quiet-disc-004.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dce6e8e1ff4/quiet-disc-005.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dce6f2dd773/quiet-disc-006.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dce6fcbeb72/quiet-disc-007.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dce70647cac/quiet-disc-008.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dce70fe8817/quiet-disc-009.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dce71b3ea5a/quiet-disc-010.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dce7292b4b3/quiet-disc-011.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dce73ac2dee/quiet-disc-012.jpg"
        ];

        var gallery = document.querySelector('.yc-gallery');
        var track = document.getElementById('quietTrack');
        var dotsEl = document.getElementById('quietDots');
        var thumbsEl = document.getElementById('quietThumbs');
        var prevBtn = document.getElementById('quietPrev');
        var nextBtn = document.getElementById('quietNext');

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
            thumb.alt = 'QUIET Disc ' + (i + 1);
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

        var geoImg = document.getElementById('quietGeoImg');
        var modal = document.getElementById('ycModal');
        var modalImg = document.getElementById('ycModalImg');

        if (geoImg && modal && modalImg) {
            geoImg.onclick = function () {
                modalImg.src = this.src;
                modal.style.display = 'flex';
            };
            modal.onclick = function () {
                this.style.display = 'none';
            };
        }

        goTo(0);
    }

    // ==========================================
    // B-2. QUIET Mud 初期化
    // ==========================================
    function initQuietMudGallery() {
        const IMGS = [
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dd976ee1b42/quiet-mud-001.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dd977f9e4c1/quiet-mud-002.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dd978c13c6b/quiet-mud-003.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dd979750bde/quiet-mud-004.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dd97a1f2932/quiet-mud-005.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dd97ae642d7/quiet-mud-006.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dd97bcc6179/quiet-mud-007.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dd97c75e58a/quiet-mud-008.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dd97d2f01ca/quiet-mud-009.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dd97e053228/quiet-mud-010.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dd97ea35072/quiet-mud-011.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dd97f4202e6/quiet-mud-012.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dd97fe85bb5/quiet-mud-013.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dd9807ecb2a/quiet-mud-014.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dd981312a2b/quiet-mud-015.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dd98204ae73/quiet-mud-016.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dd9830d4810/quiet-mud-017.jpg",
            "https://basefile.akamaized.net/yanagicycle-base-shop/69dd983bba4fb/quiet-mud-018.jpg"
        ];

        var gallery = document.querySelector('.yc-gallery');
        var track = document.getElementById('quietTrack');
        var dotsEl = document.getElementById('quietDots');
        var thumbsEl = document.getElementById('quietThumbs');
        var prevBtn = document.getElementById('quietPrev');
        var nextBtn = document.getElementById('quietNext');

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
            thumb.alt = 'QUIET Mud ' + (i + 1);
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

        var geoImg = document.getElementById('quietGeoImg');
        var modal = document.getElementById('ycModal');
        var modalImg = document.getElementById('ycModalImg');

        if (geoImg && modal && modalImg) {
            geoImg.onclick = function () {
                modalImg.src = this.src;
                modal.style.display = 'flex';
            };
            modal.onclick = function () {
                this.style.display = 'none';
            };
        }

        goTo(0);
    }

    // ==========================================
    // C. ページHTMLデータ
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
        `,
        'quiet-disc': `
            <div class="yc-detail-wrapper yc-detail-wrapper-equal">
                <div class="yc-back-nav"><a href="/about" class="yc-back-btn">← ALL FRAMES</a></div>
                <div class="yc-detail-head"><h1>ALL ROAD BIKE QUIET Disc</h1></div>

                <div class="yc-gallery">
                    <div class="yc-gallery-main">
                        <div class="yc-gallery-main-track" id="quietTrack">
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dce6be3dc14/quiet-disc-001.jpg" alt="QUIET Disc 01"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dce6cb65f88/quiet-disc-002.jpg" alt="QUIET Disc 02"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dce6d5a5d08/quiet-disc-003.jpg" alt="QUIET Disc 03"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dce6deb8e42/quiet-disc-004.jpg" alt="QUIET Disc 04"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dce6e8e1ff4/quiet-disc-005.jpg" alt="QUIET Disc 05"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dce6f2dd773/quiet-disc-006.jpg" alt="QUIET Disc 06"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dce6fcbeb72/quiet-disc-007.jpg" alt="QUIET Disc 07"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dce70647cac/quiet-disc-008.jpg" alt="QUIET Disc 08"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dce70fe8817/quiet-disc-009.jpg" alt="QUIET Disc 09"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dce71b3ea5a/quiet-disc-010.jpg" alt="QUIET Disc 10"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dce7292b4b3/quiet-disc-011.jpg" alt="QUIET Disc 11"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dce73ac2dee/quiet-disc-012.jpg" alt="QUIET Disc 12"></div>
                        </div>
                        <button class="yc-gallery-prev" id="quietPrev" type="button">&#10094;</button>
                        <button class="yc-gallery-next" id="quietNext" type="button">&#10095;</button>
                    </div>
                    <div class="yc-gallery-dots" id="quietDots"></div>
                    <div class="yc-gallery-thumbs" id="quietThumbs"></div>
                </div>

                <div class="yc-detail-main">
                    <div class="yc-description-col">
                        <h2>商品名：QUIET Disc</h2>
                        <p>YANAGI QUIET Discは、タイヤボリューム 700 x 30~35cのミニマルなオールロードバイク。</p>
                        <h3>◆ツーリングに最適な剛性感</h3>
                        <p>TANGE CHAMPION No.2の細身のパイプと、それにあわせた1 1/8"ストレートコラムのカーボンフォーク。長距離ライドの疲労から体を守りつつ、必要な剛性や粘りは充分にあるので、じっくりとペダルを踏めば気持ちよく進みます。</p>
                        <h3>◆長めのホイールベースと低めの重心</h3>
                        <p>通常のロードバイクよりやや長いホイールベース、低いBB位置で、より真っすぐ走り、カーブでは気持ちよくラインをトレースできます。</p>
                        <h3>◆丁度良いタイヤボリューム</h3>
                        <p>距離を延ばすにも楽で、疲労で集中力が落ちてもある程度安心感のある700 x 32c近辺のボリューム。シンプルでソリッドな走りを楽しむことができます。</p>
                        <h3>◆カラーリングはお好みの色をご指定頂けます。</h3>
                    </div>

                    <div class="yc-side-col">
                        <div style="background: #f9f9f9; padding: 30px;">
                            <h3 style="font-size:16px; color:#ED4700; margin-bottom:20px; font-weight:bold;">仕様</h3>
                            <table class="yc-spec-table">
                                <tr><td>使用パイプ</td><td>TANGE Champion No.2</td></tr>
                                <tr><td>ブレーキ</td><td>フラットマウントディスク</td></tr>
                                <tr><td>想定タイヤ幅</td><td>700 x 30～35c</td></tr>
                                <tr><td>ヘッドセット</td><td>EC34</td></tr>
                                <tr><td>シートポスト径</td><td>27.2mm</td></tr>
                                <tr><td>FDクランプ径</td><td>28.6mm</td></tr>
                                <tr><td>車輪固定</td><td>12mmスルーアクスル</td></tr>
                                <tr><td>BB</td><td>68mm JIS</td></tr>
                                <tr><td>フロントフォーク</td><td>カーボン(1 1/8")</td></tr>
                            </table>
                            <p style="font-weight: bold; margin-bottom:5px;">フレーム & フォークセット（単色塗装込み）</p>
                            <div class="yc-price">価格：<span>265,500円</span>（税込￥291,500）</div>
                            <a href="https://thebase.com/inquiry/yanagicycle-base-shop?" class="yc-btn yc-btn-orange">お問い合わせ</a>
                            <p style="font-size: 22px; font-weight: bold; margin-top:20px;">
                                ※販売店からもご注文いただけます。<br>
                                <a href="https://cyclotech.net/wp/" target="_blank" style="font-weight: bold; color: #008AFC;">Cyclotech イチカワ（山口県）</a>
                            </p>
                            <h3 style="font-size:16px; color:#ED4700; margin-top:30px; margin-bottom:15px; font-weight:bold;">ジオメトリ (拡大可)</h3>
                            <img id="quietGeoImg" src="https://basefile.akamaized.net/yanagicycle-base-shop/69dced2e09f8d/quiet-disc-013.jpg" alt="QUIET Disc Geometry" style="width: 100%; cursor: pointer; border: 1px solid #ddd;">
                        </div>
                    </div>
                </div>
            </div>
        `,
        'quiet-mud': `
            <div class="yc-detail-wrapper yc-detail-wrapper-equal">
                <div class="yc-back-nav"><a href="/about" class="yc-back-btn">← ALL FRAMES</a></div>
                <div class="yc-detail-head"><h1>ALL ROAD BIKE QUIET</h1></div>

                <div class="yc-gallery">
                    <div class="yc-gallery-main">
                        <div class="yc-gallery-main-track" id="quietTrack">
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd976ee1b42/quiet-mud-001.jpg" alt="QUIET Mud 01"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd977f9e4c1/quiet-mud-002.jpg" alt="QUIET Mud 02"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd978c13c6b/quiet-mud-003.jpg" alt="QUIET Mud 03"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd979750bde/quiet-mud-004.jpg" alt="QUIET Mud 04"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd97a1f2932/quiet-mud-005.jpg" alt="QUIET Mud 05"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd97ae642d7/quiet-mud-006.jpg" alt="QUIET Mud 06"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd97bcc6179/quiet-mud-007.jpg" alt="QUIET Mud 07"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd97c75e58a/quiet-mud-008.jpg" alt="QUIET Mud 08"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd97d2f01ca/quiet-mud-009.jpg" alt="QUIET Mud 09"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd97e053228/quiet-mud-010.jpg" alt="QUIET Mud 10"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd97ea35072/quiet-mud-011.jpg" alt="QUIET Mud 11"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd97f4202e6/quiet-mud-012.jpg" alt="QUIET Mud 12"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd97fe85bb5/quiet-mud-013.jpg" alt="QUIET Mud 13"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd9807ecb2a/quiet-mud-014.jpg" alt="QUIET Mud 14"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd981312a2b/quiet-mud-015.jpg" alt="QUIET Mud 15"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd98204ae73/quiet-mud-016.jpg" alt="QUIET Mud 16"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd9830d4810/quiet-mud-017.jpg" alt="QUIET Mud 17"></div>
                            <div class="yc-gallery-main-slide"><img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd983bba4fb/quiet-mud-018.jpg" alt="QUIET Mud 18"></div>
                        </div>
                        <button class="yc-gallery-prev" id="quietPrev" type="button">&#10094;</button>
                        <button class="yc-gallery-next" id="quietNext" type="button">&#10095;</button>
                    </div>
                    <div class="yc-gallery-dots" id="quietDots"></div>
                    <div class="yc-gallery-thumbs" id="quietThumbs"></div>
                </div>

                <div class="yc-detail-main">
                    <div class="yc-description-col">
                        <h2>商品名：QUIET</h2>
                        <p>YANAGI QUIETは、タイヤボリューム 700 x 30~35cのオールロードバイク。スポルティーフのようにフルフェンダー装着可能で、クラシカルとも言えるルックス。ありきたりなロードツーリングから一歩踏み込んだルートチョイスが、サイクリングにより深みを持たせます。</p>
                        <h3>◆ツーリングに最適な剛性感</h3>
                        <p>TANGE CHAMPION No.2の細身のパイプと、1" スレッドレスコラムフォーク。<br>過度な剛性は省いて長距離ライドの疲労から体を守り、少々の荒れた路面でも跳ねることなく、とはいえ必要な剛性や粘りは充分あるので、じっくりとペダルを踏めば気持ちよく進みます。</p>
                        <h3>◆長めのホイールベースと低めの重心</h3>
                        <p>通常のロードバイクよりやや長いホイールベース、低いBB位置でより真っすぐ走り、カーブでは気持ちよくラインをトレースできます。</p>
                        <h3>◆丁度良いタイヤボリューム</h3>
                        <p>距離を延ばすにも楽で、疲労で集中力が落ちてもある程度安心感のあるタイヤボリューム。それが700 x 32c近辺だと考えます。グラベルバイクのように太いタイヤには対応せず、700 x 30～35cが入る最低限のクリアランスを確保した設計です。</p>
                        <h3>◆カンチブレーキ、ミニVブレーキ</h3>
                        <p>シンプルで扱いが簡単、トラブルも少ないリムブレーキ。カンチブレーキでも十分な制動力を確保しつつ、しなやかでロングライドでも疲れにくいフレームになります。</p>
                        <h3>◆カラーリングはお好みの色をご指定頂けます。</h3>
                    </div>

                    <div class="yc-side-col">
                        <div style="background: #f9f9f9; padding: 30px;">
                            <h3 style="font-size:16px; color:#ED4700; margin-bottom:20px; font-weight:bold;">仕様</h3>
                            <table class="yc-spec-table">
                                <tr><td>使用パイプ</td><td>TANGE Champion No.2</td></tr>
                                <tr><td>ブレーキ</td><td>カンチブレーキ、Vブレーキ</td></tr>
                                <tr><td>想定タイヤ幅</td><td>700 x 30～35c</td></tr>
                                <tr><td>ヘッドセット</td><td>EC30</td></tr>
                                <tr><td>シートポスト径</td><td>27.2mm</td></tr>
                                <tr><td>FDクランプ径</td><td>28.6mm</td></tr>
                                <tr><td>車輪固定</td><td>9mm, 10mm クイックリリース</td></tr>
                                <tr><td>BB</td><td>68mm JIS</td></tr>
                                <tr><td>フロントフォーク</td><td>1" A-head クロモリフォーク</td></tr>
                            </table>
                            <p style="font-weight: bold; margin-bottom:5px;">フレーム & フォークセット（単色塗装込み）</p>
                            <div class="yc-price">価格：<span>255,000円</span>（税込￥280,500）</div>
                            <p style="font-weight: bold; margin-bottom:5px;">フレーム & フォーク & フロントラックセット<br>（メッキ、単色塗装込み）</p>
                            <div class="yc-price">価格：<span>280,000円</span>（税込￥308,000）</div>
                            <a href="https://thebase.com/inquiry/yanagicycle-base-shop?" class="yc-btn yc-btn-orange">お問い合わせ</a>
                            <p style="font-size: 22px; font-weight: bold; margin-top:20px;">
                                試乗車、お店にありますので乗ってみてください！
                            </p>
                            <img src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd9abc477e1/quiet-mud-020.jpg" alt="QUIET Mud Trial Bike" style="width: 100%; border: 1px solid #ddd;">
                            <br>
                            <h3 style="font-size:16px; color:#ED4700; margin-top:30px; margin-bottom:15px; font-weight:bold;">ジオメトリ (拡大可)</h3>
                            <img id="quietGeoImg" src="https://basefile.akamaized.net/yanagicycle-base-shop/69dd9a692dc39/quiet-mud-019.jpg" alt="QUIET Mud Geometry" style="width: 100%; cursor: pointer; border: 1px solid #ddd;">
                        </div>
                    </div>
                </div>
            </div>
        `
    };

    // ==========================================
    // D. ルーター制御
    // ==========================================
    function router() {
        var root = document.getElementById('yc-router-root');
        if (!root) return;

        var params = new URLSearchParams(window.location.search);
        var pageKey = params.get('p');

        if (pageKey && pages[pageKey]) {
            root.innerHTML = pages[pageKey];

            if (pageKey === 'kazusa') initKazusaGallery();
            if (pageKey === 'quiet-disc') initQuietGallery();
            if (pageKey === 'quiet-mud') initQuietMudGallery();
        } else {
            root.innerHTML = listPage;
        }

        window.scrollTo(0, 0);
    }

    router();
    window.addEventListener('popstate', router);
})();
