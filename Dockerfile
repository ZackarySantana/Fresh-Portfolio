FROM denoland/deno:latest as base

WORKDIR /app

COPY . .

RUN deno cache main.ts --import-map=import_map.json

ENV DENO_DEPLOYMENT_ID="1"

CMD ["task", "deploy"]