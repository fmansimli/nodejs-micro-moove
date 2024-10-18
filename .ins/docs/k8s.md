# Kubernetes

## Kubernetes secret creating

```bash
kubectl create secret generic jwt-secret --from-literal JWT_KEY=whateveryouwant
```

## Port forwarding in kubernetes

```bash
kubectl port-forward <pod-name> <local-port>:<pod-port>
```
