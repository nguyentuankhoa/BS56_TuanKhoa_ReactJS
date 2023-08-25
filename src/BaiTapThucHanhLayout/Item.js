import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <section className="pt-4">
        <div className="container px-lg-5">
          <div className="row gx-lg-5">
            <div className="6 col-xxl-3 mb-5">
              <div className="card bg-light border-0 h-100">
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i className="bi bi-collection" />
                  </div>
                  <h2 className="fs-4 fw-bold">Fresh new layout</h2>
                  <p className="mb-4">
                    With Bootstrap 5, we've created a fresh new layout for this
                    template!
                  </p>
                  <a className="btn btn-primary btn-lg" href="#!">
                    Call to action
                  </a>
                </div>
              </div>
            </div>
            <div className="6 col-xxl-3 mb-5">
              <div className="card bg-light border-0 h-100">
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i className="bi bi-card-heading" />
                  </div>
                  <h2 className="fs-4 fw-bold">Jumbotron hero header</h2>
                  <p className="mb-4">
                    The heroic part of this template is the jumbotron hero
                    header!
                  </p>
                  <a className="btn btn-primary btn-lg" href="#!">
                    Call to action
                  </a>
                </div>
              </div>
            </div>
            <div className="6 col-xxl-3 mb-5">
              <div className="card bg-light border-0 h-100">
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i className="bi bi-bootstrap" />
                  </div>
                  <h2 className="fs-4 fw-bold">Feature boxes</h2>
                  <p className="mb-5">
                    We've created some custom feature boxes using Bootstrap
                    icons!
                  </p>
                  <a className="btn btn-primary btn-lg" href="#!">
                    Call to action
                  </a>
                </div>
              </div>
            </div>
            <div className="6 col-xxl-3 mb-5">
              <div className="card bg-light border-0 h-100">
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i className="bi bi-bootstrap" />
                  </div>
                  <h2 className="fs-4 fw-bold">Feature boxes</h2>
                  <p className="mb-5">
                    We've created some custom feature boxes using Bootstrap
                    icons!
                  </p>
                  <a className="btn btn-primary btn-lg" href="#!">
                    Call to action
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
