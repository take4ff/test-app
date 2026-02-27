import Link from "next/link";

const members = [
  {
    name: "Fujita",
    role: "メンバー",
    message: "よろしくお願いします！",
    emoji: "🐱",
    color: "#6366f1",
    path: "/members/fujita",
  },
  {
    name: "Matsumoto",
    role: "メンバー",
    message: "よろしくお願いします！",
    emoji: "🎮",
    color: "#a855f7",
    path: "/members/matsumoto",
  },
  {
    name: "Itoh",
    role: "メンバー",
    message: "よろしくお願いします！",
    emoji: "🌸",
    color: "#ec4899",
    path: "/members/itoh",
  },
  {
    name: "Irisawa",
    role: "メンバー",
    message: "よろしくお願いします！",
    emoji: "⚡",
    color: "#06b6d4",
    path: "/members/irisawa",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1 className="animate-in">Meet Our Team 👋</h1>
        <p className="animate-in animate-delay-1">
          ハッカソンチームのメンバー紹介ページです。
          <br />
          自分のページを編集して、PRを出してみよう！
        </p>
      </section>

      <div className="card-grid">
        {members.map((member, i) => (
          <Link
            key={member.name}
            href={member.path}
            className={`member-card animate-in animate-delay-${i + 1}`}
            style={{ "--card-accent": member.color } as React.CSSProperties}
          >
            <div
              className="card-avatar"
              style={{ background: member.color }}
            >
              {member.emoji}
            </div>
            <div className="card-name">{member.name}</div>
            <div className="card-role">{member.role}</div>
            <div className="card-message">{member.message}</div>
            <span className="card-arrow">→</span>
          </Link>
        ))}
      </div>
    </>
  );
}
