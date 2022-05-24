import React from 'react';
import Logo from './../../assets/Icons'

function Header() {
  return (
    <header className="section-header">	
	<section className="header-main">
		<div className="container">
			<div className="row gy-3 align-items-center py-3 ">
				<div className="col-lg-2 col-sm-4 col-4">
					<a href="http://bootstrap-ecommerce.com" className="navbar-brand d-flex">
						<Logo />
                        <span className='ms-2'>My Shop</span>
					</a>
				</div>
				<div className="order-lg-last col-lg-5 col-sm-8 col-8">
					<div className="float-end">
						<a href="/" className="btn btn-outline-primary btn-sm"> 
						    <i className="fa fa-user"></i>  <span>Sign in  </span> 
						</a>
						<a href="/" className="btn btn-outline-primary btn-sm ms-2"> 
							<i className="fa fa-heart"></i>  <span>Wishlist</span>   
						</a>
						<a data-bs-toggle="offcanvas" href="/offcanvas_cart" className="btn btn-outline-primary btn-sm ms-2"> 
							<i className="fa fa-shopping-cart"></i> <span>My cart </span> 
						</a>
			        </div>
				</div> 
				<div className="col-lg-5 col-md-12 col-12">
					<form action="/" className="">
		              <div className="input-group">
		                <input type="search" className="form-control" placeholder="Product" />
		                <select className="form-select">
		                  <option value="">All type</option>
		                  <option value="codex">Special</option>
		                  <option value="comments">Only best</option>
		                  <option value="content">Latest</option>
		                </select>
		                <button className="btn btn-primary">
		                  <i className="fa fa-search"></i> <span>Search</span>
		                </button>
		              </div>
		            </form>
				</div>
				
			</div>
		</div>
	</section>

	<nav className="navbar navbar-light bg-white border-top navbar-expand-lg">
		<div className="container">
			<button className="navbar-toggler border" type="button" data-bs-toggle="collapse" data-bs-target="/navbar_main">
				<span className="navbar-toggler-icon"></span>
			</button>
			
			<div className="collapse navbar-collapse" id="navbar_main">
				<ul className="navbar-nav">
					<li className="nav-item">
						<a className="nav-link ps-0" href="/"> Categories </a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/">Hot offers</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/">Gift boxes</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/">Projects</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/">Menu item</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/">Menu name</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</header>
  );
}

export default Header;
