import React from 'react'
import { Link } from 'gatsby'
import { Button } from 'react-bootstrap'

export default function MenuBar() {
    return (
        <>
            <nav className="menu">
                <Link to="/menu/appetizers">
                    <Button className="menu__btn" variant="" size="sm">
                        Appetizers
      </Button>
                </Link>
                <Link to="/menu/kitchen">
                    <Button className="menu__btn" variant="" size="sm">
                        Kitchen
      </Button>
                </Link>
                <Link to="/menu/dessert">
                    <Button className="menu__btn" variant="" size="sm">
                        Dessert
      </Button>
                </Link>
                <Link to="/menu/cocktails">
                    <Button className="menu__btn" variant="" size="sm">
                        Cocktails
      </Button>
                </Link>
                <Link to="/menu/brewery">
                    <Button className="menu__btn" variant="" size="sm">
                        Brewery
      </Button>
                </Link>
                <Link to="/menu/wine">
                    <Button className="menu__btn" variant="" size="sm">
                        Wine
      </Button>
                </Link>
            </nav>
        </>
    )
}

