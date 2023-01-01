<template>
    <div id="page">
      <div class="container text-center">
        <div class="row">
          <div class="col p-0">
            <h2>Categories</h2>
            <div class="row">
              <div class="col-lg-2 col-6 mx-auto">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><NuxtLink to="/">Home</NuxtLink></li>
                    <li class="breadcrumb-item"><NuxtLink to="#">Categories</NuxtLink></li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <CategoriesList />
      </div>
    </div>
  </template>
  
  