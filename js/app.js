$(document).foundation();

$(document).ready(function() {

//     var text = $('#myHtml').text();
// 	text = text.replace('html', '<font color="blue">Click here</font>');
// 	$('#myHtml').html(text);

// });

// var text = 'class' ;
// var  context = $("div#myHtml").html();
// $("div#myHtml").html(context.replace(text,'<span style="color:red;">'+text+'</span>'));

// var search = 'class'
// $(document).ready(function () {
//     $("div#myHtml p:contains('"+search+"')").each(function () {
//         var regex = new RegExp(search,'gi');
//         $(this).html($(this).text().replace(regex, '<span style="color:red;">class</span>'));
//     });
// });

// $("div#myHtml p:contains('class')").each(function () {
//     $(this).html($(this).html().replace("class", '<span style="color:red;">class</span>'));
// });


var text = document.getElementById("myHtml1");
var str = text.innerHTML,
    reg = /regular|light|italic|bold|class/ig; //g is to replace all occurances

//fixing a bit
var toStr = String(reg);
var color = (toStr.replace('\/g', '|')).substring(1);

//split it baby
var colors = color.split("|");

if (colors.indexOf("regular") > -1) {
    str = str.replace(/regular/g, '<span style="color:red;">regular</span>');
}

if (colors.indexOf("light") > -1) {
    str = str.replace(/light/g, '<span style="color:blue;">light</span>');
}

if (colors.indexOf("italic") > -1) {
    str = str.replace(/italic/g, '<span style="color:green;">italic</span>');
}

if (colors.indexOf("bold") > -1) {
    str = str.replace(/bold/g, '<span style="color:orange;">bold</span>');
}

// if (colors.indexOf("class") > -1) {
//     str = str.replace(/class/g, '<span class="txt-primary">class</span>');
// }


document.getElementById("myHtml1").innerHTML = str;



});