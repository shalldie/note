## 官方安装脚本

curl -sfL https://rancher-mirror.rancher.cn/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn sh -

## blog

curl -sfL http://rancher-mirror.cnrancher.com/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn sh -s - \
    --docker \
    --write-kubeconfig-mode 666 \
    --kube-apiserver-arg service-node-port-range=1-65535 \
    --disable traefik

## result

curl -sfL https://rancher-mirror.rancher.cn/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn sh -s - \
    --docker \
    --kube-apiserver-arg service-node-port-range=1-65535 \
    --disable traefik

# 124.222.232.250
