import React from 'react';
import { Button, Container, Jumbotron } from 'react-bootstrap';
import Img from 'gatsby-image';
import { FaCartArrowDown } from 'react-icons/fa';
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
    if(category === 'all') {
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
    if(this.state.items.length > 0) {
      return (
        <section className='online__menu'>
          <Jumbotron className='info__jumbo' fluid>
            <Container className='info__container'>
              <Title title='Order Online' />
              <figure className='figure text-start ml-5 mt-2'>
                <p className='info__subtitle lead'>Here is a little more info about us.</p>
              </figure>
            </Container>
          </Jumbotron>
          <div className='online__menu__container'>
            <li
              className='nav-item ml-sm-5'
              style={ {
                zIndex: '13',
                listStyle: 'none',
                width: '5rem',
              } }
            >
              <span style={ { fontSize: '34px', fontWeight: 'normal', letterSpacing: '0.25px' } }>
                Cart
              </span>
              <span>
                <FaCartArrowDown className='cart-icon snipcart-checkout' />
              </span>
              {/*<span className="snipcart-items-count"></span>*/ }
              {/*<span className="snipcart-total-price"></span>*/ }
            </li>
            <div className='row mb-5'>
              <div className='col-10 mx-auto text-center'>
                { this.state.categories.map((category, index) => {
                  return (
                    <button
                      type='button'
                      key={ index }
                      className='online-menu__btn btn text-capitalize'
                      onClick={ () => this.handleItems(category) }
                    >
                      { category }
                    </button>
                  );
                }) }
              </div>
            </div>
            <h4>Order something nice for yourself</h4>
            <div className='container'>
              <div className='row align-items-stretch justify-content-start card-deck'>
                { this.state.menuItems.map(({ node }) => {
                  return (
                    <div key={ node.id } className='col-11 col-md-6 my-3 d-flex mx-auto card'>
                      <div className='view zoom overlay'>
                        <Img fixed={ node.image.fixed } className='online__image w-100' />
                        <h4 className='mb-0'><span
                          className='badge badge-primary badge-pill badge-news'>Sale</span></h4>
                        <a href='#'>
                          <div className='mask'>
                            <Img className='img-fluid w-100'
                                 src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg' />
                            <div className='mask rgba-black-slight'>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className='flex-grow-1 px-3'>
                        <div className='d-flex justify-content-between text-center'>
                          <h6 id='title'>{ node.title }</h6>
                          <p className='small text-muted text-uppercase mb-2'>Food</p>
                          <ul className='rating'>
                            <li>
                              <i className='fas fa-star fa-sm text-primary'></i>
                            </li>
                            <li>
                              <i className='fas fa-star fa-sm text-primary'></i>
                            </li>
                            <li>
                              <i classNamke='fas fa-star fa-sm text-primary'></i>
                            </li>
                            <li>
                              <i class='fas fa-star fa-sm text-primary'></i>
                            </li>
                            <li>
                              <i class='far fa-star fa-sm text-primary'></i>
                            </li>
                          </ul>
                            <h6 class='mb-3'>
                              <span class='text-danger mr-1' id='price'>${ node.price }</span>
                              <span class='text-grey'><s>$36.99</s></span>
                            </h6>
                            <Button
                              className='online__btn btn mt-3 text-capitalize snipcart-add-item'
                              data-item-id={ node.id }
                              data-item-name={ node.title }
                              data-item-price={ node.price }
                              data-item-url='https://bolderspub.netlify.app/online-menu'
                              data-item-image={ node.image.fixed.src }
                              data-item-description={ node.desc }
                            >
                              add to cart
                            </Button>
                            <button type='button' className='btn btn-light btn-sm mr-1 mb-2'>
                              <i class='fas fa-info-circle pr-2'></i>Details
                            </button>
                            <button type='button'
                                    className='btn btn-danger btn-sm px-3 mb-2 material-tooltip-main'
                                    data-toggle='tooltip' data-placement='top'
                                    title='Add to wishlist'>
                              <i class='far fa-heart'></i>
                            </button>
                        </div>
                      </div>
                </div>
                  {/*    <p className="text-muted text-left">*/}
                  {/*      <p>{node.desc.desc}</p>*/}
                  {/*    </p>*/}
                  // {  </div>}
                )
                }) }
              </div>
            </div>
          </div>
        </section>
      );
    } else {
      return (
        <section className='online-menu py-5'>
          <div className='online-menu__container'>
            <div className='row'>
              <div className='col-10 col-sm-6 mx-auto text-center text-capitalize'>
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

