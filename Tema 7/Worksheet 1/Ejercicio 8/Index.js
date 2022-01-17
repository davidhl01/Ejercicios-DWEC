//a)
$('div > p:eq(0)').css("font-size",10);
$('div > p:eq(1)').css("font-size",20);
$('div > p:eq(2)').css("font-size",30);

//b)
$('h2:eq(0)').click(function () { 
    $('p:eq(0)').hide(2000); 
});
$('h2:eq(1)').click(function () { 
    $('p:eq(1)').hide(2000); 
});
$('h2:eq(2)').click(function () { 
    $('p:eq(2)').hide(2000); 
});

//c) y d)
for (let i = 0; i < 3; i++) {
    $(`div > p:eq(${i})`).hover(function(){
        $(`div > p:eq(${i})`).css('background-color','red');
    });

    $(`div > p:eq(${i})`).mouseout(function(){
        $(`div > p:eq(${i})`).css('background-color','inherit');
    });
}