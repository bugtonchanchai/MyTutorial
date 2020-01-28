reference https://docs.docker.com/get-started/

# Enable Kubernetes

1. Goto **Settings -> Kubernetes.**
2. Enable Kubernetes
3. Create file `pod.yaml` with following code
    ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
    name: demo
    spec:
    containers:
    - name: testpod
        image: alpine:3.5
        command: ["ping", "8.8.8.8"]
    ```
4. Create pod `kubectl apply -f pod.yaml` in hyper terminal
5. Check pod is up and running `kubectl get pods`
    ```
    NAME      READY     STATUS    RESTARTS   AGE
    demo      1/1       Running   0          4s
    ```
6. Check log by ping a process `kubectl logs demo`
7. Delete pod `kubectl delete -f pod.yaml`

# Enable Docker Swarm
Docker Desktop runs primarily on Docker Engine, which has everything you need to run a Swarm built in. Follow the setup and validation instructions appropriate for your operating system:

1. Initialize docker swarm mode `docker swarm init`
    ```
    Swarm initialized: current node (mtmtsc8gt4osjt5hznwijqnfd) is now a manager.

    To add a worker to this swarm, run the following command:

        docker swarm join --token SWMTKN-1-3nnigedw2s24m7qp939ayn8sxdwloj7be7kpu01e8q91p0e26w-eq89qrjy45e717g9iys78ik3g 192.168.65.3:2377

    To add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.
    ```
2. Create service alpine `docker service create --name demo alpine:3.5 ping 8.8.8.8`
3. Check running service `docker service ps demo`
    ```
    ID                  NAME                IMAGE               NODE                DESIRED STATE       CURRENT STATE            ERROR               PORTS
    ow9k17nt58t3        demo.1              alpine:3.5          docker-desktop      Running             Running 51 seconds ago
    ```
4. Check log ping `docker service logs demo`
5. Remove service `docker service rm demo`

# Containerizing an application
1. cloan tutorial project
    ```
    git clone -b v1 https://github.com/docker-training/node-bulletin-board
    cd node-bulletin-board/bulletin-board-app
    ```
2. Building image `docker image build -t bulletinboard:1.0 .`
    * check image by `docker image ls`
3. Start a container `docker container run --publish 8000:8080 --detach --name bb bulletinboard:1.0`
    * check running container `docker ps`
4. Visit site `http://localhost:8000/`
5. Remove container `docker container rm --force bb`

# Deploying to Kubernetes
