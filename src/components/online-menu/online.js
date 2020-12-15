import React from 'react';
import { Button, Container, Jumbotron } from 'react-bootstrap';
import Img from 'gatsby-image';
import { FaCartArrowDown, FaStar } from 'react-icons/fa';
import '../../scss/online.scss';
import Title from '../globals/title';

const getCategories = items => {
  let tempItems = items.map(items => {
    return items.node.category;
  });
  let tempCategories = new Set(tempItems);
  let categories = Array.from(tempCategories);
  categories = ['all', ...categories];
  return categories;
};

export default class OnlineItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: props.items.edges,
      menuItems: props.items.edges,
      categories: getCategories(props.items.edges),
    };
  }

  handleItems = category => {
    let tempItems = [...this.state.items];
    if (category === 'all') {
      this.setState(() => {
        return { menuItems: tempItems };
      });
    } else {
      let items = tempItems.filter(({ node }) => node.category === category);
      this.setState(() => {
        return { menuItems: items };
      });
    }
  };

  render() {
    if (this.state.items.length > 0) {
      return (
        <section className="online__menu">
          <Jumbotron className="info__jumbo" fluid>
            <Container className="info__container">
              <Title title="Order Online" />
              <figure className="figure text-start ml-5 mt-2">
                <p className="info__subtitle lead">Here is a little more info about us.</p>
              </figure>
            </Container>
          </Jumbotron>
          <div className="online__menu__container">
            <li
              className="nav-item ml-sm-5"
              style={{
                zIndex: '13',
                listStyle: 'none',
                width: '5rem',
              }}
            >
              <span style={{ fontSize: '34px', fontWeight: 'normal', letterSpacing: '0.25px' }}>
                Cart
              </span>
              <span>
                <FaCartArrowDown className="cart-icon snipcart-checkout" />
              </span>
              {/*<span className="snipcart-items-count"></span>*/}
              {/*<span className="snipcart-total-price"></span>*/}
            </li>
            <div className="row mb-5">
              <div className="col-10 mx-auto text-center">
                {this.state.categories.map((category, index) => {
                  return (
                    <button
                      type="button"
                      key={index}
                      className="online-menu__btn btn text-capitalize"
                      onClick={() => this.handleItems(category)}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>
            <h4>Order something nice for yourself</h4>
            <div className="page">
              <div className="row ">
                {this.state.menuItems.map(({ node }) => {
                  return (
                    <div key={node.id} className="col-sm col-4 col-md-6 my-3 d-flex shadow w-100">
                      <div className="">
                        <Img fixed={node.image.fixed} className="online__image" />
                        <a>
                          <div className="mask rgba-white-slight"></div>
                        </a>{' '}
                      </div>
                      <div className="flex-grow-1   text-center">
                        <h6 id="title" className="card-title">
                          {node.title}
                        </h6>
                        <h6 id="price" className="price">
                          ${node.price}
                        </h6>
                        <p className="text-muted text-left card-text">
                          <p>{node.desc.desc}</p>
                        </p>
                        <ul className="row rating">
                          <li>
                            <FaStar />
                          </li>
                          <li>
                            <FaStar />
                          </li>
                          <li>
                            <FaStar />
                          </li>
                          <li>
                            <FaStar />
                          </li>
                          <li>
                            <FaStar />
                          </li>
                        </ul>
                        <button
                          className="online__btn btn mt-3 text-capitalize snipcart-add-item"
                          data-item-id={node.id}
                          data-item-name={node.title}
                          data-item-price={node.price}
                          data-item-url="https://bolderspub.netlify.app/online-menu"
                          data-item-image={node.image.fixed.src}
                          data-item-description={node.desc}
                        >
                          add to cart
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      );
    } else {
      return (
        <section className="online-menu py-5">
          <div className="online-menu__container">
            <div className="row">
              <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                <h1>There are no items to display</h1>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }
}

// TODO set typechecking with proptypes for the item classes

OnlineItems.propTypes = {};

{
  /*</div>*/
}
{
  /*    <p className="text-muted text-left">*/
}
{
  /*      <p>{node.desc.desc}</p>*/
}
{
  /*    </p>*/
}
