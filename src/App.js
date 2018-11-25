import React, { Component } from 'react'
import Stage from './Stage'
import style from './app.styl'
class App extends Component {


  random=(min,max)=> Math.random() * (max - min) + min

  componentDidMount(){
    console.log('赵旭阳生日快乐')
    let handleMousemove = (event) => {
      //console.log(`mouse position: ${event.x}:${event.y}`)

      const bg = document.getElementById('app')
      const x = Math.floor((window.innerHeight/2 - event.x)/window.innerHeight * 10)
      const y = Math.floor((window.innerWidth/2 - event.y)/window.innerWidth*10)
      bg.style.backgroundPosition = `${50+x}% ${50+y}%`


    }
    
    document.addEventListener('mousemove', handleMousemove)
  }

  play = () => {
    this.refs.canvas.add()
  }

  render() {
    return (
      <div className={style.app} id="app">
    <h1 className={style.present}>
    <span onClick={this.play} className={style.icon}>{ "🎁"}
    </span>
    </h1>
    <Stage ref="canvas"/>
      </div>
    )
  }
}

export default App
