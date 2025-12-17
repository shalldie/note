# acme.sh

https://github.com/acmesh-official/acme.sh/wiki/%E8%AF%B4%E6%98%8E

## 1. 安装

```bash
curl https://get.acme.sh | sh -s email=hi.xieshuang@gmail.com
```

## 2. 申请

```bash
acme.sh --issue -d nosaid.com -d www.nosaid.com --webroot /var/www/html/
```

nginx:

```nginx
location /.well-known/acme-challenge/ {
    root /var/www/html;
}
```

## 3. 安装

```
/etc/nginx/conf.d/ssl
```

```bash
acme.sh --install-cert -d nosaid.com -d www.nosaid.com \
    --key-file /etc/nginx/conf.d/ssl/key.pem \
    --fullchain-file /etc/nginx/conf.d/ssl/cert.pem \
    --reloadcmd "nginx -s reload"
```

nginx

```
ssl_certificate     /etc/nginx/conf.d/ssl/cert.pem;
ssl_certificate_key /etc/nginx/conf.d/ssl/key.pem;
```
