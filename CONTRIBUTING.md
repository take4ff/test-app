# 🤝 コントリビューションガイド

このプロジェクトへの貢献方法をまとめています。

## ブランチ命名規則

```
feature/名前-profile
```

**例:**
- `feature/fujita-profile`
- `feature/matsumoto-profile`

## コミットメッセージの書き方

以下のフォーマットに従ってください：

```
feat: 〇〇の自己紹介を追加
```

**例:**
- `feat: Fujitaの自己紹介を追加`
- `fix: 趣味の内容を修正`

### よく使うプレフィックス

| プレフィックス | 用途 |
|--------------|------|
| `feat:`      | 新しい機能・内容の追加 |
| `fix:`       | 修正 |
| `docs:`      | ドキュメントの変更 |
| `style:`     | 見た目の変更 |

## Pull Requestの出し方

### 1. 編集するファイルは自分のページだけ！

| メンバー | ファイル |
|---------|---------|
| Fujita    | `app/members/fujita/page.tsx` |
| Matsumoto | `app/members/matsumoto/page.tsx` |
| Itoh      | `app/members/itoh/page.tsx` |
| Irisawa   | `app/members/irisawa/page.tsx` |

### 2. PRのタイトル

```
feat: 〇〇の自己紹介ページを作成
```

### 3. PRの説明文テンプレート

```markdown
## 変更内容
- 自己紹介ページを編集しました

## 変更したファイル
- app/members/〇〇/page.tsx

## 確認してほしいこと
- [ ] 名前が正しく表示される
- [ ] プロフィール情報が表示される
- [ ] トップページからリンクで飛べる
```

## 困ったときは

- **コンフリクトが起きた**: チームリーダーに相談してください
- **間違えてコミットした**: `git reset` で戻せます（リーダーに聞いてね）
- **プッシュできない**: `git pull origin main` を先に実行してみてください
