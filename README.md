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