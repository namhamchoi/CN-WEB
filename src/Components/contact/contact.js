import React from 'react';
import GoogleMap from '../GoogleMap/GoogleMap';

class Contact extends React.Component {
  onScroll = () => {
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(this.onScroll);
      window.scrollTo(0, currentScroll - (currentScroll / 5));
    }
  }

  render() {
    this.onScroll();
    return (
      <div data-aos="fade-left">
        <section className="contact spad">
          <div className="container">
            <div className="contact__text">
              <div className="row">
                <div className="col-lg-12">
                  <div className="breadcrumb__text">
                    <h2>Contact</h2>
                    <div className="breadcrumb__option">
                      <span>Contact</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="contact__map">
                    <GoogleMap />
                  </div>
                  <div className="contact__widget">
                    <ul>
                      <li>
                        <i className="fa fa-map-marker"></i>
                        <span>480 Núi Thành - Đà Nẵng </span>
                      </li>
                      <li>
                        <i className="fa fa-mobile"></i>
                        <span>Phone: 0868612957</span>
                      </li>
                      <li>
                        <i className="fa fa-envelope-o"></i>
                        <span>Email: nam30076@gmail.com</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="contact__form">
                    <div className="contact__form__title">
                      <h2>LIÊN LẠC</h2>
                      <p>Chúng tôi mong muốn website có thể cung cấp các dịch vụ tốt nhất cho khách hàng.
                        Mọi thắc mắc xin liên hệ qua email bên dưới hoặc điền vào mẫu dưới đây.
                      </p>
                    </div>
                    <form action="#">
                      <input type="text" placeholder="Name" />
                      <input type="text" placeholder="Email" />
                      <input type="text" placeholder="Website" />
                      <textarea placeholder="Message"></textarea>
                      <button type="submit" className="site-btn">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Contact;