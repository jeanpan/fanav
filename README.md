## FaNAV

FaNAV is a navigation bar composed by font-awesome icon.

![](https://raw.githubusercontent.com/jeanpan/fanav/master/image/demo.png)

### How to use FaNAV


* include font-awesome and fanav.css. 
```html
<link rel="stylesheet" href="assets/font-awesome-4.3.0/css/font-awesome.min.css">
<link rel="stylesheet" href="css/fanav.css">
```

* incldue jQuery lib and fanav.js.
```html
<script src="js/jquery-1.11.2.js"></script>
<script src="js/fanavjs"></script>
```

* create fanav div and customize font-awesome icon
```html
<div class="fanav">
    <a href=""><i class="fa fa-ship active" data-text="ship"></i></a>
    <a href=""><i class="fa fa-birthday-cake" data-text="cake"></i></a>
    <a href=""><i class="fa fa-leaf" data-text="leaf"></i></a>
    <a href=""><i class="fa fa-camera-retro" data-text="camera"></i></a>
</div>
```

* run fanav
```html
<script>
$(function() {
    $('.nav').fanav();
});
</script>
```