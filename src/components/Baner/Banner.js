import './Banner.css';
import Logo from '../../images/Logo.png'
import Bike from '../../images/bike.png'

function Banner() {
  return (
   
    <div className="header">
	<div className="container">

	<header className="nav">
		<div className="logo">
		<img src={Logo} alt=""/>
		</div>

		<div className="menu">
			<div className="menu-contact">
				<img src={Bike} alt =""/>
				<span>Express Delivery +1 234 567 890</span>
			</div>

			<div className="menu-list">
				<ul>
					<li><a href="*">Home</a></li>
					<li><a href="*">Menu</a> </li>
					<li><a href="*">Our Story</a></li>
					<li><a href="*">Contact Us</a></li>
				</ul>
			</div>
		</div>		
	</header>

	<div className="banner">
		<p>It is a good time for the great taste of burgers</p>	
		<h1>Burger</h1>
		<h3>Week</h3>
	</div>

	</div>	
</div>

  );
}

export default Banner;