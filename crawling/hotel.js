import axios from "axios";
import puppeteer from "puppeteer";
import Cheerio from "cheerio";
import fs from "fs";

fs.readdir("poster", (err) => {
  if (err) {
    console.error("poster 폴더가 없어 poster 폴더를 생성합니다 ");
    fs.mkdirSync("poster");
  }
});

var crawl = async () => {
  try {
    // 브라우저를 실행한다.
    // 옵션으로 headless모드를 끌 수 있다.
    const browser = await puppeteer.launch({
      headless: false,
    });

    // 새로운 페이지를 연다.
    const page = await browser.newPage();

    // 페이지의 크기를 설정한다.
    await page.setViewport({
      width: 1366,
      height: 768,
    });

    // "https://www.goodchoice.kr/product/search/2" URL에 접속한다. (여기어때 호텔 페이지)
    await page.goto("https://www.goodchoice.kr/product/search/2");

    // 페이지의 HTML을 가져온다.
    const content = await page.content();

    // $에 cheerio를 로드한다.
    const $ = Cheerio.load(content);

    // 복사한 리스트의 Selector로 리스트를 모두 가져온다.
    const lists = $("#poduct_list_area > li");

    // 모든 리스트를 순환한다.
    lists.each(async (index, list) => {
      const img = $(list).find("a > p > img").attr("data-original");
      const name = 0;
      console.log({ index, img, name });

      if (img) {
        const imgResult = await axios.get("https:" + img, {
          responseType: "arraybuffer",
        });
        fs.writeFileSync(`poster/${index}.jpg`, imgResult.data);
      }
    });

    // 브라우저를 종료한다.
    await page.close();
    await browser.close();
  } catch (e) {
    console.error(e);
  }
};

crawl();
