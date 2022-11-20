<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Martel+Sans&family=Roboto+Condensed&display=swap" rel="stylesheet">

        @viteReactRefresh
        @vite('resources/js/App.jsx')
        
    </head>
    <body style="margin:0">
        <div id="root"><div>
    </body>
</html>
