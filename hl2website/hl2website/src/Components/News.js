import React, { Component } from "react";

export default class News extends Component {
  render() {
    return (
      <section>
        <div
          class="fullbar-item w-100 cursor-pointer"
          onclick="location.href='#'"
        >
          <div class="container">
            <div class="row py-3 py-md-5 align-items-center border-top">
              <div class="col-md-10">
                <h3 class="feed-item-heading m-0 font-weight-800">
                  <a class="text-black" href="#">
                    test testtesttesttesttesttesttesttesttesttesttesttesttest
                  </a>
                </h3>
              </div>
              <div class="col-md-2">
                <p class="m-0 text-pink text-uppercase">August 28th, 2019</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
