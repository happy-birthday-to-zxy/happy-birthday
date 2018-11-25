import React from 'react'
import * as PIXI from 'pixi.js'
import style from './app.styl'

export default class Statge extends React.Component {

        componentDidMount() {

            console.log()

            this.canvas = new PIXI.Application({
                width: window.innerWidth,
                height: window.innerHeight,
                antialias: true,
                transparent: true
            })

            this.emojis = []
            this.balloons = []
            this.possible = ['🎂', '😂', '赵旭阳生日快乐', '🎉', '✨']
            document.getElementById('stage').appendChild(this.canvas.view)
            this.canvas.ticker.add(delta => this.move(delta))
            this.count = 0
            this.tigger = 5
            this.stage = 'random'
        }

        random = (min, max) => Math.random() * (max - min) + min

        add = () => {
            this.count += 1
            let text = this.possible[Math.floor(Math.random() * this.possible.length)]
            let emoji = new PIXI.Text(text)
            emoji.position.set(
                Math.random() * window.innerWidth,
                Math.random() * window.innerHeight
            )
            this.canvas.stage.addChild(emoji)
            this.emojis.push(emoji)
            if (this.count % this.tigger === 0) {
                this.stage = 'balloons'
                this.makeBalloons()
            }
        }

        makeBalloons = () => {
            this.balloons = Array(100).fill().map(_ => {

                const style = new PIXI.TextStyle({
                    fontSize: 100,
                })

                let balloon = new PIXI.Text('🎈', style)
                balloon.position.set(
                    Math.floor(Math.random() * window.innerWidth),
                    Math.floor(window.innerHeight + Math.random() * 500)
                )
                this.canvas.stage.addChild(balloon)
                return balloon
            })

        }

        move = (delta) => {
            //        if (this.stage === 'random'){
            this.emojis = this.emojis.filter(emoji => {
                return emoji.x < window.innerWidth && emoji.y < window.innerHeight
            })
            //console.log(this.emojis)
            this.emojis.map(emoji => {
                emoji.x += this.random(-5, 5)
                emoji.y += this.random(-5, 5)
                return emoji
            })
            //  }else if(this.stage === 'balloons'){
            this.balloons.map(balloon => {
                balloon.x += this.random(-1, 1)
                balloon.y -= 5 + delta
                return balloon
            })
            //  }
        }

        render() {
            return ( <div id="stage" className={style.canvas}> </div>)
            }
        }