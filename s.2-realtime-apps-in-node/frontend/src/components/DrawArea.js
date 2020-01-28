import React from 'react';
import './DrawArea.css'
import Brush from './Brush';
import ColorPicker from './ColorPicker';



const imageFromURL = (url) => new Promise(resolve => {
  var image = new Image()
  if(!url) return resolve(image)
  image.src = url
  image.onload = () => {
    resolve(image)
  }
})


export default class DrawArea extends React.Component {

  state = {
    isDrawing: false,
    lastX: 0,
    lastY: 0,
    canvasURL: null,
    hue: 1,
    direction: true,
    controlDisplay: "none",
    controlLeft: "100%",
    customColor: `red`,
    color: "#000000",
    customStroke: false,
    minWidth: 5,
    mode: "",
    rainbow: false,
    selectedColor: 'red'
  }

  canvas = () => {
    return document.querySelector("#drawing");
  }

  ctx = () => {
    return this.canvas().getContext("2d");
  }

  componentDidMount = () => {
    const ctx = this.ctx()
    ctx.strokeStyle = "#BADA55";
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = this.state.minWidth
    this._draw()
  }

  componentDidUpdate(){
    this._draw()
  }

  async _draw(){
    const image = await imageFromURL(this.props.image)
    const canvasDraw = document.querySelector("canvas")
    const ctx = canvasDraw.getContext('2d')
    ctx.clearRect(0, 0, this.canvas().width, this.canvas().height)
    ctx.drawImage(image, 0, 0, this.canvas().width, this.canvas().height)
  }


  handleMouseUp = async () => {
    const newImage = document.createElement('canvas')
    newImage.height= window.innerHeight * 0.75 
    newImage.width= window.innerWidth * 0.70
    const ctx = newImage.getContext('2d')
    ctx.drawImage(await imageFromURL(this.props.image), 0, 0, this.canvas().width, this.canvas().height)
    ctx.drawImage(await imageFromURL(this.canvas().toDataURL()), 0, 0, this.canvas().width, this.canvas().height) // take in four arguments to fit the canvas size for all browsers. This is to stretch the img.
    const url = newImage.toDataURL()
    this.ctx().clearRect(0, 0, this.canvas().width, this.canvas().height)
    this.props.onChange(url)
    this.setState({ isDrawing: false })
  }


  //convert DOM pixel into canvas pixel, that's why the offset position is not right
  getMousePosition = (e) => {
    this.setState({
      isDrawing: true,
      lastX: e.nativeEvent.offsetX,
      lastY: e.nativeEvent.offsetY  // been adjusted to be relative to element
    })
  }


  drawMain = (e) => {
    const ctx = this.ctx();
    ctx.globalAlpha = 1
    ctx.beginPath();
    ctx.moveTo(this.state.lastX, this.state.lastY);
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY); //create a line betwwen coordinates
    ctx.stroke();// display that line created above
    ctx.strokeStyle = this.state.selectedColor || 'red'//`hsl(${this.state.hue}, 100%, 50%)`
  }


  draw = (e) => { //still in mouseDown
    const ctx = this.ctx();
    let hue = this.state.hue;
    this.ctx().lineWidth = this.state.minWidth // MUST be here, so everytime before the first stroke, it will check the new width first
    const canvas = this.canvas()
    //check brush style
    if (this.state.isDrawing == true) {
      if (this.state.mode == "") {
        this.drawMain(e)
        ctx.shadowColor = '';   //get rid of shadow style if any
        ctx.shadowBlur = 0;
      } else if (this.state.mode == "shadow") {
        this.shadow(e)
        this.drawMain(e)
      } else if (this.state.mode == "random dots") {
        ctx.beginPath();
        ctx.moveTo(this.state.lastX, this.state.lastY);
        ctx.stroke();
        ctx.strokeStyle = this.state.selectedColor || 'red'//`hsl(${this.state.hue}, 100%, 50%)`
        this.randomDots(e)
      } else if (this.state.mode == "stars" || this.state.mode == "stars rainbow") {
        this.addRandomPoint(e)
        this.star(e) //call draw star
      }
    }

    // testing state buffer

    this.setState({
      hue: hue,
      lastX: e.nativeEvent.offsetX,
      lastY: e.nativeEvent.offsetY,
    })
  }




  //functions for Brush
  handleInputChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    this.setState({
      [name]: value
    })

    this.ctx().lineWidth = this.state.minWidth

    if (value == "shadow") {
      this.setState({
        rainbow: false,
        mode: "shadow"
      })
    } else if (value == "random dots") {
      this.setState({
        rainbow: false,
        mode: "random dots"
      })
    } else if (value == "none") {
      this.setState({
        rainbow: false,
        mode: ""
      })
    } else if (value == "stars") {
      this.setState({
        rainbow: false,
        mode: "stars"
      })
    } else if (value == "stars rainbow") {
      this.setState({
        mode: "stars rainbow",
        rainbow: true
      })
    }
  }

  // call this function first everytime a new brush style is triggered
  clearStyle = (e) => {
    const ctx = this.ctx();
    ctx.globalAlpha = 1
    ctx.shadowColor = '';   //get rid of shadow style if any
    ctx.shadowBlur = 0;
    ctx.fillStyle = this.state.selectedColor || 'red'
  }

  shadow = (e) => {
    const ctx = this.ctx()
    ctx.globalAlpha = 1;
    ctx.shadowColor = this.state.selectedColor || 'red'
    ctx.shadowBlur = 30;
    ctx.fillStyle = this.state.selectedColor || 'red'

  }


  randomDots = (e) => {
    const ctx = this.ctx()
    let getRandomInt = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;  //max min
    ctx.lineJoin = ctx.lineCap = 'round';
    ctx.fillStyle = this.state.selectedColor || 'red'//`${this.state.selectedColor}`

    let points = []//, radius = 15
    points.push({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
      radius: getRandomInt(5, 20),
      opacity: Math.random()
    });

    for (var i = 0; i < points.length; i++) {
      ctx.beginPath();
      ctx.globalAlpha = points[i].opacity;
      ctx.arc(
        points[i].x, points[i].y, points[i].radius,
        false, Math.PI * 2, false);
      ctx.fill()
    }
  }


  star = (e) => {
    let points = this.addRandomPoint(e)
    for (var i = 0; i < points.length; i++) {
      this.drawStar(points[i]);
    }
  }

  drawStar = (options) => {
    let ctx = this.ctx()
    var length = 15;
    ctx.save();
    ctx.translate(options.x, options.y);
    ctx.beginPath();
    ctx.globalAlpha = options.opacity;
    ctx.rotate(Math.PI / 180 * options.angle);
    ctx.scale(options.scale, options.scale);
    ctx.strokeStyle = this.state.rainbow ? options.color : this.state.selectedColor;
    ctx.lineWidth = options.width;
    for (var i = 5; i--;) {
      ctx.lineTo(0, length);
      ctx.translate(0, length);
      ctx.rotate((Math.PI * 2 / 10));
      ctx.lineTo(0, -length);
      ctx.translate(0, -length);
      ctx.rotate(-(Math.PI * 6 / 10));
    }
    ctx.lineTo(0, length);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }

  addRandomPoint(e) {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let points = [], radius = 15
    points.push({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
      angle: getRandomInt(0, 180),
      width: getRandomInt(1, 10),
      opacity: Math.random(),
      scale: getRandomInt(1, 20) / 10,
      color: ('rgb(' + getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ')')
    });
    return points
  }


  render() {
    //console.log(this.state.mode)
    return (
      <div>
        <canvas height={window.innerHeight * 0.75} width={window.innerWidth * 0.70} style={{ position: 'relative' }} />
        <canvas height={window.innerHeight * 0.75} width={window.innerWidth * 0.70} style={{ position: 'absolute', left: 9 }}
          onMouseMove={this.draw}
          onMouseDown={(e) => this.getMousePosition(e)}
          onMouseUp={this.handleMouseUp}
          onMouseOut={() => this.setState({ isDrawing: false })}
          id="drawing" />
        <div style={{ float: 'right'}}>
          <div >
            <div>
              <Brush handleInputChange={this.handleInputChange}
                minWidth={this.state.minWidth}
                select={this.select}
                customColor={this.state.customColor}
                ctx={this.ctx}
                canvas={this.canvas}
                mode={this.state.mode}
              />
            </div>
          </div>
          <div >
            <ColorPicker currentColor={this.state.selectedColor} handleChange={color => this.setState({ selectedColor: color.hex })} />
          </div>
        </div>
      </div>
    )
  }
}