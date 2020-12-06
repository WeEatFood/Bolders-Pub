import React from 'react';
import Img from 'gatsby-image';
import '../../scss/online.scss';

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
        <section className="online__menu py-5">
          <div className="online__menu__container">
            <h1>Online-Menu</h1>
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
            <div className="row">
              {this.state.menuItems.map(({ node }) => {
                return (
                  <div key={node.id} className="col-11 col-md-6 my-3 d-flex mx-auto">
                    <div>
                      <Img fixed={node.image.fixed} className="online__image" />
                    </div>
                    <div className="flex-grow-1 px-3">
                      <div className="d-flex justify-content-between">
                        <h6 id="title">{node.title}</h6>
                        <h6 id="price">${node.price}</h6>
                      </div>
                      <p className="text-muted text-left">
                        <p>{node.desc.desc}</p>
                      </p>
                    </div>
                  </div>
                );
              })}
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

OnlineItems.propTypes = {};
