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
    reg = /&lt;|&gt;|p |divv|bold|class/ig; //g is to replace all occurances

//fixing a bit
var toStr = String(reg);
var color = (toStr.replace('\/g', '|')).substring(1);

//split it baby
var colors = color.split("|");

if (colors.indexOf("&lt;") > -1) {
    str = str.replace(/&lt;/g, '<span style="color:#47da7d;">&lt;</span>');
}

if (colors.indexOf("&gt;") > -1) {
    str = str.replace(/&gt;/g, '<span style="color:#47da7d;">&gt;</span>');
}

// if (colors.indexOf("p ") > -1) {
    // str = str.replace(/p /g, '<span style="color:green;">p </span>');
// }

if (colors.indexOf("div") > -1) {
    str = str.replace(/div/g, '<span style="color:#f35393;">div</span>');
}

if (colors.indexOf("span") > -1) {
    str = str.replace(/span/g, '<span style="color:#f35393;">span</span>');
}



// if (colors.indexOf("class") > -1) {
//     str = str.replace(/class/g, '<span style="color:orange;">class</span>');
// }

// if (colors.indexOf("class") > -1) {
//     str = str.replace(/class/g, '<span class="txt-primary">class</span>');
// }


document.getElementById("myHtml1").innerHTML = str;



});