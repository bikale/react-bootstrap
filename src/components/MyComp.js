import React from 'react';

export default function MyComp() {
  return (
    <div>
      {/* Root div */}
      <div className="container">
        <h1 className="page-header">Hello world!</h1>
        <hr className="my-4" />
        <p className="page-header">
          {' '}
          <mark> Lorem ipsum dolor sit amet</mark> consectetur adipisicing elit.
          Sed repellat amet ab laudantium tempora architecto, repudiandae
          consequuntur inventore, aut nemo similique atque illo, earum alias ex
          aliquid asperiores sint quia
        </p>
        <p>
          <del>Lorem ipsum dolor sit amet consectetur</del> adipisicing elit.
          Sed repellat amet ab laudantium tempora architecto, repudiandae
          consequuntur inventore, aut nemo similique atque illo, earum alias ex
          aliquid asperiores sint quia. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eaque velit doloribus quaerat libero ab
          perspiciatis, dicta corporis repellendus odit in nisi consectetur
          exercitationem consequatur sunt est dignissimos temporibus voluptas?
          Temporibus!
        </p>
        <hr />
        {/* alignment exercise */}
        <p class="text-left text-lowercase">left Lorem ipsum</p>
        <p class="text-right text-uppercase">center Phasellus iaculis</p>
        <p class="text-center">right Nulla volutpat</p>
        <p class="text-justify">justified text</p>
        <p class="text-nowrap">no wrap text</p>

        {/* Quick float div */}
        <div className="float-right">Div floated to right</div>
        <div className="float-left">Div floated to left</div>

        {/* Clear float merge */}
        <div className="clearfix"></div>

        <hr />

        {/* blockquote */}

        <blockquote className="blockquote">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            numquam
          </p>
          <footer class="blockquote-footer">
            Quote by <cite>Yohannes Demmise (John Doe)</cite>
          </footer>
        </blockquote>

        <hr />
        {/* lists */}

        <ul className="list-unstyled">
          <li>Item One</li>
          <li>Item Two</li>
          <li>Item Three</li>
          <li>Item Four</li>
        </ul>
        <ul className="list-inline">
          <li className="list-inline-item">Item One</li>
          <li className="list-inline-item">Item Two</li>
          <li className="list-inline-item">Item Three</li>
          <li className="list-inline-item">Item Four</li>
        </ul>
      </div>

      <div className="container">
        {/* Buttons */}

        <a className="btn btn-primary" href="#" role="button">
          Link
        </a>
        <button className="btn btn-primary" type="submit">
          Button
        </button>
        <input className="btn btn-primary" type="button" value="Input" />

        <hr />

        {/* Button sizes */}
        <button className="btn btn-default btn-lg" type="submit">
          Button
        </button>
        <button className="btn btn-default btn-sm" type="submit">
          Small
        </button>
        <button className="btn btn-default btn-sm disabled" type="submit">
          Button disabled
        </button>
      </div>
      <hr />
      {/* Forms */}
      <div className="container">
        <form>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Add Name"
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              placeholder="Add Email"
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              className="form-control"
              placeholder="Add Message"
            ></textarea>
          </div>
          <div className="form-group">
            <label>Gender</label>
            <select className="form-control">
              <option selected>Choose...</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">other</option>
            </select>
          </div>
        </form>

        <form className="form-inline">
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="checkbox">
            <input type="checkbox" />
            Remember me
          </div>
          <button type="submit" className="btn btn-default">
            Login
          </button>
        </form>
      </div>

      <div className="container">
        {/* Styled Lists */}
        <hr />
        <div className="list-group">
          <a href="#" className="list-group-item active">
            Item One
          </a>
          <a href="" className="list-group-item">
            Item Two
          </a>
          <a href="" className="list-group-item list-group-item-success">
            Item Three
          </a>
          <a href="" className="list-group-item">
            Item Four
          </a>
        </div>
      </div>
      <hr />
      <div className="container">
        {/* Cards */}

        <div className="card">
          <div className="card-body">
            <h5 class="card-title">Card title</h5>
            <p>Card content goes here</p>
            <button className="btn btn-primary"> Click</button>
          </div>
          <div className="card-footer">Card Footer</div>
        </div>
      </div>

      <hr />
      {/* Alerts */}

      <div className="container">
        <div className="alert alert-success" role="alert">
          A Success Alert
        </div>
        <div className="alert alert-info" role="alert">
          An Info Alert
        </div>
        <div className="alert alert-danger" role="alert">
          A Danger Alert
        </div>
        <div className="alert alert-warning alert-dismissible" role="alert">
          <button type="button" className="close" data-dismiss="alert">
            {' '}
            <span>&times;</span>
          </button>
          You can close this alert
        </div>

        <hr />

        {/* progress bars */}
        <div className="progress">
          <div className="progress-bar w-50 progress-bar-striped"> 50%</div>
        </div>
        <br />
        <div className="progress">
          <div className="progress-bar w-50 progress-bar-striped progress-bar-animated">
            {' '}
            50%
          </div>
        </div>
      </div>

      <div style={{ height: '400px' }}></div>
      {/* Root div */}
    </div>
  );
}
