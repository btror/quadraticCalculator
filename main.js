var ga;
var gb;
var gc;

var globalScale;

var defaultGraph;
fun1(defaultGraph);
draw(defaultGraph);

function quadraticFunc() {

    var quadf = document.getElementById("quadform");
    if (quadf.style.display === "none") {
        quadf.style.display = "block";
    } else {
        //quadf.style.display = "none";
    }

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var aval = document.getElementById("aInput").value;
    var bval = document.getElementById("bInput").value;
    var cval = document.getElementById("cInput").value;

    var a = Number(aval);
    var b = Number(bval);
    var c = Number(cval);
    ga = a;
    gb = b;
    gc = c;

    var int1;
    var int2;
    

    if (a != 0) {
        var num1 = ((b * -1) + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
        var num2 = ((b * -1) - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
        int1 = num1;
        int2 = num2;
    } else {
        int1 = (c * -1) / b;
        int2 = 0 / 0;
    }

    if (int1 == int2 || b == 0) {
        int2 = 0 / 0;
    }

    

    var status1 = Number.isNaN(int1);
    var status2 = Number.isNaN(int2);
    var inttemp;
    if (int1 > int2 && status1 == false && status2 == false) {
        if (int1 < 0) {
            inttemp = int1 * -1;
            globalScale = 100/inttemp;
        } else {
            globalScale = 100/int1;
        }

        if (int1 == 0 || inttemp < 5) {
            globalScale = 5;
        }

        
        
    } else if (int1 < int2 && status1 == false && status2 == false){
        if (int2 < 0) {
            inttemp = int2 * -1;
            globalScale = 100/inttemp;
        } else {
            globalScale = 100/int2;
        }
        if (int2 == 0 || inttemp < 5) {
            globalScale = 5;
        }

    } else if (status1 == false && status2 == true) {
        if (int1 < 0) {
            inttemp = int1 * -1;
            globalScale = 100/inttemp;
        } else {
            globalScale = 100/int1;
        }
        if (int1 == 0 || inttemp < 5) {
            globalScale = 5;
        }
    } else if (status1 == true && status2 == false) {
        if (int2 < 0) {
            inttemp = int2 * -1;
            globalScale = 100/inttemp;
        } else {
            globalScale = 100/int2;
        }
        if (int2 == 0 || inttemp < 5) {
            globalScale = 5;
        }
    } else {
        //compare b and c values
        if (c > a) {
            globalScale = 100/(c*3);
        } else if (c < a) {
            globalScale = 100/(a*3);
        } else {
            globalScale = 5;
        }
        
    }

    var letters = false;
    if (Number.isNaN(a) == true || Number.isNaN(b) == true || Number.isNaN(c) == true) {
        letters = true;
    }

    var x;

    if (status1 == false && status2 == false && letters == false) {
        document.getElementById("output").innerHTML = "Intercept at x = " + int2 + " and x = " + int1;
        document.getElementById("output2").innerHTML = a + "x<sup>2</sup> + " + b + "x + " + c + " = 0";
        fun1(x);
        draw(x);
        document.getElementById("output3").innerHTML = a + "(" + int1 + ")" + "<sup>2</sup> + " + b + "(" + int1 + ") + " + c + " = 0";
        document.getElementById("output4").innerHTML = a + "(" + int2 + ")" + "<sup>2</sup> + " + b + "(" + int2 + ") + " + c + " = 0";
        document.getElementById("output5").innerHTML = "F(x) = " + a + "x<sup>2</sup> + " + b + "x + " + c;

        document.getElementById("problem").innerHTML = "Find the solution for:<br>" + a + "x<sup>2</sup> + " + b + "x + " + c + " = 0";
        document.getElementById("listHow").innerHTML = "Using the quadratic formula where a = " + a + ", b = " + b + ", c = " + c;
        document.getElementById("steps").innerHTML = "x = (-(" + b + ") ± √((-(" + b + "))<sup>2</sup> - 4(" + a + ")(" + c + "))) / (2(" + a + "))<br>"
            + "x = (" + (b * -1) + " ± √(" + Math.pow(b, 2) + " - 4(" + a + ")(" + c + "))) / (2(" + a + "))<br>"
            + "x = (" + (b * -1) + " ± √(" + Math.pow(b, 2) + " - (" + (4 * a * c) + "))) / (" + 2 * a + ")<br>"
            + "x = (" + (b * -1) + " ± √(" + (Math.pow(b, 2) + (-1 * (4 * a * c))) + ")) / (" + 2 * a + ")<br><br>"
            + "root at x = (" + (b * -1) + " + " + Math.sqrt(Math.pow(b, 2) - 4 * a * c) + ") / " + 2 * a + " = " + ((b * -1) + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a) + "<br>"
            + "root at x = (" + (b * -1) + " - " + Math.sqrt(Math.pow(b, 2) - 4 * a * c) + ") / " + 2 * a + " = " + ((b * -1) - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);


    } else if (status1 == false && status2 == true && letters == false) {
        document.getElementById("output").innerHTML = "Intercept at x = " + int1;
        document.getElementById("output2").innerHTML = a + "x<sup>2</sup> + " + b + "x + " + c + " = 0";
        fun1(x);
        draw(x);
        document.getElementById("output3").innerHTML = a + "(" + int1 + ")" + "<sup>2</sup> + " + b + "(" + int1 + ") + " + c + " = 0";
        document.getElementById("output4").innerHTML = "";
        document.getElementById("output5").innerHTML = "F(x) = " + a + "x<sup>2</sup> + " + b + "x + " + c;

        document.getElementById("problem").innerHTML = "Find the solution for:<br>" + a + "x<sup>2</sup> + " + b + "x + " + c + " = 0";
        document.getElementById("listHow").innerHTML = "Using the quadratic formula where a = " + a + ", b = " + b + ", c = " + c;
        document.getElementById("steps").innerHTML = "x = (-(" + b + ") ± √((-(" + b + "))<sup>2</sup> - 4(" + a + ")(" + c + "))) / (2(" + a + "))<br>"
            + "x = (" + (b * -1) + " ± √(" + Math.pow(b, 2) + " - 4(" + a + ")(" + c + "))) / (2(" + a + "))<br>"
            + "x = (" + (b * -1) + " ± √(" + Math.pow(b, 2) + " - (" + (4 * a * c) + "))) / (" + 2 * a + ")<br>"
            + "x = (" + (b * -1) + " ± √(" + (Math.pow(b, 2) + (-1 * (4 * a * c))) + ")) / (" + 2 * a + ")<br><br>"
            + "root at x = (" + (b * -1) + " + " + Math.sqrt(Math.pow(b, 2) - 4 * a * c) + ") / " + 2 * a + " = " + ((b * -1) + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a) + "<br>"
            + "root at x = (" + (b * -1) + " - " + Math.sqrt(Math.pow(b, 2) - 4 * a * c) + ") / " + 2 * a + " = " + ((b * -1) - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);

    } else if (status1 == true && status2 == false && letters == false) {
        document.getElementById("output").innerHTML = "Intercept at x = " + int2;
        document.getElementById("output2").innerHTML = a + "x<sup>2</sup> + " + b + "x + " + c + " = 0";
        fun1(x);
        draw(x);
        document.getElementById("output3").innerHTML = a + "(" + int2 + ")" + "<sup>2</sup>+" + b + "(" + int2 + ")+" + c + "=0";
        document.getElementById("output4").innerHTML = "";
        document.getElementById("output5").innerHTML = "F(x) = " + a + "x<sup>2</sup> + " + b + "x + " + c;

        document.getElementById("problem").innerHTML = "Find the solution for:<br>" + a + "x<sup>2</sup> + " + b + "x + " + c + " = 0";
        document.getElementById("listHow").innerHTML = "Using the quadratic formula where a = " + a + ", b = " + b + ", c = " + c;
        document.getElementById("steps").innerHTML = "x = (-(" + b + ") ± √((-(" + b + "))<sup>2</sup> - 4(" + a + ")(" + c + "))) / (2(" + a + "))<br>"
            + "x = (" + (b * -1) + " ± √(" + Math.pow(b, 2) + " - 4(" + a + ")(" + c + "))) / (2(" + a + "))<br>"
            + "x = (" + (b * -1) + " ± √(" + Math.pow(b, 2) + " - (" + (4 * a * c) + "))) / (" + 2 * a + ")<br>"
            + "x = (" + (b * -1) + " ± √(" + (Math.pow(b, 2) + (-1 * (4 * a * c))) + ")) / (" + 2 * a + ")<br><br>"
            + "root at x = (" + (b * -1) + " + " + Math.sqrt(Math.pow(b, 2) - 4 * a * c) + ") / " + 2 * a + " = " + ((b * -1) + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a) + "<br>"
            + "root at x = (" + (b * -1) + " - " + Math.sqrt(Math.pow(b, 2) - 4 * a * c) + ") / " + 2 * a + " = " + ((b * -1) - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);

    } else {
        document.getElementById("output").innerHTML = "This function has no real roots.";
        document.getElementById("output2").innerHTML = "";
        fun1(x);
        draw(x);
        document.getElementById("output3").innerHTML = "";
        document.getElementById("output4").innerHTML = "";
        if (letters == false) {
            document.getElementById("output5").innerHTML = "F(x) = " + a + "x<sup>2</sup> + " + b + "x + " + c;
        } else {
            document.getElementById("output5").innerHTML = "";
        }
        quadf.style.display = "none";
        document.getElementById("problem").innerHTML = "";
        document.getElementById("listHow").innerHTML = "";
        document.getElementById("steps").innerHTML = "";
    }



}

function fun1(x) {
    var num = ga * Math.pow(x, 2) + (gb * x) + gc;
    return num;
}


function draw() {
    var canvas = document.getElementById("canvas");
    if (null == canvas || !canvas.getContext) return;

    var axes = {}, ctx = canvas.getContext("2d");
    axes.x0 = .5 + .5 * canvas.width;  // x0 pixels from left to x=0
    axes.y0 = .5 + .5 * canvas.height; // y0 pixels from top to y=0
    
    // if (firstIntercept > secondIntercept) {
    //     axes.scale = 100/firstIntercept; 
    // } else if (firstIntercept < secondIntercept) {
    //     axes.scale = 100/secondIntercept;
    // } else {
    //     axes.scale = 100/firstIntercept;
    // }
    axes.scale = globalScale;                // 40 pixels from x=0 to x=1
    axes.doNegativeX = true;

    showAxes(ctx, axes);
    funGraph(ctx, axes, fun1, "rgb(11,153,11)", 1);
}

function funGraph(ctx, axes, func, color, thick) {
    var xx, yy, dx = 4, x0 = axes.x0, y0 = axes.y0, scale = axes.scale;
    var iMax = Math.round((ctx.canvas.width - x0) / dx);
    var iMin = axes.doNegativeX ? Math.round(-x0 / dx) : 0;
    ctx.beginPath();
    ctx.lineWidth = thick;
    ctx.strokeStyle = color;


    for (var i = iMin; i <= iMax; i++) {
        xx = dx * i; yy = scale * func(xx / scale);
        if (i == iMin)
            ctx.moveTo(x0 + xx, y0 - yy);
        else
            ctx.lineTo(x0 + xx, y0 - yy);
    }
    ctx.stroke();
}

function showAxes(ctx, axes) {
    var x0 = axes.x0, w = ctx.canvas.width;
    var y0 = axes.y0, h = ctx.canvas.height;
    var xmin = axes.doNegativeX ? 0 : x0;
    ctx.beginPath();
    ctx.strokeStyle = "rgb(128,128,128)";
    ctx.fillStyle = "lightgray";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.moveTo(xmin, y0); ctx.lineTo(w, y0);  // X axis
    ctx.moveTo(x0, 0); ctx.lineTo(x0, h);  // Y axis
    ctx.stroke();
}
