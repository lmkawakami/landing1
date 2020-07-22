let sketch = function (p) {
  const vermelho = p.color(255, 69, 69);
  const laranja = p.color(238, 121, 75);
  const cor1 = laranja;
  let cnv;
  let logo;
  let photo;
  let inputNome, inputTitulo, inputRodape1, inputRodape2, inputQR;

  p.download = function () {
    p.saveCanvas(cnv, "myCanvas", "jpg");
  };

  p.preload = function () {
    // logo = p.loadImage("images/Logo-vermelho.svg");
    logo = p.loadImage("images/Logo-laranja.svg");
    // logo = p.loadImage("images/Logo-branco.svg");
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

    inputQR = p.select("#campoQR");
    inputQR.value(inputQR.elt.placeholder);

    bot_download = p.select("#botDownload");
    bot_download.mousePressed(p.download);
    p.textSize(70);
    p.fill(cor1);
    p.textFont("Helvetica");
  };

  p.draw = function () {
    p.background(cor1);
    p.image(photo, 0, 80);
    p.textSize(75);
    p.fill(255);
    nome = inputNome.value();
    p.text(nome, 0, 793);
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
    // ------------------------------------------------------------------
    var size = 190;
    var x = 740 - size;
    var y = 740 - size + 80;
    const fundo = p.color(100, 100, 100, 50);
    const frente = p.color(255, 255, 255, 255);
    var padding = 5;
    drawQR(inputQR.elt.value, x, y, size, padding, fundo, frente);
  };

  // ------------------------------------------------------------------
  // ------------------------------------------------------------------
  // ------------------------------------------------------------------
  // ------------------------------------------------------------------
  // ------------------------------------------------------------------

  function drawQR(data, left, top, size, padding, fundo, frente) {
    var qr = qrcode(0, "L");
    qr.addData(data);
    qr.make();
    p.strokeWeight(0.1);

    p.fill(fundo);
    p.rect(left, top, size, size);
    p.push();
    p.translate(left, top);
    var moduleCount = qr.getModuleCount();
    for (var r = -padding; r < moduleCount + padding; r += 1) {
      for (var c = -padding; c < moduleCount + padding; c += 1) {
        p.push();
        p.scale(size / (moduleCount + 2 * padding));
        p.translate(c + padding, r + padding);
        if (r >= 0 && r < moduleCount && c >= 0 && c < moduleCount && qr.isDark(r, c)) {
          // p.fill(0);
          let linhaFrente = p.color(frente.levels[0], frente.levels[1], frente.levels[2], frente.levels[3] / 1);
          p.stroke(linhaFrente);
          // p.stroke(frente);
          p.fill(frente);
          p.rect(0, 0, 1, 1);
        }
        p.pop();
      }
    }
    p.pop();
  }
};
new p5(sketch, window.document.getElementById("cnvs"));
