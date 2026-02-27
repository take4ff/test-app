FROM node:20-alpine

WORKDIR /app

# パッケージ管理ファイルをコピー
COPY package*.json ./

# 依存関係のインストール
RUN npm install

# ソースコードをコピー
COPY . .

# Next.jsの開発サーバー用ポート
EXPOSE 3000

# 開発モードで起動
CMD ["npm", "run dev"]