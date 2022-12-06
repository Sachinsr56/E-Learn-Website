import React from "react";

const Shop = () => {
  return (
    <div>
      <section class="h-100 h-custom">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col">
              <div class="card">
                <div class="card-body p-4">
                  <div class="row">
                    <div class="col-lg-7">
                      <h5 class="mb-3">
                        <a href="#!" class="text-body">
                          <i class="fas fa-long-arrow-alt-left me-2"></i>Bumper
                          Offer
                        </a>
                      </h5>

                      <div class="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p class="mb-1"></p>
                          {/* <p class="mb-0"></p> */}
                        </div>
                        <div>
                          <p class="mb-0">
                            <span class="text-muted">Sort by:</span>{" "}
                            <a href="#!" class="text-body">
                              price <i class="fas fa-angle-down mt-1"></i>
                            </a>
                          </p>
                        </div>
                      </div>

                      <div class="card mb-3">
                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <div class="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src="https://www.lifewire.com/thmb/sC-xsCCN9WdW9l5h-T6XqpuPGR0=/5697x3446/filters:fill(auto,1)/hacker-with-laptop-922359280-5c32d4a546e0fb00011bb991.jpg"
                                  class="img-fluid rounded-3"
                                  alt="Shopping item"
                                />
                              </div>
                              <div class="ms-3">
                                <h5>Ethical Hacking</h5>
                              </div>
                            </div>
                            <div class="d-flex flex-row align-items-center">
                              <div>
                                <h5 class="mb-0">$90</h5>
                              </div>
                              <a href="#!">
                                <i class="fas fa-trash-alt"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <button className="btn btn-warning">Buy</button>
                      </div>

                      <div class="card mb-3">
                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <div class="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src="https://w3-lab.com/wp-content/uploads/2019/12/Get-the-Most-Fancied-Web-Development-Services-min-scaled.jpg"
                                  class="img-fluid rounded-3"
                                  alt="Shopping item"
                                />
                              </div>
                              <div class="ms-3">
                                <h5>Web Development</h5>
                              </div>
                            </div>
                            <div class="d-flex flex-row align-items-center">
                              <div>
                                <h5 class="mb-0">$99</h5>
                              </div>
                              <a href="#!">
                                <i class="fas fa-trash-alt"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <button className="btn btn-warning">Buy</button>
                      </div>

                      <div class="card mb-3">
                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <div class="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src="https://th.bing.com/th/id/OIP.z08lMUqQvC2ba9NTaHX2bgHaE7?pid=ImgDet&rs=1https://th.bing.com/th/id/OIP.z08lMUqQvC2ba9NTaHX2bgHaE7?pid=ImgDet&rs=1"
                                  class="img-fluid rounded-3"
                                  alt="Shopping item"
                                />
                              </div>
                              <div class="ms-3">
                                <h5>Public Speaking</h5>
                              </div>
                            </div>
                            <div class="d-flex flex-row align-items-center">
                              <div>
                                <h5 class="mb-0">$199</h5>
                              </div>
                              <a href="#!">
                                <i class="fas fa-trash-alt"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <button className="btn btn-warning">Buy</button>
                      </div>
                    </div>
                    <div class="col-lg-5">
                      <div class="card bg-primary text-white rounded-3">
                        <div class="card-body">
                          <div class="d-flex justify-content-between align-items-center mb-4">
                            <h5 class="mb-0">Card details</h5>
                          </div>

                          <p class="small mb-2">Card type</p>
                          <a href="#!" type="submit" class="text-white">
                            <i class="fab fa-cc-mastercard fa-2x me-2"></i>
                          </a>
                          <a href="#!" type="submit" class="text-white">
                            <i class="fab fa-cc-visa fa-2x me-2"></i>
                          </a>
                          <a href="#!" type="submit" class="text-white">
                            <i class="fab fa-cc-amex fa-2x me-2"></i>
                          </a>
                          <a href="#!" type="submit" class="text-white">
                            <i class="fab fa-cc-paypal fa-2x"></i>
                          </a>

                          <form class="mt-4">
                            <div class="form-outline form-white mb-4">
                              <input
                                type="text"
                                id="typeName"
                                class="form-control form-control-lg"
                                siez="17"
                                placeholder="Cardholder's Name"
                              />
                              <label class="form-label" for="typeName">
                                Cardholder's Name
                              </label>
                            </div>

                            <div class="form-outline form-white mb-4">
                              <input
                                type="text"
                                id="typeText"
                                class="form-control form-control-lg"
                                siez="17"
                                placeholder="1234 5678 9012 3457"
                                minlength="19"
                                maxlength="19"
                              />
                              <label class="form-label" for="typeText">
                                Card Number
                              </label>
                            </div>

                            <div class="row mb-4">
                              <div class="col-md-6">
                                <div class="form-outline form-white">
                                  <input
                                    type="text"
                                    id="typeExp"
                                    class="form-control form-control-lg"
                                    placeholder="MM/YYYY"
                                    size="7"
                                    minlength="7"
                                    maxlength="7"
                                  />
                                  <label class="form-label" for="typeExp">
                                    Expiration
                                  </label>
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="form-outline form-white">
                                  <input
                                    type="password"
                                    id="typeText"
                                    class="form-control form-control-lg"
                                    placeholder="&#9679;&#9679;&#9679;"
                                    size="1"
                                    minlength="3"
                                    maxlength="3"
                                  />
                                  <label class="form-label" for="typeText">
                                    Cvv
                                  </label>
                                </div>
                              </div>
                            </div>
                          </form>

                          <div>
                            <h5>Add item to cart</h5>
                          </div>

                          <button
                            type="button"
                            class="btn btn-info btn-block btn-lg"
                          >
                            <div class="d-flex justify-content-between">
                              Pay{" "}
                              <i class="fas fa-long-arrow-alt-right ms-2"></i>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
