# Image
- ### Command
    |Command|Description|
    |:---:|:---:|
    |`docker pull [img]:[tag]`|Download an image from a registry (default tag is `latest`)|
    |`docker images`|List all local images|
    |`docker build -t [name]:[tag] .`|Build an image from the `Dockerfile` in the current directory|
    |`docker rmi [id_or_name]`|Remove a specified image|
- ### Types of Image
    - #### Base Image
    - #### Parent Image
- ### Dockerfile

# Container
|Command|Description|
|:---:|:---:|
|`docker run -d --name [name] -p [host_port]:[container_port] [img]`|Run and name a container in the background while mapping host and container ports|
|`docker ps`|List currently running containers (Process)|
|`docker ps -a`|List all containers|
|`docker start\|stop\|restart [id_or_name]`|Start, stop, or restart a container|
|`docker rm [id_or_name]`|Remove a stopped container|
|`docker rm -f [id_or_name]`|Force remove a stopped container|

# Debugging, Logs and File Operations
|Command|Description|
|:---:|:---:|
|`docker exec -it [id_or_name] /bin/bash`|Access the interactive terminal of a running container (or use `sh`)|
|`docker logs -f --tail 100 [id_or_name]`|Follow and display the last 100 lines of container logs in real time|
|`docker inspect [id_or_name]`|Display detailed configuration and status of a container or image|
|`docker stats`|Monitor real-time resource usage (CPU, memory, etc.) of running containers|
|`docker cp [src_path] [dest_path]`|Copy files or folders between the host and a container|

# Network, Volume and Cleanup
|Command|Description|
|:---:|:---:|
|`docker network ls\|create\|rm`|Manage custom container networks|
|`docker volume ls\|create\|rm`|Manage persistent data volumes|
|`docker system prune`|Remove unused containers, networks, and dangling images to free up space|

# Docker Hub
- ### [https://hub.docker.com/](https://hub.docker.com/)
- ### Registry

# Docker Compose
|Command|Description|
|:---:|:---:|
|`docker compose build`|Build or rebuild services defined in the Compose file|
|`docker compose up -d`|Create and start containers in the background|
|`docker compose up -d --build`|Build images and start containers in the background|
|`docker compose down`|Stop and remove containers, networks, and default resources|
|`docker compose run <service_name> <command>`|Run a one-off command on a service container|
|`docker compose exec <service_name> bash`|Access the interactive bash shell of a running service container|
|`docker compose ps`|List containers managed by Compose and their status|
|`docker compose logs -f`|Follow and stream real-time log output from all services|
|`docker compose config`|Validate and view the resolved Compose configuration file|

