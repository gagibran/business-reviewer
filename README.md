# Resume Builder
An application that builds resumes.

## Running in development

To run it in development mode we can use:

```sh
docker-compose -f docker-compose-dev.yml up
# Or, to run it detached:
docker-compose -f docker-compose-dev.yml up -d
# To rebuild the images:
docker-compose -f docker-compose-dev.yml up --build
```

## Network
The front-end (`client`) runs on port `1000:1000`. The container and image created by Docker Compose are called `resume-builder-client:dev` and `resume-builder_client` for the development build.