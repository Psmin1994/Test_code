import puppeteer from "puppeteer";
import Cheerio from "cheerio";

var get_List = async () => {
  try {
    const url_List = [];
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

    await page.goto("https://movie.naver.com/movie/running/current.naver?view=image&tab=normal&order=likeCount");

    // 페이지의 HTML을 가져온다.
    const content = await page.content();

    // $에 cheerio를 로드한다.
    const $ = Cheerio.load(content);

    // 복사한 리스트의 Selector로 리스트를 모두 가져온다.
    const lists = $(".lst_default_t1 > li");

    // 모든 리스트를 순환한다.
    lists.each(async (index, list) => {
      const href = $(list).find("a").attr("href");
      const full_href = `https://movie.naver.com/${href}`;

      url_List.push(full_href);
    });

    // 브라우저를 종료한다.
    await page.close();
    await browser.close();

    return url_List;
  } catch (e) {
    console.error(e);
  }
};

export default get_List;
