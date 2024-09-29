// // aync is await

const getImagen = async () => {
    const apiKey = "jPUPoSuZQ3PXeJs78JSzTcMy9CLNPReQ";
    const resp = await fetch(
      `https://api.giphy.com/v1/stickers/random?api_key=${apiKey}`
    );
  
    const { data } = await resp.json();
  
    console.log(data);
  
    const { url } = data.images.original;
    const img = document.createElement("img");
  
    img.src = url;
  
    document.body.append(img);
  };
  
  getImagen();
  