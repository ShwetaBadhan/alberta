<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="utf-8">
<title>@yield('title', 'Alberta')</title>
 <!-- favicon -->
    <link rel="icon" type="image/x-icon" href="assets/img/logo/favicon-96x96.png" />

    <!-- css -->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="assets/css/all-fontawesome.min.css" />
    <link rel="stylesheet" href="assets/css/animate.min.css" />
    <link rel="stylesheet" href="assets/css/magnific-popup.min.css" />
    <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
    <link rel="stylesheet" href="assets/css/slimselect.min.css" />
    <link rel="stylesheet" href="assets/css/style.css" />
</head>

<body>

 <main class="main">
  
@include('components.navbar')
@yield('content')

@include('components.footer')

  </main><!-- End Page Wrapper -->

   <!-- scroll-top -->
    <a href="#" id="scroll-top"><i class="far fa-arrow-up"></i></a>
    <!-- scroll-top end -->
 <!-- js -->
    <script src="assets/js/jquery-3.7.1.min.js"></script>
    <script src="assets/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/jquery.magnific-popup.min.js"></script>
    <script src="assets/js/isotope.pkgd.min.js"></script>
    <script src="assets/js/jquery.appear.min.js"></script>
    <script src="assets/js/owl.carousel.min.js"></script>
    <script src="assets/js/counter-up.js"></script>
    <script src="assets/js/wow.min.js"></script>
    <script src="assets/js/slimselect.min.js"></script>
    <script src="assets/js/gsap.min.js"></script>
    <script src="assets/js/ScrollTrigger.min.js"></script>
    <script src="assets/js/SplitText.min.js"></script>
    <script src="assets/js/main.js"></script>
</body>

</html>