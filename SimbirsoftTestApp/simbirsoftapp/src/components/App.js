import React from 'react';
import { connect } from 'react-redux'
import { getWeather} from '../store/thunks/thunks'
import WeatherPage from './weatherPage/weatherPage';
import 'bootswatch/dist/slate/bootstrap.min.css';
import style from './App.module.css'
import HomePage from './homePage/HomePage';
import preloader from '../assets/img/preloader.svg'

class App extends React.Component {

  componentDidMount() {
    this.props.getWeather()
  }

  render() {
    return <div className={style.app}>
      {this.props.state.hasCoords
        ? <WeatherPage state={this.props.state} />
        : this.props.state.isLoading
          ? <img src={preloader} alt={'preloader'}/>
          : <HomePage />}
    </div>
  };
}

const mapStateToProps = (state) => {
  return {
    state: state.weatherReducer
  }
}

export default connect(mapStateToProps, {
  getWeather,
})(App);
