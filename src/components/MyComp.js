import React from 'react';

export default function MyComp() {
  return (
    <div>
      {/* Root div */}
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>

        {/* Jumbotron */}

        <div className="jumbotron">
          <div className="container">
            <h1> Welcome!</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
              laboriosam voluptates exercitationem asperiores voluptatem veniam
              ducimus, explicabo adipisci suscipit, dolore quibusdam doloremque
              sint nihil distinctio, maiores odit atque sequi quia!
            </p>
            <a href="#" className="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>

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
        {/* GRIDs */}
        <h4>GRIDs</h4>
        <div className="row">
          <div className="col-md-8 col-sm-8">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              corporis nihil, quam laboriosam quo error provident obcaecati
              dolore. Soluta numquam fugiat iste officia ipsum, alias modi
              ratione aliquid mollitia. Nisi!
            </p>
          </div>
          <div className="col-md-4 col-sm-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              corporis nihil, quam laboriosam quo error provident obcaecati
              dolore. !
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              corporis nihil, quam laboriosam quo error provident obcaecati
              dolore. Soluta numquam fugiat iste officia ipsum, alias modi
              ratione aliquid mollitia. Nisi!
            </p>
          </div>
          <div className="col-md-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              corporis nihil, quam laboriosam quo error provident obcaecati
              dolore. !
            </p>
          </div>

          <div className="col-md-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              corporis nihil, quam laboriosam quo error provident obcaecati
              dolore. !
            </p>
          </div>
        </div>
      </div>
      <hr />
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
      </div>

      <div className="container">
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
        {/* Badges */}
        <a href="#" className="btn btn-primary">
          Inbox <span className="badge badge-light">13</span>{' '}
        </a>
        <button className="btn btn-info">
          Message <span className="badge badge-light">23</span>{' '}
        </button>
      </div>

      <div className="container">
        <hr />
        {/* Images */}
        <img
          src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1712f4c1c8a%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1712f4c1c8a%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2273.6328125%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          alt="..."
          className="img-thumbnail"
        />{' '}
        <br />
        <br />
        <img
          src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1712f4c1c8a%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1712f4c1c8a%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2273.6328125%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          className="rounded float-left"
        />
        <img
          src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1712f4c1c8a%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1712f4c1c8a%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2273.6328125%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          className="rounded float-right"
          alt="..."
        />
      </div>

      <div style={{ height: '400px' }}></div>
      {/* Root div */}
    </div>
  );
}
