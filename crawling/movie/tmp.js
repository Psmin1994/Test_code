이미지;
lists.each(async (index, list) => {
  if (img) {
    const imgResult = await axios.get(img, {
      responseType: "arraybuffer",
    });

    fs.writeFileSync(`./src/public/poster/${name}.jpg`, imgResult.data);
  }
});
