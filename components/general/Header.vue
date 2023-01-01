<template>
    <div>
      <div class="container">
        <header
          class="
            d-flex
            flex-wrap
            align-items-center
            justify-content-center justify-content-md-between
            py-3
          "
        >
          <a
            href="/"
            class="
              d-flex
              align-items-center
              col-md-3
              mb-2 mb-md-0
              text-dark text-decoration-none
            "
          >
            <img src="/img/logo.webp" alt="Your Company" height="60"/>
          </a>
  
          <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><NuxtLink to="/" class="nav-link px-2 link-secondary">Home</NuxtLink></li>
            <li><NuxtLink to="/posts" class="nav-link px-2 link-dark">Posts</NuxtLink></li>
            <li><NuxtLink to="/categories" class="nav-link px-2 link-dark">Categories</NuxtLink></li>
            <li><NuxtLink to="/tags" class="nav-link px-2 link-dark">Tags</NuxtLink></li>
            <li><NuxtLink to="/author" class="nav-link px-2 link-dark">Author</NuxtLink></li>
          </ul>
  
          <div class="col-md-3 text-end">
            <button type="button" class="btn btn-outline-primary me-2">
              Contact Us
            </button>
            <button type="button" class="btn btn-primary">Download Theme</button>
          </div>
        </header>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style>
  </style>