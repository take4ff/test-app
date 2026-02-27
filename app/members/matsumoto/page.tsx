import Link from "next/link";

export default function MatsumotoProfile() {
    return (
        <div className="profile-container">
            <Link href="/" className="back-link">
                ← メンバー一覧に戻る
            </Link>

            <div className="profile-header animate-in">
                <div className="profile-avatar" style={{ background: "#a855f7" }}>
                    {/* ここを好きな絵文字に変えてね！ */}
                    🎮
                </div>
                <h1 className="profile-name">
                    {/* ここに自分の名前を入れてね！ */}
                    Matsumoto
                </h1>
                <p className="profile-tagline">
                    {/* ひとことコメントを書いてね！ */}
                    よろしくお願いします！
                </p>
            </div>

            <div className="profile-section animate-in animate-delay-1">
                <h2>🙋 自己紹介</h2>
                <p>
                    {/* 自己紹介を自由に書いてね！ */}
                    こんにちは！松本です。ハッカソン頑張ります！
                </p>
            </div>

            <div className="profile-section animate-in animate-delay-2">
                <h2>🛠️ スキル・興味</h2>
                <div className="tag-list">
                    {/* 自分のスキルや興味のあるものを追加・変更してね！ */}
                    <span className="tag">プログラミング</span>
                    <span className="tag">デザイン</span>
                    <span className="tag">チームワーク</span>
                </div>
            </div>

            <div className="profile-section animate-in animate-delay-3">
                <h2>🎯 趣味</h2>
                <ul>
                    {/* 趣味を追加・変更してね！ */}
                    <li>スポーツ</li>
                    <li>ゲーム</li>
                    <li>音楽</li>
                </ul>
            </div>

            <div className="profile-section animate-in animate-delay-4">
                <h2>🔥 ハッカソンへの意気込み</h2>
                <p>
                    {/* 意気込みを書いてね！ */}
                    はじめての開発経験ですが、チームのみんなと頑張りたいです。
                </p>
            </div>
        </div>
    );
}
