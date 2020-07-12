import React, { useState} from 'react';
import Card from './Card';

export default () => {
    const [index, setIndex] = useState([0, 8])
    
    const data = [
        { img: 'https://cdn.costumewall.com/wp-content/uploads/2017/02/robin-young-justice.jpg' },
        { img: 'https://i.pinimg.com/originals/89/dc/01/89dc01c61ad8a611ce7f786addd8add0.jpg' },
        { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/c/cf/Kid_Flash.png/revision/latest?cb=20111030171713' },
        { img: 'https://vignette.wikia.nocookie.net/loveinterest/images/3/3d/Miss_Martian_S1.jpg/revision/latest?cb=20161117192800' },
        { img: 'https://i.redd.it/p44xngejemv21.jpg' },
        { img: 'https://preview.redd.it/irwbjssxhw821.png?width=1062&format=png&auto=webp&s=68bd6af25f2e2f01db0a6c08e3704c7985d9f695'},
        { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/0/0e/Flash_2018.png/revision/latest?cb=20190723213430' },
        { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/a/a5/Superboy_2019.png/revision/latest?cb=20191201190422' },
        { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/6/64/Superman.png/revision/latest?cb=20170903114749' },
        { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/c/c0/Green_Arrow_2018.png/revision/latest?cb=20190714122824' },
        { img: 'https://vignette.wikia.nocookie.net/dchallofjustice/images/7/72/Yj-aquaman.jpg/revision/latest/scale-to-width-down/340?cb=20110709171331' },
        { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/1/15/Martian_Manhunter.png/revision/latest/top-crop/width/360/height/450?cb=20120329123652'},
        { img: 'https://cdn.costumewall.com/wp-content/uploads/2017/02/robin-young-justice.jpg' },
        { img: 'https://i.pinimg.com/originals/89/dc/01/89dc01c61ad8a611ce7f786addd8add0.jpg' },
        { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/c/cf/Kid_Flash.png/revision/latest?cb=20111030171713' },
        { img: 'https://vignette.wikia.nocookie.net/loveinterest/images/3/3d/Miss_Martian_S1.jpg/revision/latest?cb=20161117192800' },
        { img: 'https://i.redd.it/p44xngejemv21.jpg' },
        { img: 'https://preview.redd.it/irwbjssxhw821.png?width=1062&format=png&auto=webp&s=68bd6af25f2e2f01db0a6c08e3704c7985d9f695'},
        { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/0/0e/Flash_2018.png/revision/latest?cb=20190723213430' },
        { img: 'https://i.redd.it/p44xngejemv21.jpg' },
        { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/6/64/Superman.png/revision/latest?cb=20170903114749' },
        { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/c/c0/Green_Arrow_2018.png/revision/latest?cb=20190714122824' },
        { img: 'https://vignette.wikia.nocookie.net/dchallofjustice/images/7/72/Yj-aquaman.jpg/revision/latest/scale-to-width-down/340?cb=20110709171331' },
        { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/1/15/Martian_Manhunter.png/revision/latest/top-crop/width/360/height/450?cb=20120329123652'},
        { img: 'https://cdn.costumewall.com/wp-content/uploads/2017/02/robin-young-justice.jpg' },
        { img: 'https://i.pinimg.com/originals/89/dc/01/89dc01c61ad8a611ce7f786addd8add0.jpg' },
        { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/c/cf/Kid_Flash.png/revision/latest?cb=20111030171713' },
        { img: 'https://vignette.wikia.nocookie.net/loveinterest/images/3/3d/Miss_Martian_S1.jpg/revision/latest?cb=20161117192800' },
        { img: 'https://i.redd.it/p44xngejemv21.jpg' },
        { img: 'https://preview.redd.it/irwbjssxhw821.png?width=1062&format=png&auto=webp&s=68bd6af25f2e2f01db0a6c08e3704c7985d9f695'},
        { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/a/a5/Superboy_2019.png/revision/latest?cb=20191201190422' },
        { img: 'https://i.redd.it/p44xngejemv21.jpg' },
        { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/6/64/Superman.png/revision/latest?cb=20170903114749' },
        { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/c/c0/Green_Arrow_2018.png/revision/latest?cb=20190714122824' },
        { img: 'https://vignette.wikia.nocookie.net/dchallofjustice/images/7/72/Yj-aquaman.jpg/revision/latest/scale-to-width-down/340?cb=20110709171331' },
        { img: 'https://vignette.wikia.nocookie.net/youngjustice/images/1/15/Martian_Manhunter.png/revision/latest/top-crop/width/360/height/450?cb=20120329123652'}
    ]

    const populateCards = () => {
        return data.map((card, idx) => {
            // console.log(idx)
            return <Card img={card.img} idx={idx} cardIdx={ cardIdx }></Card>
        })
    }

    const cardIdx = (event) => {
        console.log(event.idx)
    }

    const rotateLeft = () => {
        if(index[0] === 0) return
        const newIdx = index.map(idx => idx - 9)
        setIndex(newIdx);
    }

    const rotateRight = () => {
        if(index[1] >= populateCards().length - 8) return
        const newIdx = index.map(idx => idx + 9);
        setIndex(newIdx);
    }

    return (
        <div className="grid-container">
            {console.log(index)}
            <button onClick={ rotateLeft }>left</button>
            <div className="character-container">
                { populateCards().slice(index[0], index[1])}
            </div>
            <button onClick={ rotateRight }>right</button>
        </div>
        
    )
}