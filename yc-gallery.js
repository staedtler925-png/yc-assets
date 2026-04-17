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

            var gallery = document.getElementById('quietDiscGallery');
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

            var gallery = document.getElementById('quietMudGallery');
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

                    <div class="yc-gallery" id="quietDiscGallery">
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

                    <div class="yc-gallery" id="quietMudGallery">
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
            `,
            'custom': `
                <div class="yc-custom-wrapper">
                    <div class="yc-back-nav"><a href="/about" class="yc-back-btn">← ALL FRAMES</a></div>
            
                    <div class="yc-custom-hero">
                        <h1>CUSTOM FRAME</h1>
                        <p>YANAGI QUIETなどのスタンダードモデル以外はこちら。<br>あなたの理想の自転車を聞かせてください。</p>
                    </div>
            
                    <div class="yc-steps">
                        <div class="yc-step">
                            <div class="yc-step-num">❶</div>
                            <div class="yc-step-body">
                                <h2>理想の一台について、お話を聞かせてください。</h2>
                                <p>オーダーメイドは難しく敷居が高いと思われがちですが、専門的な知識は必要ありません。どのようなコンセプト・車種であれば理想の一台になるのかを話し合いましょう。</p>
                                <p class="en">Made-to-order is difficult and seems to be a high threshold, but specialized knowledge is unnecessary. Let's discuss what concept and model would make your ideal bicycle.</p>
                            </div>
                        </div>
            
                        <div class="yc-step">
                            <div class="yc-step-num">❷</div>
                            <div class="yc-step-body">
                                <h2>理想の一台を設計。</h2>
                                <p>CADシステムを使用して理想の一台のための設計をします。設計は体に100％フィット。コンセプトに忠実で「走るフレーム」を設計します。</p>
                                <p class="en">Using a CAD system, we design your ideal bicycle — a frame that fits your body 100% and stays true to the concept.</p>
                            </div>
                        </div>
            
                        <div class="yc-step">
                            <div class="yc-step-num">❸</div>
                            <div class="yc-step-body">
                                <h2>フレームの素材の選定。</h2>
                                <p>フレームビルディングに使用する素材はクロモリ（クロムモリブデン鋼）のチューブ。重量があって丈夫なものから、乗った瞬間その軽さに驚くようなものまで。コンセプトと車種に最適なものを各チューブメーカーより選び出します。</p>
                                <p class="en">The material used for frame building is chromoly tubing. From heavier and durable options to surprisingly lightweight ones — we select the best from each tube manufacturer to match your concept.</p>
                            </div>
                        </div>
            
                        <div class="yc-step">
                            <div class="yc-step-num">❹</div>
                            <div class="yc-step-body">
                                <h2>フレーム製作。</h2>
                                <p>フレームビルダーが丹精を込めて製作します。製作にはある一定期間を要しますので、その間に制作風景を見に来ていただくのも良いかも知れません。製作の経過をご自身の目で見られるのも、オーダーメイドならではです。</p>
                                <p class="en">Our frame builder crafts your frame with great care. Since production takes time, you're welcome to visit and see the work in progress — a unique privilege of ordering custom.</p>
                            </div>
                        </div>
            
                        <div class="yc-step">
                            <div class="yc-step-num">❺</div>
                            <div class="yc-step-body">
                                <h2>ペインティング。</h2>
                                <p>色の選択は無限大。当店にある色見本から選んで頂いても結構ですし、逆にそれをお持ち込みになっても結構です。さらには、イメージを伝えてもらうだけでも。例えばある風景に映えるカラーリング、なんて指定でも面白いかもしれません。</p>
                                <p class="en">The choice of color is infinite. Pick from our samples, bring your own reference, or simply describe an image — even something like "colors that suit a certain landscape" works perfectly.</p>
                            </div>
                        </div>
            
                        <div class="yc-step">
                            <div class="yc-step-num">❻</div>
                            <div class="yc-step-body">
                                <h2>組み付け。</h2>
                                <p>当店はフレーム工房である以前に、数多くの組み付けやカスタム・修理を行ってきた自転車店がベースです。安全に確実に、最高のフィーリングを生み出すブレーキや変速器といったメカ調整。格好良く組み上げるセンス。百戦錬磨のメカニックが組み付けを行います。</p>
                                <p class="en">Before being a frame workshop, we are a bicycle shop with extensive experience in assembly, custom work and repairs. Our seasoned mechanics handle every adjustment with precision and style.</p>
                            </div>
                        </div>
                    </div>
            
                    <div class="yc-custom-price">
                        <h2>価格の目安について</h2>
                        <p class="en">Estimated price</p>
                        <div class="yc-price-num">¥235,000〜（税抜）</div>
                        <p>オリジナルフレーム＆フォークの制作（単色塗装込み）<br>選定パイプ・取付小物・カスタム塗装など、仕様により料金が加算されます。<br>詳しくはお問い合わせください。</p>
                        <p class="en">Production of original frame & fork (including single color painting). Charges are added according to specifications such as selected pipes, mounting accessories, and custom paint. Please inquire for details.</p>
                    </div>
            
                    <div class="yc-custom-cta">
                        <a href="https://thebase.com/inquiry/yanagicycle-base-shop?" class="yc-btn-orange">制作のご相談はこちら</a>
                    </div>
                </div>
            `,
            'price-mod-frame': `
                <div class="yc-price-table-page">
                    <div class="yc-back-nav">
                        <a href="/about" class="yc-back-btn">← ABOUT</a>
                    </div>
            
                    <div class="yc-price-table-hero">
                        <h1>フレーム修理、カスタム工賃表</h1>
                        <p>
                            主にスチール（クロモリ）フレームを中心にカスタム、レストア、改造を可能な範囲で承ります。<br>
                            また遠方の方、フレームをお送りいただくことで対応が可能です。<br>
                            表にない加工もお気軽にお問い合わせください。
                        </p>
                    </div>
            
                    <div class="yc-price-table-wrap">
                        <table class="yc-price-table-scroll">
                            <thead>
                                <tr>
                                    <th>分類</th>
                                    <th>作業内容</th>
                                    <th>価格（税込）</th>
                                    <th>備考</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>小物</td><td>Wレバー台座取り付け（左右ペア）</td><td>￥5,500</td><td></td></tr>
                                <tr><td>小物</td><td>センタースタンド台座取り付け</td><td>￥7,260</td><td></td></tr>
                                <tr><td>小物</td><td>チェーンフック取り付け</td><td>￥3,520</td><td></td></tr>
                                <tr><td>小物</td><td>ポンプペグ取り付け</td><td>￥5,500</td><td></td></tr>
                                <tr><td>小物</td><td>ダボ穴取り付け</td><td>￥1,650</td><td>1箇所につき</td></tr>
                                <tr><td>小物</td><td>アウター受け取り付け</td><td>￥2,200</td><td>1箇所につき</td></tr>
                                <tr><td>小物</td><td>ライト台座取り付け</td><td>￥2,750〜</td><td>形状、難易度による</td></tr>
                                <tr><td>小物</td><td>内装穴</td><td>￥5,500</td><td>1箇所につき。ガイド無し、蓋と穴のみ</td></tr>
            
                                <tr><td>塗装</td><td>フロントフォーク剥離・全塗装</td><td>￥28,600〜</td><td>単色ソリッドカラーの価格。メタリック・パールベース、塗分け等は別途加算</td></tr>
                                <tr><td>塗装</td><td>フレームセット剥離・全塗装</td><td>￥69,300〜</td><td>単色ソリッドカラーの価格。メタリック・パールベース、塗分け等は別途加算</td></tr>
                                <tr><td>塗装</td><td>部分塗装</td><td>￥13,200〜</td><td>2か所まで。色によっては再現不可。</td></tr>
            
                                <tr><td>ブレーキ</td><td>ディスクブレーキ台座取り付け</td><td>￥13,200</td><td>スチールフレーム、インターナショナルスタンダード</td></tr>
                                <tr><td>ブレーキ</td><td>ディスクブレーキ台座取り付け</td><td>￥22,000</td><td>アルミ、補強ブリッジ込み</td></tr>
                                <tr><td>ブレーキ</td><td>フロントフォーク、キャリパーブレーキ穴開け</td><td>￥2,200</td><td></td></tr>
                                <tr><td>ブレーキ</td><td>ディスクブレーキ台座取り付け</td><td>￥16,500</td><td>正爪、スチールフレーム</td></tr>
                                <tr><td>ブレーキ</td><td>カンチ、Vブレーキ台座取り付け</td><td>￥12,100</td><td>片側</td></tr>
                                <tr><td>ブレーキ</td><td>キャリパーブレーキブリッジ取り付け</td><td>￥12,100</td><td></td></tr>
                                <tr><td>ブレーキ</td><td>センタープル台座取り付け</td><td>￥12,100</td><td>片側、ブレーキバネ引っ掛け穴直付け可</td></tr>
            
                                <tr><td>フォーク</td><td>コラムねじ山修正</td><td>￥2,200</td><td></td></tr>
                                <tr><td>フォーク</td><td>フォークコラム溝切</td><td>￥3,960</td><td></td></tr>
                                <tr><td>フォーク</td><td>フォークコラム延長（スレッドレス）</td><td>￥7,040</td><td></td></tr>
                                <tr><td>フォーク</td><td>フォークコラム延長（スレッド）</td><td>￥9,240</td><td></td></tr>
            
                                <tr><td>パイプ差し替え</td><td>チェーンステー差し替え</td><td>￥33,000〜</td><td>1本につき。パイプ種類、難易度により変動</td></tr>
                                <tr><td>パイプ差し替え</td><td>メインパイプ差し替え</td><td>￥33,000〜</td><td>1本につき。パイプ種類、難易度により変動</td></tr>
                                <tr><td>パイプ差し替え</td><td>シートステー差し替え</td><td>￥22,000〜</td><td>1本につき。パイプ種類、難易度により変動</td></tr>
                                <tr><td>パイプ差し替え</td><td>ヘッドパイプ差し替え</td><td>￥33,000〜</td><td>例、1インチ用パイプ→オーバーサイズあるいは44mmヘッドなど</td></tr>
            
                                <tr><td>カスタムラック、ステム</td><td>リアラック製作（大サイズ、メッキ）</td><td>￥44,000〜</td><td></td></tr>
                                <tr><td>カスタムラック、ステム</td><td>ステム製作（フィレット仕上げ、研磨、メッキ）</td><td>￥33,000〜</td><td></td></tr>
                                <tr><td>カスタムラック、ステム</td><td>ステム製作（フィレット仕上げ、塗装込み）</td><td>￥33,000〜</td><td></td></tr>
                                <tr><td>カスタムラック、ステム</td><td>フロントラック製作（小サイズ、メッキ）</td><td>￥27,500〜</td><td></td></tr>
            
                                <tr><td>エンド</td><td>バック広げ</td><td>￥4,400</td><td></td></tr>
                                <tr><td>エンド</td><td>フォークエンド平行だし</td><td>￥2,200</td><td></td></tr>
                                <tr><td>エンド</td><td>エンドスロット拡張</td><td>￥4,400</td><td>例：フォークエンド8mm→9mm</td></tr>
                                <tr><td>エンド</td><td>リアエンド差し替え</td><td>￥33,000〜</td><td></td></tr>
            
                                <tr><td>アライメント</td><td>フロントフォーク精度チェック、修正</td><td>￥3,300〜</td><td>度合い、難易度により変動</td></tr>
                                <tr><td>アライメント</td><td>フレーム精度チェック、修正</td><td>￥4,400〜</td><td>度合い、難易度により変動</td></tr>
            
                                <tr><td>その他</td><td>パイプ凹みのロー埋め（小）</td><td>￥4,400</td><td>軽量パイプは不可</td></tr>
                                <tr><td>その他</td><td>パイプ凹みのロー埋め（中）</td><td>￥5,500</td><td>軽量パイプは不可</td></tr>
                                <tr><td>その他</td><td>パイプ凹みのロー埋め（大）</td><td>￥6,600</td><td>軽量パイプは不可</td></tr>
                                <tr><td>その他</td><td>小物、ブレーキ台座など除去</td><td>￥1,650〜</td><td>一箇所につき。サイズ、面積により変動</td></tr>
                            </tbody>
                        </table>
                    </div>
            
                    <div class="yc-price-table-cta">
                        <a href="https://thebase.com/inquiry/yanagicycle-base-shop?" class="yc-btn yc-btn-orange">お問い合わせ</a>
                    </div>
                </div>
            `,
            'price-mod-bike': `
                <div class="yc-price-table-page">
                    <div class="yc-back-nav">
                        <a href="/about" class="yc-back-btn">← ABOUT</a>
                    </div>
            
                    <div class="yc-price-table-hero">
                        <h1>自転車修理、カスタム工賃表</h1>
                        <p>
                            ロードバイクなどのスポーツ車と、シティサイクル（ママチャリ）とでは<br>
                            作業工数などが違いますので価格表を分けています。<br>
                            表にない修理、カスタムもお気軽にお尋ねください。
                        </p>
                    </div>
            
                    <div class="yc-price-table-section-title sport">ロード、クロスバイク、ツーリング車などのスポーツ車</div>
                    <div class="yc-price-table-notice">※ 価格には部品代金は含まれません。</div>
            
                    <div class="yc-price-table-wrap">
                        <table class="yc-price-table-scroll yc-price-table-scroll-bike yc-price-table-scroll-bike-sport">
                            <thead>
                                <tr>
                                    <th>分類</th>
                                    <th>作業内容</th>
                                    <th>価格（税込）</th>
                                    <th>備考</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>組み付け等</td><td>組み付け</td><td>￥21,780</td><td>フレームお買い上げ、再塗装、パーツをこちらで用意した場合</td></tr>
                                <tr><td>組み付け等</td><td>組み付け</td><td>￥36,300</td><td>主にお持ち込みの場合</td></tr>
                                <tr><td>組み付け等</td><td>ばらし</td><td>￥12,100</td><td></td></tr>
                                <tr><td>組み付け等</td><td>組み付け</td><td>￥44,000</td><td>ビンテージパーツが主の場合</td></tr>
            
                                <tr><td>ホイール</td><td>ハブグリスアップ（フロント）</td><td>￥3,300</td><td>簡易清掃、ガタ取り含む</td></tr>
                                <tr><td>ホイール</td><td>スポーク交換（フロント）</td><td>￥2,200〜</td><td>スポーク一本につき。2本目以降は＋￥400/1箇所</td></tr>
                                <tr><td>ホイール</td><td>スポーク交換（リア）</td><td>￥3,300〜</td><td>スポーク一本につき。2本目以降は＋￥400/1箇所</td></tr>
                                <tr><td>ホイール</td><td>振れ取り</td><td>￥1,100〜</td><td>度合いに応じて加算</td></tr>
                                <tr><td>ホイール</td><td>ホイール組</td><td>￥7,700</td><td>リム、ハブを当店でお買い上げの場合</td></tr>
                                <tr><td>ホイール</td><td>ハブグリスアップ（リア）</td><td>￥4,400</td><td>簡易清掃、ガタ取り含む</td></tr>
                                <tr><td>ホイール</td><td>ホイール組</td><td>￥8,800</td><td>リム、ハブをお持ち込みの場合</td></tr>
            
                                <tr><td>ペダル</td><td>ペダル交換</td><td>￥1,100</td><td></td></tr>
            
                                <tr><td>ヘッドパーツ</td><td>JIS → ITA化</td><td>￥6,600</td><td>1インチ ITAヘッドセットが入るようにヘッドチューブと下玉押し部を切削</td></tr>
                                <tr><td>ヘッドパーツ</td><td>ヘッドベアリング玉当たり調整</td><td>￥880</td><td></td></tr>
                                <tr><td>ヘッドパーツ</td><td>下玉押し圧入のみ</td><td>￥1,100</td><td></td></tr>
                                <tr><td>ヘッドパーツ</td><td>ヘッドリーマー、フェイシング</td><td>￥3,300</td><td></td></tr>
                                <tr><td>ヘッドパーツ</td><td>上下カップ、下玉押し交換</td><td>￥3,520</td><td></td></tr>
            
                                <tr><td>ブレーキ</td><td>調整のみ</td><td>￥550〜</td><td></td></tr>
                                <tr><td>ブレーキ</td><td>ブレーキレバー（STI）交換</td><td>￥3,520</td><td>片側、バーテープ・グリップなど付け直し含む</td></tr>
                                <tr><td>ブレーキ</td><td>ブレーキ本体交換</td><td>￥2,640</td><td>片側、調整含む</td></tr>
                                <tr><td>ブレーキ</td><td>ブレーキシュー交換</td><td>￥1,100</td><td>片側、調整含む</td></tr>
                                <tr><td>ブレーキ</td><td>ブレーキワイヤー交換</td><td>￥2,200</td><td>片側、調整含む</td></tr>
            
                                <tr><td>フォーク</td><td>コラムカット</td><td>￥1,760</td><td></td></tr>
                                <tr><td>フォーク</td><td>クラウンレースカット</td><td>￥1,320</td><td></td></tr>
                                <tr><td>フォーク</td><td>スターファングルナット圧入</td><td>￥880</td><td></td></tr>
                                <tr><td>フォーク</td><td>フロントフォーク交換</td><td>￥5,280</td><td>下玉押し外し圧入、ブレーキ移植、コラムカット</td></tr>
            
                                <tr><td>フェンダー</td><td>イージーrinkoフェンダー加工</td><td>￥5,500</td><td></td></tr>
                                <tr><td>フェンダー</td><td>フェンダー取り付け</td><td>￥6,600</td><td>片側、本所などの泥除け本体に穴開け加工が必要なタイプ</td></tr>
                                <tr><td>フェンダー</td><td>フェンダー取り付け</td><td>￥2,200</td><td>片側、泥除け本体に穴開け加工など必要のないタイプ</td></tr>
                                <tr><td>フェンダー</td><td>フェンダー分割加工</td><td>￥8,000</td><td>本所製フェンダーに限る</td></tr>
            
                                <tr><td>ハンドル</td><td>ドロップバー交換</td><td>￥4,400</td><td>レバーの外し取付、バーテープ巻き直し含む</td></tr>
                                <tr><td>ハンドル</td><td>フラットバー交換</td><td>￥3,520</td><td>グリップ、レバー類の外し取付含む</td></tr>
                                <tr><td>ハンドル</td><td>グリップ交換</td><td>￥1,100</td><td></td></tr>
                                <tr><td>ハンドル</td><td>バーテープ交換</td><td>￥1,760</td><td></td></tr>
            
                                <tr><td>ディスクブレーキ</td><td>ブレーキキャリパー交換（機械）</td><td>￥3,300</td><td>片側、調整含む</td></tr>
                                <tr><td>ディスクブレーキ</td><td>ローター交換</td><td>￥1,100</td><td></td></tr>
                                <tr><td>ディスクブレーキ</td><td>キャリパー・ホース交換（油圧）</td><td>￥6,600</td><td>片側、フルード入れ替え、調整込み（ハンドルやフレームの内装は加算）</td></tr>
                                <tr><td>ディスクブレーキ</td><td>フルード交換</td><td>￥4,400</td><td></td></tr>
                                <tr><td>ディスクブレーキ</td><td>ブレーキレバー交換（油圧）</td><td>￥6,600</td><td>片側、フルード・グリップバーテープ交換含む</td></tr>
                                <tr><td>ディスクブレーキ</td><td>パッド交換</td><td>￥2,200</td><td>片側、調整込み</td></tr>
            
                                <tr><td>タイヤ、チューブ</td><td>チューブレスレディタイヤ交換</td><td>￥3,300</td><td>シーラント除去、シーラント注入含む</td></tr>
                                <tr><td>タイヤ、チューブ</td><td>チューブラータイヤ交換</td><td>￥3,300</td><td>古いセメントなど剥がす場合は別途</td></tr>
                                <tr><td>タイヤ、チューブ</td><td>タイヤ、チューブ交換</td><td>￥1,320</td><td></td></tr>
                                <tr><td>タイヤ、チューブ</td><td>パンク修理</td><td>￥1,300</td><td>パッチ1箇所につき。以降2箇所目からは＋￥400/1箇所</td></tr>
            
                                <tr><td>ステム</td><td>ステム交換（オープンタイプ）</td><td>￥1,760</td><td></td></tr>
                                <tr><td>ステム</td><td>ステム交換（クローズドタイプ）</td><td>￥4,400</td><td>レバーの外し取付、バーテープ巻き直し含む</td></tr>
            
                                <tr><td>スタンド</td><td>キックスタンド取り付け</td><td>￥1,100</td><td>簡易タイプ</td></tr>
            
                                <tr><td>シフト</td><td>変速器交換</td><td>￥3,300</td><td>調整込み</td></tr>
                                <tr><td>シフト</td><td>ディレイラーハンガー修正</td><td>￥2,200〜</td><td>度合いに応じて加算</td></tr>
                                <tr><td>シフト</td><td>変速調整</td><td>￥1,100〜</td><td></td></tr>
                                <tr><td>シフト</td><td>シフトワイヤー交換</td><td>￥2,200</td><td></td></tr>
                                <tr><td>シフト</td><td>シフト（STI）レバー交換</td><td>￥5,500</td><td>片側、バーテープ・グリップなど付け直し含む</td></tr>
            
                                <tr><td>サドル、シート</td><td>シートリーマーがけ</td><td>￥3,300〜</td><td>拡張などは度合いに応じて加算</td></tr>
                                <tr><td>サドル、シート</td><td>サドル交換</td><td>￥880</td><td></td></tr>
                                <tr><td>サドル、シート</td><td>シートポスト交換</td><td>￥1,430</td><td>サドル交換含む</td></tr>
            
                                <tr><td>サスペンション</td><td>フロントサスペンションOH</td><td>￥11,000</td><td>基本工賃、消耗品や交換部品は別途</td></tr>
            
                                <tr><td>ギア、チェーン</td><td>チェーン交換</td><td>￥2,200</td><td></td></tr>
                                <tr><td>ギア、チェーン</td><td>スプロケット交換</td><td>￥1,320</td><td></td></tr>
                                <tr><td>ギア、チェーン</td><td>チェーンリング交換</td><td>￥2,200</td><td></td></tr>
                                <tr><td>ギア、チェーン</td><td>クランク交換</td><td>￥3,300</td><td></td></tr>
            
                                <tr><td>オーバーホール、点検メニュー</td><td>自転車洗浄</td><td>￥5,500〜</td><td>水洗いの上、駆動・ブレーキ周り清掃（部品の脱着無し）。汚れがひどい場合は別途オーバーホールメニューとなります。</td></tr>
                                <tr><td>オーバーホール、点検メニュー</td><td>駆動系洗浄</td><td>￥6,600</td><td>チェーンリング、ディレイラー、スプロケット、チェーンをディグリーザーで洗浄します。汚れがひどい場合に有効です。</td></tr>
                                <tr><td>オーバーホール、点検メニュー</td><td>フルオーバーホール</td><td>￥49,500</td><td>全てのパーツを最小単位まで分解洗浄、パーツ交換調整費用、グリス・オイルアップ、ホイール振れ取り等 ※機械式ブレーキ</td></tr>
                                <tr><td>オーバーホール、点検メニュー</td><td>クイック点検</td><td>￥3,300</td><td>各ボルトねじ増し締め、部品交換を伴わない変速機やブレーキの調整、注油、各部点検など。</td></tr>
            
                                <tr><td>BB</td><td>BB交換</td><td>￥4,400</td><td>クランク外し、付け直し含む</td></tr>
                                <tr><td>BB</td><td>BBシェルタッピング</td><td>￥4,400</td><td>BSA, T47</td></tr>
                            </tbody>
                        </table>
                    </div>
            
                    <div class="yc-price-table-section-title city">シティサイクル（ままちゃり）</div>
                    <div class="yc-price-table-notice">※ 価格には部品代金は含まれません。</div>
            
                    <div class="yc-price-table-wrap yc-price-table-wrap-city">
                        <table class="yc-price-table-scroll yc-price-table-scroll-bike yc-price-table-scroll-bike-city">
                            <thead>
                                <tr>
                                    <th>分類</th>
                                    <th>作業内容</th>
                                    <th>価格（税込）</th>
                                    <th>備考</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>鍵</td><td>ワイヤ錠切断</td><td>￥550</td><td></td></tr>
                                <tr><td>鍵</td><td>リング錠切断、交換</td><td>￥1,100</td><td></td></tr>
            
                                <tr><td>荷台</td><td>チャイルドシート取り付け（前）</td><td>￥2,640</td><td></td></tr>
                                <tr><td>荷台</td><td>チャイルドシート取り付け（後）</td><td>￥3,520</td><td></td></tr>
            
                                <tr><td>変速</td><td>変速調整</td><td>￥550</td><td></td></tr>
                                <tr><td>変速</td><td>変速ワイヤ交換</td><td>￥1,760</td><td></td></tr>
            
                                <tr><td>ライト</td><td>ライト交換</td><td>￥880</td><td></td></tr>
                                <tr><td>ライト</td><td>球切れ交換</td><td>￥550</td><td></td></tr>
            
                                <tr><td>ホイール</td><td>スポーク交換（後ホイール脱着あり）</td><td>￥4,840〜</td><td>スポーク一本につき。2本目以降は＋￥400/1箇所</td></tr>
                                <tr><td>ホイール</td><td>フロントホイール交換</td><td>￥1,760</td><td></td></tr>
                                <tr><td>ホイール</td><td>振れ取り（後ホイール脱着あり）</td><td>￥3,520〜</td><td>度合いに応じて加算</td></tr>
                                <tr><td>ホイール</td><td>スポーク交換（前ホイール脱着あり）</td><td>￥3,740〜</td><td>スポーク一本につき。2本目以降は＋￥400/1箇所</td></tr>
                                <tr><td>ホイール</td><td>振れ取り（前ホイール脱着あり）</td><td>￥2,640〜</td><td>度合いに応じて加算</td></tr>
                                <tr><td>ホイール</td><td>後ホイール組み換え</td><td>￥7,700</td><td></td></tr>
                                <tr><td>ホイール</td><td>リアホイール交換</td><td>￥3,520</td><td></td></tr>
                                <tr><td>ホイール</td><td>ガタ調整、ベアリング交換（後ホイール）</td><td>￥3,520〜</td><td></td></tr>
                                <tr><td>ホイール</td><td>振れ取り（ホイール脱着せず）</td><td>￥1,100〜</td><td>度合いに応じて加算</td></tr>
                                <tr><td>ホイール</td><td>前ホイール組み換え</td><td>￥6,600</td><td></td></tr>
                                <tr><td>ホイール</td><td>ニップル交換（ホイール脱着せず）</td><td>￥1,760</td><td></td></tr>
                                <tr><td>ホイール</td><td>スポーク交換（ホイール脱着せず）</td><td>￥2,200〜</td><td>スポーク一本につき。2本目以降は＋￥400/1箇所</td></tr>
                                <tr><td>ホイール</td><td>ガタ調整、ベアリング交換（前ホイール）</td><td>￥1,760</td><td></td></tr>
            
                                <tr><td>ペダル</td><td>ペダル交換</td><td>￥880</td><td></td></tr>
            
                                <tr><td>ブレーキ</td><td>後ろブレーキ交換（バンドブレーキ等）</td><td>￥3,520</td><td></td></tr>
                                <tr><td>ブレーキ</td><td>ローラーブレーキグリス注入</td><td>￥330</td><td></td></tr>
                                <tr><td>ブレーキ</td><td>前ブレーキ交換（キャリパー）</td><td>￥1,760</td><td></td></tr>
                                <tr><td>ブレーキ</td><td>ブレーキシュー交換</td><td>￥1,100</td><td></td></tr>
                                <tr><td>ブレーキ</td><td>ブレーキ調整</td><td>￥550</td><td></td></tr>
                                <tr><td>ブレーキ</td><td>ブレーキワイヤ交換</td><td>￥1,320</td><td></td></tr>
            
                                <tr><td>チェーン</td><td>注油</td><td>￥100</td><td></td></tr>
                                <tr><td>チェーン</td><td>チェーン交換（フルカバー）</td><td>￥3,520</td><td></td></tr>
                                <tr><td>チェーン</td><td>チェーン交換（ハーフケース）</td><td>￥2,640</td><td></td></tr>
                                <tr><td>チェーン</td><td>チェーン張り調整</td><td>￥550</td><td></td></tr>
            
                                <tr><td>タイヤ、チューブ</td><td>パンク修理</td><td>￥1,300</td><td>パッチ1箇所につき。以降2箇所目からは＋￥400/1箇所</td></tr>
                                <tr><td>タイヤ、チューブ</td><td>虫ゴム交換</td><td>￥200</td><td></td></tr>
                                <tr><td>タイヤ、チューブ</td><td>後輪タイヤ、チューブ交換</td><td>￥3,300</td><td>表示価格は工賃。タイヤ代は別途</td></tr>
                                <tr><td>タイヤ、チューブ</td><td>水調べ</td><td>￥1,000</td><td></td></tr>
                                <tr><td>タイヤ、チューブ</td><td>前輪タイヤ、チューブ交換</td><td>￥2,200</td><td>表示価格は工賃。タイヤ代は別途</td></tr>
            
                                <tr><td>スタンド</td><td>バネ交換</td><td>￥550</td><td></td></tr>
                                <tr><td>スタンド</td><td>両立スタンド</td><td>￥1,320</td><td></td></tr>
                                <tr><td>スタンド</td><td>片足スタンド</td><td>￥880</td><td></td></tr>
            
                                <tr><td>サドル</td><td>サドル交換</td><td>￥550</td><td></td></tr>
            
                                <tr><td>かご</td><td>かご交換</td><td>￥1,320</td><td></td></tr>
                                <tr><td>かご</td><td>カゴ足交換</td><td>￥2,640</td><td>部品代込み</td></tr>
                                <tr><td>かご</td><td>ねじ取り付け</td><td>￥220</td><td>ねじ一本につき。2本目以降は＋￥100/1箇所</td></tr>
            
                                <tr><td>BB</td><td>ガタ調整</td><td>￥1,320〜</td><td>クランク脱着要の場合は加算</td></tr>
                                <tr><td>BB</td><td>BB交換</td><td>￥5,280</td><td>クランク脱着含む</td></tr>
                            </tbody>
                        </table>
                    </div>
            
                    <div class="yc-price-table-cta">
                        <a href="https://thebase.com/inquiry/yanagicycle-base-shop?" class="yc-btn yc-btn-orange">お問い合わせ</a>
                    </div>
                </div>
            `,
        };


    // ==========================================
    // Works data
    // ==========================================
    const worksData = [
        {
            slug: 'quiet-for-i',
            title: 'QUIET for I',
            category: 'Works',
            thumb: 'https://basefile.akamaized.net/yanagicycle-base-shop/69e1793b531f3/QUIET_for_I-01.jpg',
            summary: '制作事例ページです。',
            images: [
            'https://basefile.akamaized.net/yanagicycle-base-shop/69e1793b531f3/QUIET_for_I-01.jpg',
            'https://basefile.akamaized.net/yanagicycle-base-shop/69e17a45cff79/QUIET_for_I-02.jpg',
            'https://basefile.akamaized.net/yanagicycle-base-shop/69e17a54530df/QUIET_for_I-03.jpg',
            'https://basefile.akamaized.net/yanagicycle-base-shop/69e185d302dc5/QUIET_for_I-04.jpg',
            'https://basefile.akamaized.net/yanagicycle-base-shop/69e185dd298d9/QUIET_for_I-05.jpg',
            'https://basefile.akamaized.net/yanagicycle-base-shop/69e185ef1531d/QUIET_for_I-06.jpg',
            'https://basefile.akamaized.net/yanagicycle-base-shop/69e185f7d7cdc/QUIET_for_I-07.jpg',
            'https://basefile.akamaized.net/yanagicycle-base-shop/69e18600d359b/QUIET_for_I-08.jpg'
            ],
            /*
            body: `
                <p>制作事例の詳細をここに追加予定です。</p>
            `
            */
            body: ''
        },
        {
            slug: 'cozmo',
            title: 'Cozmo',
            category: 'Works',
            thumb: 'https://basefile.akamaized.net/yanagicycle-base-shop/69e1867a02f50/Cozmo-01.jpg',
            summary: '制作事例ページです。',
            images: [
            'https://basefile.akamaized.net/yanagicycle-base-shop/69e1867a02f50/Cozmo-01.jpg',
            'https://basefile.akamaized.net/yanagicycle-base-shop/69e1868721809/Cozmo-02.jpg',
            'https://basefile.akamaized.net/yanagicycle-base-shop/69e1869d47cfd/Cozmo-03.jpg',
            'https://basefile.akamaized.net/yanagicycle-base-shop/69e186a7b54d5/Cozmo-04.jpg',
            'https://basefile.akamaized.net/yanagicycle-base-shop/69e186b0a3cc5/Cozmo-05.jpg',
            'https://basefile.akamaized.net/yanagicycle-base-shop/69e186ba0e1f9/Cozmo-06.jpg',
            'https://basefile.akamaized.net/yanagicycle-base-shop/69e186c25908b/Cozmo-07.jpg'
            ],
            /*
            body: `
                <p>制作事例の詳細をここに追加予定です。</p>
            `
            */
            body: ''
        },
        {
            slug: '650b-rando-for-a',
            title: '650B Rando for A',
            category: 'Works',
            thumb: '',
            summary: '制作事例ページです。',
            images: [],
            body: ''
        },
        {
            slug: 'commuter-for-m',
            title: 'Commuter for M',
            category: 'Works',
            thumb: '',
            summary: '制作事例ページです。',
            images: [],
            body: ''
        },
        {
            slug: '853-road-for-re-tokyo',
            title: '853 Road for RE Tokyo',
            category: 'Works',
            thumb: '',
            summary: '制作事例ページです。',
            images: [],
            body: ''
        },
        {
            slug: 'quiet-for-n',
            title: 'QUIET for N',
            category: 'Works',
            thumb: '',
            summary: '制作事例ページです。',
            images: [],
            body: ''
        },
        {
            slug: 'adventure-bike-for-m',
            title: 'Adventure Bike for M',
            category: 'Works',
            thumb: '',
            summary: '制作事例ページです。',
            images: [],
            body: ''
        },
        {
            slug: 'hunter-for-i',
            title: 'Hunter for I',
            category: 'Works',
            thumb: '',
            summary: '制作事例ページです。',
            images: [],
            body: ''
        },
        {
            slug: 'commuter-for-y',
            title: 'Commuter for Y',
            category: 'Works',
            thumb: '',
            summary: '制作事例ページです。',
            images: [],
            body: ''
        },
        {
            slug: '6back-tourer-for-t',
            title: '6back Tourer for T',
            category: 'Works',
            thumb: 'https://basefile.akamaized.net/yanagicycle-base-shop/69e18705df430/6back_Tourer_for_T-01.jpg',
            summary: '制作事例ページです。',
            images: [
            'https://basefile.akamaized.net/yanagicycle-base-shop/69e18705df430/6back_Tourer_for_T-01.jpg',
            'https://basefile.akamaized.net/yanagicycle-base-shop/69e1871bc8e9a/6back_Tourer_for_T-02.jpg',
            'https://basefile.akamaized.net/yanagicycle-base-shop/69e18724a550e/6back_Tourer_for_T-03.jpg',
            'https://basefile.akamaized.net/yanagicycle-base-shop/69e18733df101/6back_Tourer_for_T-04.jpg',
            'https://basefile.akamaized.net/yanagicycle-base-shop/69e1873c56d0e/6back_Tourer_for_T-05.jpg',
            'https://basefile.akamaized.net/yanagicycle-base-shop/69e187467d734/6back_Tourer_for_T-06.jpg',
            'https://basefile.akamaized.net/yanagicycle-base-shop/69e187518111b/6back_Tourer_for_T-07.jpg',
            'https://basefile.akamaized.net/yanagicycle-base-shop/69e1875a572b8/6back_Tourer_for_T-08.jpg',
            'https://basefile.akamaized.net/yanagicycle-base-shop/69e187647c68a/6back_Tourer_for_T-09.jpg',
            'https://basefile.akamaized.net/yanagicycle-base-shop/69e1876dad7e3/6back_Tourer_for_T-10.jpg'
            ],
            body: ''
        },
        {
            slug: '700c-mixte-for-s-1',
            title: '700c Mixte for S',
            category: 'Works',
            thumb: '',
            summary: '制作事例ページです。',
            images: [],
            body: ''
        },
        {
            slug: 'adventure-bike-for-i',
            title: 'Adventure Bike for I',
            category: 'Works',
            thumb: '',
            summary: '制作事例ページです。',
            images: [],
            body: ''
        },
        {
            slug: 'gravel-bike-for-n',
            title: 'Gravel Bike for N',
            category: 'Works',
            thumb: '',
            summary: '制作事例ページです。',
            images: [],
            body: ''
        },
        {
            slug: '700c-mixte-for-s-2',
            title: '700c Mixte for S',
            category: 'Works',
            thumb: '',
            summary: '制作事例ページです。',
            images: [],
            body: ''
        },
        {
            slug: '700c-mixte-for-s-3',
            title: '700c Mixte for S',
            category: 'Works',
            thumb: '',
            summary: '制作事例ページです。',
            images: [],
            body: ''
        },
        {
            slug: 'commuter-for-i',
            title: 'Commuter for I',
            category: 'Works',
            thumb: '',
            summary: '制作事例ページです。',
            images: [],
            body: ''
        },
        {
            slug: 'quiet-disc-for-s',
            title: 'Quiet Disc for S',
            category: 'Works',
            thumb: '',
            summary: '制作事例ページです。',
            images: [],
            body: ''
        },
        {
            slug: 'kokuo',
            title: 'Kokuo',
            category: 'Works',
            thumb: '',
            summary: '制作事例ページです。',
            images: [],
            body: ''
        }
    ];


    // ==========================================
    // Works helpers
    // ==========================================
    function getWorkBySlug(slug) {
        return worksData.find(function (item) {
            return item.slug === slug;
        });
    }

    function renderWorksList() {
        var cards = worksData.map(function (item) {
            var categoryHtml = item.category
                ? `<span class="yc-works-card-category">${item.category}</span>`
                : '';

            var thumbSrc = item.thumb || 'https://placehold.co/900x600?text=WORKS';

            return `
                <article class="yc-works-card">
                    <a href="/about?p=works-${item.slug}" class="yc-works-card-link">
                        <div class="yc-works-card-thumb">
                            <img src="${thumbSrc}" alt="${item.title}">
                        </div>
                        <div class="yc-works-card-body">
                            <div class="yc-works-card-meta">
                                ${categoryHtml}
                            </div>
                            <h2>${item.title}</h2>
                            <p>${item.summary}</p>
                            <span class="yc-works-card-more">詳細を見る</span>
                        </div>
                    </a>
                </article>
            `;
        }).join('');

        return `
            <div class="yc-works-page">
                <div class="yc-back-nav">
                    <a href="/about" class="yc-back-btn">← ABOUT</a>
                </div>

                <div class="yc-works-hero">
                    <h1>制作事例</h1>
                    <p>
                        これまで製作したフレームや完成車の事例です。<br>
                        仕様や用途、雰囲気の参考としてご覧ください。
                    </p>
                </div>

                <div class="yc-works-grid">
                    ${cards}
                </div>
            </div>
        `;
    }

    function renderWorksDetail(slug) {
        var item = getWorkBySlug(slug);

        if (!item) {
            return `
                <div class="yc-works-page">
                    <div class="yc-back-nav">
                        <a href="/about?p=works" class="yc-back-btn">← WORKS</a>
                    </div>
                    <div class="yc-works-empty">
                        <h1>制作事例が見つかりませんでした</h1>
                    </div>
                </div>
            `;
        }

        var slides = item.images.map(function (src, i) {
            return `
                <div class="yc-gallery-main-slide">
                    <img src="${src}" alt="${item.title} ${i + 1}">
                </div>
            `;
        }).join('');

        var bodyHtml = item.body ? item.body : '<p>詳細は準備中です。</p>';

        return `
            <div class="yc-works-detail-page">
                <div class="yc-back-nav">
                    <a href="/about?p=works" class="yc-back-btn">← WORKS</a>
                </div>

                <div class="yc-detail-head">
                    <h1>${item.title}</h1>
                </div>

                ${
                    item.images.length
                        ? `
                        <div class="yc-gallery yc-works-gallery" id="worksGallery-${item.slug}">
                            <div class="yc-gallery-main">
                                <div class="yc-gallery-main-track" id="worksTrack-${item.slug}">
                                    ${slides}
                                </div>
                                <button class="yc-gallery-prev" id="worksPrev-${item.slug}" type="button">&#10094;</button>
                                <button class="yc-gallery-next" id="worksNext-${item.slug}" type="button">&#10095;</button>
                            </div>
                            <div class="yc-gallery-dots" id="worksDots-${item.slug}"></div>
                            <div class="yc-gallery-thumbs" id="worksThumbs-${item.slug}"></div>
                        </div>
                        `
                        : ''
                }

                <div class="yc-works-detail-main">
                    <div class="yc-works-detail-content">
                        <div class="yc-works-detail-meta">
                            <span class="yc-works-card-category">${item.category}</span>
                        </div>
                        ${bodyHtml}
                    </div>
                </div>
            </div>
        `;
    }

    function initWorksGallery(slug) {
        var item = getWorkBySlug(slug);
        if (!item) return;

        var gallery = document.getElementById('worksGallery-' + slug);
        var track = document.getElementById('worksTrack-' + slug);
        var dotsEl = document.getElementById('worksDots-' + slug);
        var thumbsEl = document.getElementById('worksThumbs-' + slug);
        var prevBtn = document.getElementById('worksPrev-' + slug);
        var nextBtn = document.getElementById('worksNext-' + slug);

        if (!gallery || !track || !dotsEl || !thumbsEl || !prevBtn || !nextBtn) return;
        if (gallery.dataset.ycInitialized === 'true') return;

        gallery.dataset.ycInitialized = 'true';

        var current = 0;
        var images = item.images;

        dotsEl.innerHTML = '';
        thumbsEl.innerHTML = '';

        images.forEach(function (src, i) {
            var btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'yc-gallery-dot' + (i === 0 ? ' is-active' : '');
            btn.addEventListener('click', function () { goTo(i); });
            dotsEl.appendChild(btn);

            var thumb = document.createElement('img');
            thumb.src = src;
            thumb.alt = item.title + ' ' + (i + 1);
            thumb.className = 'yc-gallery-thumb' + (i === 0 ? ' is-active' : '');
            thumb.addEventListener('click', function () { goTo(i); });
            thumbsEl.appendChild(thumb);
        });

        function goTo(n) {
            current = (n + images.length) % images.length;
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
        // D. ルーター制御
        // ==========================================
        function router() {
            var root = document.getElementById('yc-router-root');
            if (!root) return;

            var params = new URLSearchParams(window.location.search);
            var pageKey = params.get('p');

            if (pageKey === 'works') {
                root.innerHTML = renderWorksList();
            } else if (pageKey && pageKey.indexOf('works-') === 0) {
                var slug = pageKey.replace('works-', '');
                root.innerHTML = renderWorksDetail(slug);
                initWorksGallery(slug);
            } else if (pageKey && pages[pageKey]) {
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
