import React from 'react';

// import './script'
import './styles.css'

export default function App() {
    return(
        <div class="clock">
            <div class="hand hour" data-hour-hand></div>
            <div class="hand minute" data-minute-hand></div>
            <div class="hand second" data-second-hand></div>
            <div class="number number1">1</div>
            <div class="number number2">2</div>
            <div class="number number3">3</div>
            <div class="number number4">4</div>
            <div class="number number5">5</div>
            <div class="number number6">6</div>
            <div class="number number7">7</div>
            <div class="number number8">8</div>
            <div class="number number9">9</div>
            <div class="number number10">10</div>
            <div class="number number11">11</div>
            <div class="number number12">12</div>
        </div>
    )
}