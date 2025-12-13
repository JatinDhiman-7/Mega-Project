import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center text-align: left">
        <div className="container2">
          <div className="About-footer">
            <h4>About Us</h4>
            <p>
              We deliver the best food in town right to your doorstep.Quality
              food, quick delivery, and excellent service!
            </p>
          </div>

          <div className="Links-footer">
            <h4>Quick Links</h4>
            <Link>Terms & Condiions</Link>
            <br />
            <Link>Privacy Policy</Link>
            <br />
            <Link>Contact US</Link>
          </div>

          <div className="Address-footer">
            <h4>Address</h4>
            <p>
              9625958050 <br />
              food.rd@gmail.com <br />
              Noida Sector 16 FM Road
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
