# 🚀 チーム自己紹介サイト

ハッカソンチームメンバーの自己紹介ページです。  
このプロジェクトを使って、**GitHubの基本操作（ブランチ作成 → 編集 → PR作成）** を練習しましょう！

## 📋 やること

自分の自己紹介ページを編集して、Pull Request（PR）を出してみよう！

| メンバー | 編集するファイル |
|---------|----------------|
| Fujita    | `app/members/fujita/page.tsx` |
| Matsumoto | `app/members/matsumoto/page.tsx` |
| Itoh      | `app/members/itoh/page.tsx` |
| Irisawa   | `app/members/irisawa/page.tsx` |

## 🛠️ 環境構築

### 必要なもの
- [Node.js](https://nodejs.org/) (v18以上)
- [Git](https://git-scm.com/)

### セットアップ手順

```bash
# 1. リポジトリをクローン
git clone <リポジトリURL>
cd test-app

# 2. 依存パッケージをインストール
npm install

# 3. 開発サーバーを起動
npm run dev
```

ブラウザで http://localhost:3000 を開くとサイトが表示されます 🎉

## 📝 GitHub操作の手順

### Step 1: ブランチを作成する

```bash
# mainブランチの最新を取得
git pull origin main

# 自分のブランチを作成して切り替え
git checkout -b feature/自分の名前-profile
# 例: git checkout -b feature/fujita-profile
```

### Step 2: 自己紹介ページを編集する

自分のファイル（例: `app/members/fujita/page.tsx`）を開いて、`{/* ここを編集してね！ */}` と書いてある部分を自分の情報に書き換えましょう。

編集できる項目:
- 🐱 絵文字（アバター）
- 📛 名前
- 💬 ひとことコメント
- 🙋 自己紹介文
- 🛠️ スキル・興味
- 🎯 趣味
- 🔥 意気込み

### Step 3: 変更をコミットする

```bash
# 変更したファイルをステージング
git add .

# コミット
git commit -m "feat: Fujitaの自己紹介を追加"
```

### Step 4: GitHubにプッシュする

```bash
git push origin feature/自分の名前-profile
```

### Step 5: Pull Requestを作成する

1. GitHubのリポジトリページを開く
2. 「Compare & pull request」ボタンをクリック
3. タイトルと説明を書いて「Create pull request」をクリック

**おめでとう！** 🎉 これでPRが作成できました！

## 🐳 Docker（オプション）

```bash
docker compose up --build
```

## 📚 参考リンク

- [Gitの基本](https://git-scm.com/book/ja/v2)
- [GitHubのPRの作り方](https://docs.github.com/ja/pull-requests)
- [Next.js公式ドキュメント](https://nextjs.org/docs)
