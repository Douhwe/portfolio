import { Icon } from "@iconify/react";

const width = 24;
const height = 24;

const ICONS: { [key: string]: React.ReactElement } = {
  React: <Icon icon="logos:react" width={width} height={height} />,
  playwright: <Icon icon="logos:playwright" width={width} height={height} />,
  TypeScript: (
    <Icon icon="logos:typescript-icon" width={width} height={height} />
  ),
  python: <Icon icon="logos:python" width={width} height={height} />,
  firebase: <Icon icon="logos:firebase" width={width} height={height} />,
  mysql: <Icon icon="logos:mysql-icon" width={width} height={height} />,
  Flask: (
    <Icon
      icon="simple-icons:flask"
      color="black"
      width={width}
      height={height}
    />
  ),
  docker: <Icon icon="logos:docker-icon" width={width} height={height} />,
  bash: <Icon icon="logos:bash-icon" width={width} height={height} />,
  fastapi: (
    <Icon
      icon="simple-icons:fastapi"
      color="#089484"
      width={width}
      height={height}
    />
  ),
  MongoDB: <Icon icon="logos:mongodb-icon" width={width} height={height} />,
  digitalocean: (
    <Icon
      icon="simple-icons:digitalocean"
      color="#0069ff"
      width={width}
      height={height}
    />
  ),
  heroku: <Icon icon="logos:heroku-icon" width={width} height={height} />,
  tailwind: (
    <Icon icon="logos:tailwindcss-icon" width={width} height={height} />
  ),
  nginx: <Icon icon="logos:nginx" width={width} height={height} />,
  solidjs: <Icon icon="logos:solidjs-icon" width={width} height={height} />,
  SQLite: (
    <Icon icon="vscode-icons:file-type-sqlite" width={width} height={height} />
  ),
  github_actions: (
    <Icon icon="logos:github-actions" width={width} height={height} />
  ),
  go: <Icon icon="vscode-icons:file-type-go" width={width} height={height} />,
  c: <Icon icon="logos:c" width={width} height={height} />,
  deno: <Icon icon="logos:deno" width={width} height={height} />,
  Nodejs: <Icon icon="logos:nodejs-icon" width={width} height={height} />,
  java: <Icon icon="logos:java" width={width} height={height} />,
  fresh: <Icon icon="logos:fresh" width={width} height={height} />,
  puppeteer: <Icon icon="logos:puppeteer" width={width} height={height} />,
  nextjs: <Icon icon="logos:nextjs-icon" width={width} height={height} />,
  terraform: <Icon icon="logos:terraform-icon" width={width} height={height} />,
  kubernetes: <Icon icon="logos:kubernetes" width={width} height={height} />,
  grafana: <Icon icon="logos:grafana" width={width} height={height} />,
  prometheus: <Icon icon="logos:prometheus" width={width} height={height} />,
  Express: <Icon icon="skill-icons:expressjs-dark" width={width} height={height} />,
  TensorFlow: <Icon icon="logos:tensorflow" width={width} height={height} />,
  Keras: <Icon icon="devicon:keras" width={width} height={height} />,
};

export default ICONS;