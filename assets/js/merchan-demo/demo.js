let sketch = function (p) {
  const vermelho = p.color(255, 69, 69);
  const laranja = p.color(238, 121, 75);
  const cor1 = laranja;
  let cnv;
  let logo;
  let photo;
  let inputNome, inputTitulo, inputRodape1, inputRodape2;

  p.download = function () {
    p.saveCanvas(cnv, "myCanvas", "jpg");
  };

  p.preload = function () {
    logo = p.loadImage("images/Logo-laranja.svg");
    photo = p.loadImage("images/4-slices-of-pizza-740x740.jpg");
  };

  p.setup = function () {
    cnv = p.createCanvas(740, 900);
    cnv.position(0, 0, "static");
    p.background(cor1);

    inputNome = p.select("#campoNomeInput");
    inputNome.value(inputNome.elt.placeholder);

    inputTitulo = p.select("#campoTituloInput");
    inputTitulo.value(inputTitulo.elt.placeholder);

    inputRodape1 = p.select("#campoRodapeInput1");
    inputRodape1.value(inputRodape1.elt.placeholder);
    inputRodape2 = p.select("#campoRodapeInput2");
    inputRodape2.value(inputRodape2.elt.placeholder);

    bot_download = p.select("#botDownload");
    bot_download.mousePressed(p.download);
    p.textSize(70);
    p.fill(cor1);
    p.textFont("Helvetica");
  };
  p.draw = function () {
    p.background(cor1);
    p.image(photo, 0, 80);

    p.textSize(100);
    p.fill(255);
    nome = inputNome.value();
    p.text(nome, 0, 780);

    p.textSize(70);
    p.fill(0);
    titulo = inputTitulo.value();
    p.text(titulo, 0, 65);

    p.fill(0);
    p.textSize(30);
    rodape1 = inputRodape1.value();
    p.text(rodape1, 0, 853);
    rodape2 = inputRodape2.value();
    p.text(rodape2, 0, 888);
    // image(img,dx, dy, dWidth,dHeight, sx, sy, [sWidth], [sHeight])
    p.image(logo, 590, 80, 1.5 * 100, 1.5 * 78, 0, 0);
  };
};
new p5(sketch, window.document.getElementById("cnvs"));
