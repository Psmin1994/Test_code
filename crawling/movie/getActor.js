import puppeteer from "puppeteer";

var crawl_actor = async (href) => {
  try {
    var result = [];

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

    await page.goto(href);

    await page.waitForSelector("#movieEndTabMenu > li:nth-child(2) > a");

    await page.click("#movieEndTabMenu > li:nth-child(2) > a");

    await page.waitForSelector("#actorMore");

    await page.click("#actorMore");

    let tmp = await page.$$(
      "#content > div.article > div.section_group.section_group_frst > div.obj_section.noline > div > div.lst_people_area.height100 > ul > li"
    );

    for (let node of tmp) {
      const data = await node.$eval("div > a", (element) => {
        return element.textContent;
      });

      result.push(data);
    }

    // 브라우저를 종료한다.
    await browser.close();

    return result;
  } catch (e) {
    console.error(e);
  }
};

export default crawl_actor;
