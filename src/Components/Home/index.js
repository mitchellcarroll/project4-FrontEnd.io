import Banner from './Banner';
import MainView from './MainView';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';

const Promise = global.Promise;

const mapStateToProps = state => ({
  appName: state.common.appName
});

const mapDispatchToProps = dispatch => ({
  onLoad: (payload) =>
    dispatch({ type: 'HOME_PAGE_LOADED', payload }),
  onLoad: () =>
    dispatch({ type: 'HOME_PAGE_LOADED' })
});

class Home extends React.Component {
  // Lifecycle hook
  componentWillMount(){
    this.props.onLoad(agent.Articles.all());
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    return (
      <div className="home-page">

        <Banner appName={this.props.appName} />
// main banner
        <div className="container page">
          <div className="row">
            <MainView />

// category tags
            <div className="col-md-3">
              <div className="sidebar">

                <p>Popular Tags</p>

              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
