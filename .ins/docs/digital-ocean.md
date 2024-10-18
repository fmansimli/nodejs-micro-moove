# installation

```bash
brew install doctl
```

## authentication

```bash
doctl auth init
```

paste the token to the terminal

### get connection info for ournew cluster

```bash
doctl kubernetes cluster kubeconfig save <cluster_name>
```

### list all contexts

```bash
kubectl config view
```

### use a different context

```bash
kubectl config use-context <context_name>
```

### secret generation

```bash
kubectl create secret generic jwt-secret --from-literal JWT_KEY=whateveryouwant
```

```bash
kubectl create secret generic stripe-secret --from-literal STRIPE_KEY=whateveryouwant
```
