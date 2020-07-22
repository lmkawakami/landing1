// let cnv;
// let logo;
// let photo;
// let input, bot_ok, bot_download;
// let htmlNome, nome;

// function preload() {
//   logo = createImg("images/logo.svg");
//   logo.hide();
//   photo = createImg("images/4-slices-of-pizza-740x740.jpg");
//   photo.hide();
// }

// function download() {
//   saveCanvas(cnv, "myCanvas", "jpg");
// }

// let sketch2 = function (p) {
//   function setup() {
//     // Create the canvas
//     cnv = createCanvas(740, 740);
//     cnv.position(0, 0, "static");
//     background(127);

//     input = select("#campoNome");
//     // input.value("Bisão Dourado");
//     input.value(input.elt.placeholder);
//     console.log(typeof input.elt.placeholder);
//     console.log(input.elt.placeholder);

//     // htmlNome = createElement("h2", "Qual o nome da sua pizzaria?");
//     // htmlNome.position(20, 100);

//     bot_download = select("#botDownload");
//     bot_download.mousePressed(download);
//     // image(logo, 0, 0);
//     // image(logo, 100, 100, 250, 250, 20, 20, 210, 210);

//     // saveCanvas(c, "myCanvas", "jpg");
//     // textAlign(CENTER);
//     textSize(70);
//     fill(255, 69, 69);
//     textFont("Helvetica");
//   }

//   function draw() {
//     image(photo, 0, 0);

//     nome = input.value();
//     push();
//     text(nome, 100, 700);
//     pop();
//     // image(img,dx, dy, dWidth,dHeight, sx, sy, [sWidth], [sHeight])
//     image(logo, 590, 620, 1.5 * 100, 1.5 * 78, 0, 0);
//   }
// };
// // let cnvs = select("#canvas");
// // console.log(cnvs);
// // new p5(sketch, "canvas");

// // new p5(sketch, window.document.getElementById("canvas"));
// new p5(sketch2, window.document.getElementById("containerT"));
