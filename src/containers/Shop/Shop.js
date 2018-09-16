import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Collection from './Collection/Collection';
class Shop extends Component {
    render () {
        return (
            <div className="shop">
          {/*
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                          */}
                
                <Route path="/" exact strict render={()=>(
                 <Collection  client={this.props.client} />
                 )}/>
                <Route path="/:shopid" exact strict render={({match})=>(
                 <Collection shopid={match.params.shopid} client={this.props.client} />
                 )}/>
                </div>
        );
    }
}

export default Shop;