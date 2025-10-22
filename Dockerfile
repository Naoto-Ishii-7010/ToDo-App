# Bun公式のベースイメージ
FROM oven/bun:1

# 作業ディレクトリを作成
WORKDIR /app

# 最初に依存関係のファイルのみをコピー
COPY package.json bun.lock* ./

# 依存関係をインストール
# --frozen-lockfileはlockファイルと完全に一致したバージョンをインストールし、CI/CD環境での再現性を高める
RUN bun install --frozen-lockfile

# アプリケーションのソースコードをコピー
COPY . .

# Next.jsが使用するポート3000番を開放
EXPOSE 3000

# 開発サーバーを起動するコマンド（bun run devを使用）
CMD ["bun", "run", "dev"]