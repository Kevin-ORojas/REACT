const apiKey = "jPUPoSuZQ3PXeJs78JSzTcMy9CLNPReQ";

const getApi = fetch(
  `https://api.giphy.com/v1/stickers/random?api_key=${apiKey}`
);

getApi
  .then((resp) => resp.json())

  .then(({ data }) => {
    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  })
  .catch(console.warn);