"use strict";

import Siding from "login-uc-siding";

const URL = {
  courses:
    "https://intrawww.ing.puc.cl/siding/dirdes/ingcursos/cursos/index.phtml?per_lista_cursos=21_2017&acc_inicio=mis_cursos",
};

export default class SidingBox {
  constructor(credentials = {}, options = {}) {
    this.siding = new Siding(credentials, options);

    this.cheerio = options.cheerio;
    this.jquery = options.jquery;
    if (!this.cheerio && !this.jquery) {
      throw new Error("Missing HTML engine.");
    }
  }

  async loadHTML(html) {
    if (this.cheerio) {
      const $ = this.cheerio;
      return $.load(html);
    } else if (this.jquery) {
      const $ = this.jquery;
      return $.parseHTML(html);
    }
  }

  async login() {
    // TODO: do not login if cookie is alive
    await this.siding.login();
    return this;
  }

  async getCourses() {
    await this.login();
    const { body } = await this.siding.get(URL.courses);

    const $ = await this.loadHTML(body);

    return $("a") // TODO: smarter query
      .filter((i, element) => $(element).attr("href").includes("id_curso_ic"))
      .map((i, element) => {
        const link = $(element).attr("href");
        const text = $(element).text();
        const [acronym, name] = text.split(/ s\.[0-9] /);
        return {
          id: link.split("id_curso_ic=")[1],
          name,
          acronym,
        };
      })
      .get();
  }
}
