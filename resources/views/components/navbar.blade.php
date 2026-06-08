  <!-- header area -->
  <header class="header-1">
      <!-- navbar -->
      <div class="main-navigation">
          <nav class="navbar navbar-expand-lg">
              <div class="container position-relative">
                  <a class="navbar-brand" href="{{ route('home') }}">
                      <img src="assets/img/logo/alberta-logo.png" alt="logo" />
                  </a>
                  <div class="mobile-menu-right">
                      <div class="mobile-menu-btn">
                          <button type="button" class="nav-right-link search-box-outer">
                              <i class="far fa-search"></i>
                          </button>
                      </div>
                      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"
                          aria-label="Toggle navigation">
                          <span></span>
                          <span></span>
                          <span></span>
                      </button>
                  </div>
                  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar">
                      <div class="offcanvas-header">
                          <a href="{{ route('home') }}" class="offcanvas-brand" id="offcanvasNavbarLabel">
                              <img src="assets/img/logo/alberta-logo.png" alt="" />
                          </a>
                          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
                              <i class="far fa-xmark"></i>
                          </button>
                      </div>
                      <div class="offcanvas-body gap-xl-4">
                          <ul class="navbar-nav justify-content-end flex-grow-1">
                              <li class="nav-item">
                                  <a class="nav-link active" href="#home">Home</a>

                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" href="#about-us">About</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link " href="#services">Services</a>

                              </li>

                              {{-- <li class="nav-item dropdown">
                                  <a class="nav-link " href="#portfolio">Portfolio</a>

                              </li> --}}

                              <li class="nav-item">
                                  <a class="nav-link" href="#contact-us">Contact Us</a>
                              </li>
                          </ul>
                          <!-- nav-right -->
                          <div class="nav-right">
                              <div class="search-btn">
                                  <button type="button" class="nav-right-link search-box-outer">
                                      <i class="far fa-search"></i>
                                  </button>
                              </div>
                              <div class="call-now">
                                  <div class="icon">
                                      <img src="assets/img/icon/call-2.svg" alt="" />
                                  </div>
                                  <div class="content">
                                      <span>Call Now</span>
                                      <h4><a href="tel:403-498-7777">403-498-7777</a></h4>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </nav>
      </div>
      <!-- navbar end-->
  </header>
  <!-- header area end -->
