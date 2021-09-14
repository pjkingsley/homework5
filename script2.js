var currentDay = $("#currentDay");
var toDos = $("#toDos");
var now = moment();
var hourM = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
var hour = [ "8 am", "9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm"];
var currentTime = now.format('h a');
console.log(currentTime);
currentDay.text(now.format('dddd, MMM Qo'));
var possition = hourM.toString();
console.log(currentTime);

/*displays hourly inputs*/
$(document).ready(function(){
    for (i = 0; i < hour.length; i++) {
        var time = hour[i];
        console.log(time);
        var possition = hourM[i].toString();
        console.log(possition);
        var form = $('<div></div>');
        $(form).addClass('form-group form-inline');
        $(toDos).append(form);
        var label = $('<label></label>');
        label.text(time);
        $(label).addClass('col-2 col-form-label');
        $(label).attr('id', time)
        $(form).append(label);
        var input = $('<input></input>');
        $(input).addClass('form-control col-9');
        $(input).attr('id', possition);
        /*sets color of inputs based on current time*/
        $(input).css('background-color', 'grey');
        if ($(label).attr('id') == currentTime) {
            $(input).css('background-color', 'red');
            $(input).addClass('now');
        } else if ($(input).attr('id') > $('.now').attr('id')) {
            $(input).css('background-color', 'green');
        };
        $(form).append(input);
        var btnBox = $('<div></div>');
        $(btnBox).addClass('input-group-append');
        $(form).append(btnBox);
        var btn = $('<button>Save</button>');
        $(btn).addClass('saveBtn');
        btn.attr('class : btn btn-outline-secondary');
        $(btnBox).append(btn);
        
    };
        var saveBtnArray = $('.saveBtn');
        console.log(saveBtnArray);
        for (var i = 0; i < hour.length; i ++) {
            var saveBtn = $(saveBtnArray[i]);
            console.log(saveBtn);
            saveBtn.on('click', saveText);
        };
        for ( i = 0; i < hourM.length; i ++) {
            var keyIndex = window.localStorage.key(hourM);
            console.log(keyIndex);
            var storedTask = localStorage.getItem(hourM[i]);
            console.log(storedTask);
            var fillTask = $('input').attr('id', hourM[i]);
            console.log(fillTask);
            fillTask.text = storedTask;
            console.log (fillTask);
        };
        
            
});
    

var saveText = function (event) {
    console.log('clicked');
    event.preventDefault();
    console.log($(event.currentTarget).parent().siblings());
    var task = $(event.currentTarget).parent().siblings();
    console.log(task[1]);
    var thisTask = task[1];
    console.log(thisTask)
    console.log($(thisTask).val());
    var saveTask = $(thisTask).val();
    var name = $(thisTask).attr('id');
    console.log(name);
    localStorage.setItem(name, saveTask);
    var storedTask = localStorage.getItem(name);
    console.log(storedTask);
};

