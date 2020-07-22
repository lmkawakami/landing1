let sketch = function (p) {
  var opts = {
    width: 500,
    height: 500,
    bg: "rgba(0,0,0,0)",
    xMin: 50, //padding
    yMin: 50, //padding
    xDim1: 100, //tamanho
    yDim1: 100, //tamanho
    xDim2: 5, //padding intra
    yDim2: 30, //padding intra
  };

  var strings = [
    "https://github.com/",
    "https://editor.p5js.org/",
    "https://editor.p5js.org/kazuhikoarase/sketches/fFZdCbCr6",
    "data4",
    "data5",
    "data6",
    "data7",
    "data8",
  ];

  p.setup = function () {
    p.createCanvas(opts.width, opts.height);
    p.noStroke();
    p.clear();
    p.fill(opts.bg);
    p.rect(0, 0, opts.width, opts.height);
    var x = 5;
    var y = 5;
    const fundo = p.color(255, 69, 69, 0);
    const frente = p.color(0);
    var padding = 3;
    var size = 400;
    p.background(255);
    drawQR("lorem", x, y, size, padding, fundo, frente);
  };

  function drawQR(data, left, top, size, padding, fundo, frente) {
    var qr = qrcode(0, "L");
    qr.addData(data);
    qr.make();
    p.strokeWeight(0.1);

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
          p.stroke(frente);
          p.fill(frente);
          p.rect(0, 0, 1, 1);
        } else {
          // p.fill(127);

          p.stroke(fundo);
          p.fill(fundo);
          p.rect(0, 0, 1, 1);
        }
        p.pop();
      }
    }
    p.pop();
  }
};
new p5(sketch, window.document.getElementById("cnvs"));
