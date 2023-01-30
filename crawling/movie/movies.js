import axios from "axios";
import puppeteer from "puppeteer";
import Cheerio from "cheerio";
import fs from "fs";
import get_List from "./list.js";

var crawl = async () => {
  try {
    var href_List = await get_List();
    // 브라우저를 실행한다.
    // 옵션으로 headless모드를 끌 수 있다.
    const browser = await puppeteer.launch({
      headless: true,
    });

    // 새로운 페이지를 연다.
    const page = await browser.newPage();

    // 페이지의 크기를 설정한다.
    await page.setViewport({
      width: 1366,
      height: 768,
    });

    href_List.forEach((href) => {
      await page.goto(href);

      // 페이지의 HTML을 가져온다.
      const content = await page.content();

      // $에 cheerio를 로드한다.
      const $ = Cheerio.load(content);

      // 복사한 리스트의 Selector로 리스트를 모두 가져온다.
      const name = $(".wide_info_area > div.mv_info").find("h3.h_movie > a:first-child").text();

      // 모든 리스트를 순환한다.
      // lists.each(async (index, list) => {
      // if (img) {
      //   const imgResult = await axios.get(img, {
      //     responseType: "arraybuffer",
      //   });

      //   fs.writeFileSync(`./src/public/poster/${name}.jpg`, imgResult.data);
      // }
      // });

      // 브라우저를 종료한다.
      await page.close();
      await browser.close();
    })
  } catch (e) {
    console.error(e);
  }
};

crawl();
