const Koa = require("koa");

module.exports = function server({ app }) {
  const koa = new Koa();

  koa.use(async ctx => {
    ctx.body = {
      directories: {
        home: app.getPath("home"),
        appData: app.getPath("appData"),
        userData: app.getPath("userData"),
        temp: app.getPath("temp"),
        desktop: app.getPath("desktop"),
        documents: app.getPath("documents"),
      },
    };
  });

  return koa;
};
