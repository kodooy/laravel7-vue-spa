<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- CSRF Token -->
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <title>{{ config('app.name', 'Laravel') }}</title>

  <!-- Scripts -->
  <script src="{{ asset('js/app.js') }}" defer></script>

  <!-- Fonts -->
  <link rel="dns-prefetch" href="//fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

  <!-- Styles -->
  <link href="{{ asset('css/app.css') }}" rel="stylesheet">

  {{-- PWA --}}
  <link rel="manifest" href="{{ url('manifest.json') }}">

  {{-- Add to homescreen for Chrome on Android --}}
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="application-name" content="SPA">
  <link rel="icon" sizes="512x512" href="{{ asset('images/icons/icon-512x512.png') }}">

  {{-- Add to homescreen for Safari on iOS --}}
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <meta name="apple-mobile-web-app-title" content="SPA">
  <link rel="apple-touch-icon" href="{{ asset('images/icons/icon-512x512.png') }}">
</head>
<body>
  <div id="app">
    @include('partials.preloader')
  </div>
</body>
</html>
