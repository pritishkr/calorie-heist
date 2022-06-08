import React, { useState } from 'react';

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Calorie-Heist</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link active" href="#">Catalog</a>
        <a class="nav-link active" href="#">BMI-Calculator</a>
        <a class="nav-link active" href="#">Account-Services</a>
      </div>
    </div>
  </div>
  <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
  <nav class="navbar bg-light">
  <div className="container">
  <form class="container-fluid justify-content-start">
    <button class="btn btn-outline-success me-2" type="button">Logout</button>
  </form>
  </div>
</nav>
</nav>
  )
}
