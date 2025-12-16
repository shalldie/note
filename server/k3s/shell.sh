## 国内安装

https://docs.rancher.cn/docs/k3s/advanced/index.html#%E4%BD%BF%E7%94%A8-docker-%E4%BD%9C%E4%B8%BA%E5%AE%B9%E5%99%A8%E8%BF%90%E8%A1%8C%E6%97%B6

## 如何用自己的 Ingress 代替 Traefik？

https://docs.rancher.cn/docs/k3s/faq/#%E5%A6%82%E4%BD%95%E7%94%A8%E8%87%AA%E5%B7%B1%E7%9A%84-ingress-%E4%BB%A3%E6%9B%BF-traefik

## 最终命令

curl -sfL https://rancher-mirror.rancher.cn/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn sh -s - \
    --docker \
    --disable traefik \
    --kube-apiserver-arg service-node-port-range=1-65535
