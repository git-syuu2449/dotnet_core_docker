# c-_dotnet_core_docker

C#で.Net CoreをDocker起動する。Nginx + Sql Server構成

## install

```bash
dotnet new {コマンド} -n {プロジェクト名}
cd {プロジェクト名}
dotnet run
```

mvc + apiの構成なら以下  

```bash
mkdir app && cd app
dotnet new mvc
```


### 補足

Web側とApi側を完全に分離する方法もあるが、  
モデルの管理等が二重管理になるので今回は同一環境


## docker起動

先に.envの配置をする  
下記.envの設定例を参照

```bash
# docker-compose.ymlがいる階層に移動
cd ../
# docker compose up -d --build
docker compose --env-file .env up -d --build
# アタッチ
docker compose exec web bash

```

### コマンド一覧

https://learn.microsoft.com/ja-jp/dotnet/core/tools/dotnet-new

.env設定例

```

# --- UID/GID ---
U_ID=1000
G_ID=1000

# --- ENVIRONMENT ---
ASPNETCORE_ENVIRONMENT=Development

# --- SqlServer ---
SQL_SERVER_ROOT_PASSWORD=password
SQL_SERVER_DATABASE=sql_server_db

APP_USER=c_user

# --- PORT設定 ---
APP_PORT=5050
SQL_SERVER_PORT=1433
NGINX_PORT=6060


```





# SqlServer

ボリュームの確認  
https://mcr.microsoft.com/v2/mssql/server/tags/list
 
## 環境構築と動作確認（短縮手順）

1. 環境変数ファイルを用意（既に `.env` がある想定）

2. コンテナをビルドして起動

```bash
# デフォルトの .env を使う場合
docker compose --env-file .env up -d --build
```

3. 起動確認（ログとコンテナ状態）

```bash
docker compose --env-file .env ps
docker compose --env-file .env logs -f web nginx
```

4. 各エンドポイントの動作確認

```bash
# アプリ（ホスト公開ポート）
curl -v http://localhost:5050/

# nginx 経由
curl -v http://localhost:6060/

# vite 開発サーバ
curl -v http://localhost:5173/
```

注意点:
- `docker-compose` 内のサービス同士（nginx → web）はコンテナ内ポート（通常 `5000`）を参照します。`docker-compose` の `ports` はホスト公開用のマッピングです。
- HTTPS の開発証明書エラーが出る場合は、開発環境では `ASPNETCORE_URLS` で `http://+:5000` を使うか、証明書を作成・信頼してください。