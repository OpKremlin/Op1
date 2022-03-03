<html>
<head>
    <title>Glory To Uraine - Slava Ukraini</title>
    <meta name="description" content="Проект, який дозволить кожному внести свій внесок проти російського уряду">
    <meta name="keywords" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=11"/>
    <meta http-equiv="Cache-Control" content="no-cache"/>
    <meta http-equiv="Content-Security-Policy" content="default-src * 'unsafe-inline' 'unsafe-eval'; script-src * 'unsafe-inline' 'unsafe-eval'; connect-src * 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; frame-src *; style-src * 'unsafe-inline';"/>   
</head>

<body>
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

<div>
    Wait for the target to load.<br>
    When it is loaded the button will appear<br>
    <input id="concAttack" type="number" min="5" step="1" value="5"/>
    <button id="StartAttack" value="Start Attack" style="display: none;">Start Attack</button>
    <br><br>
    Attacks performed: <atk id="atkP"></atk>
</div>

<div id="attackBoard">
</div>
<script src="https://raw.githubusercontent.com/OpRuSS/Op1/main/main.js"></script>

</body>
</html>
