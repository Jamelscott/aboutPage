export default function Footer() {
  return (
      <footer className="main-footer fixed-bottom">
          <div className="container">
              <div className="row">
                {/* Column 1 */}
                <div className="col">
                    <h4>jamelCase 🐫</h4>
                    <ul className="list-unstyled">
                        <li>(123)456-789</li>
                        <li>jamelCase 🐫</li>
                        <li>123 jamelCase Egypt</li>
                    </ul>
                </div>
                {/* Column 2 */}
                <div className="col">
                    <h4>jamelCase 🐫</h4>
                    <ul className="list-unstyled">
                        <li>(123)456-789</li>
                        <li>jamelCase 🐫</li>
                        <li>123 jamelCase Egypt</li>
                    </ul>
                </div>
                {/* Column 3 */}
                <div className="col">
                    <h4>jamelCase 🐫</h4>
                    <ul className="list-unstyled">
                        <li>(123)456-789</li>
                        <li>jamelCase 🐫</li>
                        <li>123 jamelCase Egypt</li>
                    </ul>
                </div>
              </div>
              <hr/>
              <div className="row">
                  <p className="col-sm">
                      &copy;{new Date().getFullYear()} jamelCase | All rights reserved | Terms Of Service | Privacy
                  </p>
              </div>
          </div>
      </footer>
  );
}
