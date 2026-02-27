import Link from "next/link";

export default function IrisawaProfile() {
    return (
        <div className="profile-container">
            <Link href="/" className="back-link">
                ← メンバー一覧に戻る
            </Link>

            <div className="profile-header animate-in">
                <div className="profile-avatar" style={{ background: "#06b6d4" }}>
                    {/* ここを好きな絵文字に変えてね！ */}
                    ⚡
                </div>
                <h1 className="profile-name">
                    {/* ここに名前を入れてね！ */}
                    入澤　陽向
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
                    こんにちは！陽向です。ハッカソン頑張ります！
                    開発未経験ですが精一杯頑張ります！
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
                    <li>釣り</li>
                    <li>スノボ</li>
                    <li>バレーボール</li>
                </ul>
            </div>

            <div className="profile-section animate-in animate-delay-4">
                <h2>🔥 ハッカソンへの意気込み</h2>
                <p>
                    {/* 意気込みを書いてね！ */}
                    チームのみんなと最高のプロダクトを作りたいです！
                </p>
            </div>
        </div>
    );
}
