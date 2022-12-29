# App name

To start backend you need:

1. Name set Docker https://download.docker.com/mac/stable/Docker.dmg

2. For convenience, I store all env vars in one .env.dev file that needs to be populated

3. Enter in terminal

```console
docker-compose -f docker-compose.dev.yml up -d --build
```


# Wiki
To look at the logs, you need to type in the console `docker-compose logs -f`
or you can view logs from a specific container, for example for a container with a server `docker-compose logs -f backend`

This is how you can enter commands inside containers `docker-compose -f docker-compose.yml exec backend python manage.py migrate`