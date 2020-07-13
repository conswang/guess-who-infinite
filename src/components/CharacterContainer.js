import React, { useState, useEffect } from 'react';
import Card from './Card';
import { socket } from '../App';
import { config } from '../config/config';

export default (props) => {
    const [index, setIndex] = useState([0, 8]);
    const [datas, setDatas] = useState(props.images)
    
    useEffect(() => {
        if (props.category !== '') {
            if (props.images === config.DEFAULT_IMAGES) {
                socket.emit('getImages', props.category);
                socket.on('returnImages', images => {
                    setDatas(images)
                    props.setImages(images);
                })
            } else {
                setDatas(props.images);
            }
        }
    }, [props.category, props.images])

    const populateCards = () => {
        return datas.map((card, idx) => {
            return <Card img={card.img} 
                         isSelect={card.selected} 
                         idx={idx}
                         selectCard={selectCard} 
                         inFinalSelectMode={props.inFinalSelectMode} 
                         callback={ props.callback }>
                    </Card>
        })
    }

    const rotateLeft = () => {
        if(index[0] === 0) return
        const newIdx = index.map(idx => idx - 8)
        setIndex(newIdx);
    }

    const rotateRight = () => {
        if(index[1] >= populateCards().length - 8) return
        const newIdx = index.map(idx => idx + 8);
        setIndex(newIdx);
    }

    const selectCard = (event) => {
        const newArr = datas.map((data, i) => {
            if(i === event) {
                data.selected = !data.selected
            }
            return data
        })
        setDatas(newArr)
    }

    return (
        <div className="character-wrapper">
            <div className="grid-container">
                <button onClick={ rotateLeft } className="left-btn" >&#9664;</button>
                <div className="character-container">
                    { populateCards().slice(index[0], index[1]) }
                </div>
                <button onClick={ rotateRight } className="right-btn" >&#9654;</button>
            </div>
        </div>
    )
}
