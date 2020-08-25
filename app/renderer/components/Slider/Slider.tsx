import * as React from "react";
import "./Slider.scss";

type SliderProps = {
  max?: string;
  value?: string;
  children?: React.ReactNode;
};

type SliderStates = {
  value: string;
  max: string;
};

export class Slider extends React.Component<SliderProps, SliderStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: props.value,
      max: props.max,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: any): void {
    this.setState({ value: event.target.value });
  }

  timeFormat = (time: string): string => {
    var convertedTime = parseInt(time);
    var minute = ~~(convertedTime / 60);
    var seconds = convertedTime % 60;

    var res =
      (convertedTime < 60 ? "00" : minute < 10 ? "0" + minute : minute) +
      ":" +
      (convertedTime < 60
        ? convertedTime < 10
          ? +"0" + time
          : time
        : seconds < 10
        ? "0" + seconds
        : seconds);
    return res;
  };

  render() {
    return (
      <div className="slider-container">
        <span className="slider-container__time slider-container__time_mr">
          {this.timeFormat(this.state.value)}
        </span>
        <input
          className="slider-container__slider"
          type="range"
          value={this.state.value}
          onChange={this.handleChange}
          min="0"
          max={this.state.max}
        />
        <span className="slider-container__time slider-container__time_ml">
          {this.timeFormat(this.state.max)}
        </span>
      </div>
    );
  }
}
