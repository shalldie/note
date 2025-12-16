helm upgrade --install ingress-nginx ingress-nginx/ingress-nginx \
    --namespace ingress-nginx --create-namespace \
    -f values.yaml

nohup ./ttyd -c shalldie:xxx -W -b /ssh bash &

## 查看默认的配置

helm show values ingress-nginx/ingress-nginx >default.yaml

修改了3个地方：

# 1. registry: k8s.m.daocloud.io
# 2. watchIngressWithoutClass: true
# 3. enableHttps: false
#     - http: 8080
#     - https: 8443
