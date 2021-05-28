import React, { useEffect, useState } from 'react';

const emptSlide = {
    title: "Today's workout plan",
    text: "We're gonna do 3 fundamental exercises."
}

export default function Slides({ slides }) {
    const [slide, setSlide] = useState({ ...emptSlide })
    let [currentlyIndex, setCurrentlyIndex] = useState(0)

    const handleRestart = () => {
        setCurrentlyIndex(0)
        setSlide(slides[0])
        document.getElementById('button-prev').setAttribute('disabled', true)
        document.getElementById('button-next').removeAttribute('disabled')
    }
    const handlePrevious = (e) => {
        let indexNow = currentlyIndex - 1

        setCurrentlyIndex(indexNow)
        document.getElementById('button-next').removeAttribute('disabled')
        console.log(indexNow, slides.length - 1)
        if (indexNow <= 0) {
            document.getElementById('button-prev').setAttribute('disabled', true)
            document.getElementById('button-restart').setAttribute('disabled', true)
            return
        }
        setSlide(slides[indexNow])
    }
    const handleNext = (e) => {
        let indexNow = currentlyIndex + 1
        setCurrentlyIndex(indexNow)
        document.getElementById('button-prev').removeAttribute('disabled')
        document.getElementById('button-restart').removeAttribute('disabled')
        console.log(indexNow, slides.length - 1)
        if (indexNow === slides.length - 1) {
            document.getElementById('button-next').setAttribute('disabled', true)
            return
        }
        setSlide(slides[indexNow])
    }

    useEffect(() => {
        document.getElementById('button-prev').setAttribute('disabled', true)
        document.getElementById('button-restart').setAttribute('disabled', true)
        setSlide(slides[0])
    }, [slides]) // run one time only


    return (
        <div>
            <div id="navigation" className="text-center">
                <button id="button-restart" data-testid="button-restart" className="small outlined" onClick={handleRestart}>Restart</button>
                <button id="button-prev" data-testid="button-prev" className="small" onClick={handlePrevious}>Prev</button>
                <button id="button-next" data-testid="button-next" className="small" onClick={handleNext}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slide.title.toString()}</h1>
                <p data-testid="text">{slide.text.toString()}</p>
            </div>
        </div>)
}